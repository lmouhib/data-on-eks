---
title: Argo Workflows on EKS
sidebar_position: 4
---
# Argo Workflows on EKS
Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC.

The example demonstrates how to use [Argo Workflows](https://argoproj.github.io/argo-workflows/) to assign jobs to Amazon EKS.

1. Use Argo Workflows to create a spark job.
2. Use Argo Workflows to create a spark job through spark operator.
3. Trigger Argo Workflows to create a spark job based on Amazon SQS message insert event by using [Argo Events](https://argoproj.github.io/argo-events/).

[Code repo](https://github.com/awslabs/data-on-eks/tree/main/schedulers/terraform/argo-workflow) for this example.

## Prerequisites:

Ensure that you have the following tools installed locally:

1. [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
2. [kubectl](https://Kubernetes.io/docs/tasks/tools/)
3. [terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
4. [Argo WorkflowCLI](https://github.com/argoproj/argo-workflows/releases/latest)

## Deploy

To provision this example:

```bash
git clone https://github.com/awslabs/data-on-eks.git
cd data-on-eks/schedulers/terraform/argo-workflow

region=<your region> # set region variable for following commands
terraform init
terraform apply -var region=$region #defaults to us-west-2
```

Enter `yes` at command prompt to apply

The following components are provisioned in your environment:
- A sample VPC, 2 Private Subnets and 2 Public Subnets
- Internet gateway for Public Subnets and NAT Gateway for Private Subnets
- EKS Cluster Control plane with one managed node group
- EKS Managed Add-ons: VPC_CNI, CoreDNS, Kube_Proxy, EBS_CSI_Driver
- K8S Metrics Server, CoreDNS Autoscaler, Cluster Autoscaler, AWS for FluentBit, Karpenter, Argo Workflows, Argo Events, Kube Prometheus Stack, Spark Operator and Yunikorn Scheduler
- K8s roles and rolebindings for Argo Workflows and Argo Events

![terraform-output](img/terraform-output-argo.png)

## Validate

The following command will update the `kubeconfig` on your local machine and allow you to interact with your EKS Cluster using `kubectl` to validate the deployment.

### Run `update-kubeconfig` command:

```bash
aws eks --region eu-west-1 update-kubeconfig --name argoworkflows-eks
```

### List the nodes

```bash
kubectl get nodes

# Output should look like below
NAME                                       STATUS   ROLES    AGE   VERSION
ip-10-1-0-189.eu-west-1.compute.internal   Ready    <none>   10m   v1.27.3-eks-a5565ad
ip-10-1-0-240.eu-west-1.compute.internal   Ready    <none>   10m   v1.27.3-eks-a5565ad
ip-10-1-1-135.eu-west-1.compute.internal   Ready    <none>   10m   v1.27.3-eks-a5565ad
```

### List the namespaces in EKS cluster

```bash
kubectl get ns

# Output should look like below
NAME                    STATUS   AGE
argo-events             Active   7m45s
argo-workflows          Active   8m25s
data-team-a             Active   5m51s
default                 Active   25m
karpenter               Active   21m
kube-node-lease         Active   25m
kube-prometheus-stack   Active   8m5s
kube-public             Active   25m
kube-system             Active   25m
spark-operator          Active   5m43s
yunikorn                Active   5m44s
```

### Access Argo Workflow WebUI

```bash
kubectl -n argo-workflows port-forward deployment.apps/argo-workflows-server 2746:2746
argo auth token # get login token

# result:
Bearer k8s-aws-v1.aHR0cHM6Ly9zdHMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vP0FjdGlvbj1HZXRDYWxsZXJJZGVudGl0eSZWZXJzaW9uPTIwMTEtMDYtMTUmWC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNWNFhDV1dLUjZGVTRGMiUyRjIwMjIxMDEzJTJGdXMtd2VzdC0yJTJGc3RzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMjEwMTNUMDIyODAyWiZYLUFtei1FeHBpcmVzPTYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCUzQngtazhzLWF3cy1pZCZYLUFtei1TaWduYXR1cmU9NmZiNmMxYmQ0MDQyMWIwNTI3NjY4MzZhMGJiNmUzNjg1MTk1YmM0NDQzMjIyMTg5ZDNmZmE1YzJjZmRiMjc4OA
```

Open browser and enter `http://localhost:2746/` and paste the token

![argo-workflow-login](img/argo-workflow-login.png)

### Submit Spark Job with Argo Workflow

Modify `workflow-example/argo-spark.yaml` with your eks api server url

```bash
kubectl apply -f workflow-example/argo-spark.yaml

kubectl get wf -n argo-workflows
NAME    STATUS    AGE   MESSAGE
spark   Running   8s  
```

You can also check the workflow status from Web UI

![argo-wf-spark](img/argo-wf-spark.png)

### Submit Spark Job with Spark Operator and Argo Workflow

```bash
kubectl apply -f workflow-example/argo-spark-operator.yaml

kubectl get wf -n argo-workflows
NAME             STATUS      AGE     MESSAGE
spark            Succeeded   3m58s  
spark-operator   Running     5s  
```

The workflow status from web UI

![argo-wf-spark-operator](img/argo-wf-spark-operator.png)

## Trigger a workflow to create a spark job based on SQS message

### Install [eventbus](https://argoproj.github.io/argo-events/eventbus/eventbus/) which is for event transmission in argo events

```bash
kubectl apply -f argo-events-manifests/eventbus.yaml
```

### Deploy `eventsource-sqs.yaml` to link with external SQS

In this case, we configure a EventSource to license to the queue `test1` in region `us-east-1`. The eventsource is capable of monitoring events across regions, so the Amazon EKS cluster and Amazon SQS queue don’t need to be located in the same Region.

```bash
queue_name=test1
reqion_sqs=us-east-1

kubectl apply -f argo-events-manifests/eventsource-sqs.yaml
```

Let's create that queue in your account.

```bash
# create a queue
queue_url=$(aws sqs create-queue --queue-name $queue_name --region $region_sqs --output text)

# get your queue arn
aws sqs get-queue-attributes --queue-url $queue_url --attribute-names QueueArn --region $region_sqs

#Replace the following values in argo-events/sqs-accesspolicy.json
#<your queue arn>  
#<your event irsa arn> (you can get from terraform output)
aws sqs set-queue-attributes --queue-url $queue_url --attributes file://argo-events/sqs-accesspolicy.json --region $region_sqs
```

### Deploy `sensor-rbac.yaml` and `sensor-sqs-spark-crossns.yaml` for triggering workflow

```bash
kubectl apply -f argo-events-manifests/sensor-rbac.yaml
kubectl apply -f argo-events-manifests/sensor-sqs-sparkjobs.yaml
```

### Verify argo-events namespace

```bash
kubectl get all,eventbus,EventSource,sensor,sa,role,rolebinding -n argo-events

# Output should look like below
NAME                                                      READY   STATUS    RESTARTS   AGE
pod/argo-events-controller-manager-bfb894cdb-26qw7        1/1     Running   0          18m
pod/aws-sqs-crossns-spark-sensor-zkgz5-6584787c47-zjm9p   1/1     Running   0          44s
pod/aws-sqs-eventsource-544jd-8fccc6f8-w6ssd              1/1     Running   0          4m45s
pod/eventbus-default-stan-0                               2/2     Running   0          5m21s
pod/eventbus-default-stan-1                               2/2     Running   0          5m13s
pod/eventbus-default-stan-2                               2/2     Running   0          5m11s
pod/events-webhook-6f8d9fdc79-l9q9w                       1/1     Running   0          18m

NAME                                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
service/eventbus-default-stan-svc   ClusterIP   None           <none>        4222/TCP,6222/TCP,8222/TCP   5m21s
service/events-webhook              ClusterIP   172.20.4.211   <none>        443/TCP                      18m

NAME                                                 READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/argo-events-controller-manager       1/1     1            1           18m
deployment.apps/aws-sqs-crossns-spark-sensor-zkgz5   1/1     1            1           44s
deployment.apps/aws-sqs-eventsource-544jd            1/1     1            1           4m45s
deployment.apps/events-webhook                       1/1     1            1           18m

NAME                                                            DESIRED   CURRENT   READY   AGE
replicaset.apps/argo-events-controller-manager-bfb894cdb        1         1         1       18m
replicaset.apps/aws-sqs-crossns-spark-sensor-zkgz5-6584787c47   1         1         1       44s
replicaset.apps/aws-sqs-eventsource-544jd-8fccc6f8              1         1         1       4m45s
replicaset.apps/events-webhook-6f8d9fdc79                       1         1         1       18m

NAME                                     READY   AGE
statefulset.apps/eventbus-default-stan   3/3     5m21s

NAME                           AGE
eventbus.argoproj.io/default   5m22s

NAME                              AGE
eventsource.argoproj.io/aws-sqs   4m46s

NAME                                       AGE
sensor.argoproj.io/aws-sqs-crossns-spark   45s

NAME                                            SECRETS   AGE
serviceaccount/argo-events-controller-manager   0         18m
serviceaccount/argo-events-events-webhook       0         18m
serviceaccount/default                          0         18m
serviceaccount/event-sa                         0         16m
serviceaccount/operate-workflow-sa              0         53s

NAME                                                   CREATED AT
role.rbac.authorization.k8s.io/operate-workflow-role   2023-07-24T18:52:30Z

NAME                                                                  ROLE                         AGE
rolebinding.rbac.authorization.k8s.io/operate-workflow-role-binding   Role/operate-workflow-role   52s
```

### Test from SQS

Send a message from SQS: `{"message": "hello"}`

```bash
aws sqs send-message --queue-url $queue_url --message-body '{"message": "hello"}' --region $region_sqs
```

Argo Events would capture the message and trigger Argo Workflows to create a workflow for spark jobs.

```bash
kubectl get wf -A

# Output should look like below
NAMESPACE        NAME                           STATUS    AGE   MESSAGE
argo-workflows   aws-sqs-spark-workflow-hh79p   Running   11s  
```

Run the command below to check spark application driver pods and executor pods under data-team-a namespace.

```bash
kubectl get po -n data-team-a

# Output should look like below
NAME                               READY   STATUS    RESTARTS   AGE
event-wf-sparkapp-tcxl8-driver     1/1     Running   0          45s
pythonpi-a72f5f89894363d2-exec-1   1/1     Running   0          16s
pythonpi-a72f5f89894363d2-exec-2   1/1     Running   0          16s
```

See the SQS workflow status in web UI

![argo-wf-spark-operator](img/argo-wf-sqs-spark.png)

![argo-wf-spark-operator](img/argo-wf-sqs-spark-tree.png)


## Destroy

To teardown and remove the resources created in this example:

```bash
kubectl delete -f argo-events-manifests/.

terraform destroy -target="module.irsa_argo_events" -target="module.kubernetes_data_addons" -target="module.eks_blueprints_addons" -auto-approve -var region=$region
terraform destroy -target="module.eks" -auto-approve -var region=$region
terraform destroy -auto-approve -var region=$region
```
