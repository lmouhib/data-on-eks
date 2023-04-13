"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},A=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),p=u(a),k=o,g=p["".concat(i,".").concat(k)]||p[k]||c[k]||n;return a?r.createElement(g,s(s({ref:t},A),{},{components:a})):r.createElement(g,s({ref:t},A))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(7462),o=(a(7294),a(3905));const n={title:"Argo Workflows on EKS",sidebar_position:4},s="Argo Workflows on EKS",l={unversionedId:"job-schedulers/argo-workflows-eks",id:"job-schedulers/argo-workflows-eks",title:"Argo Workflows on EKS",description:"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC.",source:"@site/docs/job-schedulers/argo-workflows-eks.md",sourceDirName:"job-schedulers",slug:"/job-schedulers/argo-workflows-eks",permalink:"/data-on-eks/docs/job-schedulers/argo-workflows-eks",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/job-schedulers/argo-workflows-eks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Argo Workflows on EKS",sidebar_position:4},sidebar:"docs",previous:{title:"Airflow on EKS",permalink:"/data-on-eks/docs/job-schedulers/self-managed-airflow"},next:{title:"Streaming Platforms on EKS",permalink:"/data-on-eks/docs/category/streaming-platforms-on-eks"}},i={},u=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Validate",id:"validate",level:2},{value:"Run <code>update-kubeconfig</code> command:",id:"run-update-kubeconfig-command",level:3},{value:"List the nodes",id:"list-the-nodes",level:3},{value:"List the namespaces in EKS cluster",id:"list-the-namespaces-in-eks-cluster",level:3},{value:"Access Argo Workflow WebUI",id:"access-argo-workflow-webui",level:3},{value:"Submit Spark Job with Argo Workflow",id:"submit-spark-job-with-argo-workflow",level:3},{value:"Submit Spark Job with Spark Operator and Argo Workflow",id:"submit-spark-job-with-spark-operator-and-argo-workflow",level:3},{value:"Trigger a workflow to create a spark job based on SQS message",id:"trigger-a-workflow-to-create-a-spark-job-based-on-sqs-message",level:2},{value:"Install argo events controllers",id:"install-argo-events-controllers",level:3},{value:"Install eventbus which is for event transmission in argo events",id:"install-eventbus-which-is-for-event-transmission-in-argo-events",level:3},{value:"Deploy <code>eventsource-sqs.yaml</code> to link with external SQS",id:"deploy-eventsource-sqsyaml-to-link-with-external-sqs",level:3},{value:"Deploy <code>sensor-rbac.yaml</code> and <code>sensor-sqs-spark-crossns.yaml</code> for triggering workflow",id:"deploy-sensor-rbacyaml-and-sensor-sqs-spark-crossnsyaml-for-triggering-workflow",level:3},{value:"Verify argo-events namespace",id:"verify-argo-events-namespace",level:3},{value:"Test from SQS",id:"test-from-sqs",level:3},{value:"Destroy",id:"destroy",level:2}],A={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"argo-workflows-on-eks"},"Argo Workflows on EKS"),(0,o.kt)("p",null,"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC."),(0,o.kt)("p",null,"The example demonstrates how to use ",(0,o.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"Argo Workflows")," to assign jobs to Amazon EKS."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use Argo Workflows to create a spark job."),(0,o.kt)("li",{parentName:"ol"},"Use Argo Workflows to create a spark job through spark operator."),(0,o.kt)("li",{parentName:"ol"},"Trigger Argo Workflows to create a spark job based on Amazon SQS message insert event by using ",(0,o.kt)("a",{parentName:"li",href:"https://argoproj.github.io/argo-events/"},"Argo Events"),".")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/schedulers/terraform/argo-workflow"},"Code repo")," for this example."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,o.kt)("p",null,"Ensure that you have the following tools installed locally:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows/releases/latest"},"Argo WorkflowCLI"))),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"To provision this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\ncd data-on-eks/schedulers/terraform/argo-workflow\n\nregion=<your region> # set region variable for following commands\nterraform init\nterraform apply -var region=$region #defaults to us-west-2\n")),(0,o.kt)("p",null,"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," at command prompt to apply"),(0,o.kt)("p",null,"The following components are provisioned in your environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A sample VPC, 3 Private Subnets and 3 Public Subnets"),(0,o.kt)("li",{parentName:"ul"},"Internet gateway for Public Subnets and NAT Gateway for Private Subnets"),(0,o.kt)("li",{parentName:"ul"},"EKS Cluster Control plane with one managed node group"),(0,o.kt)("li",{parentName:"ul"},"EKS Managed Add-ons: VPC_CNI, CoreDNS, Kube_Proxy, EBS_CSI_Driver"),(0,o.kt)("li",{parentName:"ul"},"K8S metrics server, cluster autoscaler, Spark Operator and yunikorn scheduler"),(0,o.kt)("li",{parentName:"ul"},"K8s roles and rolebindings for argo workflows and argo events")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"terraform-output",src:a(9066).Z,width:"666",height:"88"})),(0,o.kt)("h2",{id:"validate"},"Validate"),(0,o.kt)("p",null,"The following command will update the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeconfig")," on your local machine and allow you to interact with your EKS Cluster using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to validate the deployment."),(0,o.kt)("h3",{id:"run-update-kubeconfig-command"},"Run ",(0,o.kt)("inlineCode",{parentName:"h3"},"update-kubeconfig")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region us-west-2 update-kubeconfig --name argoworkflows-eks\n")),(0,o.kt)("h3",{id:"list-the-nodes"},"List the nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n\n# Output should look like below\nNAME                                        STATUS   ROLES    AGE   VERSION\nip-10-1-131-99.us-west-2.compute.internal   Ready    <none>   26h   v1.23.9-eks-ba74326\nip-10-1-16-117.us-west-2.compute.internal   Ready    <none>   26h   v1.23.9-eks-ba74326\nip-10-1-80-41.us-west-2.compute.internal    Ready    <none>   26h   v1.23.9-eks-ba74326\n")),(0,o.kt)("h3",{id:"list-the-namespaces-in-eks-cluster"},"List the namespaces in EKS cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n\n# Output should look like below\nNAME              STATUS   AGE\nargo-events       Active   28h\ndata-team-a       Active   73m\nargo-workflows    Active   28h\ndefault           Active   30h\nkube-node-lease   Active   30h\nkube-public       Active   30h\nkube-system       Active   30h\nspark-operator    Active   30h\nyunikorn          Active   30h\n")),(0,o.kt)("h3",{id:"access-argo-workflow-webui"},"Access Argo Workflow WebUI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n argo-workflows port-forward deployment.apps/argo-workflows-server 2746:2746\nargo auth token # get login token\n\n# result:\nBearer k8s-aws-v1.aHR0cHM6Ly9zdHMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vP0FjdGlvbj1HZXRDYWxsZXJJZGVudGl0eSZWZXJzaW9uPTIwMTEtMDYtMTUmWC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNWNFhDV1dLUjZGVTRGMiUyRjIwMjIxMDEzJTJGdXMtd2VzdC0yJTJGc3RzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMjEwMTNUMDIyODAyWiZYLUFtei1FeHBpcmVzPTYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCUzQngtazhzLWF3cy1pZCZYLUFtei1TaWduYXR1cmU9NmZiNmMxYmQ0MDQyMWIwNTI3NjY4MzZhMGJiNmUzNjg1MTk1YmM0NDQzMjIyMTg5ZDNmZmE1YzJjZmRiMjc4OA\n")),(0,o.kt)("p",null,"Open browser and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:2746/")," and paste the token"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"argo-workflow-login",src:a(100).Z,width:"1568",height:"764"})),(0,o.kt)("h3",{id:"submit-spark-job-with-argo-workflow"},"Submit Spark Job with Argo Workflow"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow-example/argo-spark.yaml")," with your eks api server url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f workflow-example/argo-spark.yaml\n\nkubectl get wf -n argo-workflows\nNAME    STATUS    AGE   MESSAGE\nspark   Running   8s  \n")),(0,o.kt)("p",null,"You can also check the workflow status from Web UI"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"argo-wf-spark",src:a(9132).Z,width:"1904",height:"776"})),(0,o.kt)("h3",{id:"submit-spark-job-with-spark-operator-and-argo-workflow"},"Submit Spark Job with Spark Operator and Argo Workflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f workflow-example/argo-spark-operator.yaml\n\nkubectl get wf -n argo-workflows\nNAME             STATUS      AGE     MESSAGE\nspark            Succeeded   3m58s  \nspark-operator   Running     5s  \n")),(0,o.kt)("p",null,"The workflow status from web UI"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"argo-wf-spark-operator",src:a(8900).Z,width:"1710",height:"790"})),(0,o.kt)("h2",{id:"trigger-a-workflow-to-create-a-spark-job-based-on-sqs-message"},"Trigger a workflow to create a spark job based on SQS message"),(0,o.kt)("h3",{id:"install-argo-events-controllers"},"Install argo events controllers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/argoproj/argo-events/stable/manifests/install.yaml\nkubectl apply -f https://raw.githubusercontent.com/argoproj/argo-events/stable/manifests/install-validating-webhook.yaml\n")),(0,o.kt)("h3",{id:"install-eventbus-which-is-for-event-transmission-in-argo-events"},"Install ",(0,o.kt)("a",{parentName:"h3",href:"https://argoproj.github.io/argo-events/eventbus/eventbus/"},"eventbus")," which is for event transmission in argo events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f argo-events/eventbus.yaml\n")),(0,o.kt)("h3",{id:"deploy-eventsource-sqsyaml-to-link-with-external-sqs"},"Deploy ",(0,o.kt)("inlineCode",{parentName:"h3"},"eventsource-sqs.yaml")," to link with external SQS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f argo-events/eventsource-sqs.yaml\n")),(0,o.kt)("p",null,"In this case, we configure a EventSource to license to the queue ",(0,o.kt)("inlineCode",{parentName:"p"},"test1")," in region ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east-1"),".\nLet's create that queue in your account if you don't have one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create a queue\naws sqs create-queue --queue-name test1 --region us-east-1\n\n# get your queue arn\naws sqs get-queue-attributes --queue-url <your queue url> --attribute-names QueueArn\n\n#Replace the following values in argo-events/sqs-accesspolicy.json\n#<your queue arn>  \n#<your event irsa arn> (you can get from terraform output)\naws sqs set-queue-attributes --queue-url <your queue url> --attributes file://argo-events/sqs-accesspolicy.json --region us-east-1\n")),(0,o.kt)("h3",{id:"deploy-sensor-rbacyaml-and-sensor-sqs-spark-crossnsyaml-for-triggering-workflow"},"Deploy ",(0,o.kt)("inlineCode",{parentName:"h3"},"sensor-rbac.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"sensor-sqs-spark-crossns.yaml")," for triggering workflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f argo-events/sensor-rbac.yaml\nkubectl apply -f argo-events/sensor-sqs-sparkjobs.yaml\n")),(0,o.kt)("h3",{id:"verify-argo-events-namespace"},"Verify argo-events namespace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get all,eventbus,EventSource,sensor,sa,role,rolebinding -n argo-events  \n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"all-in-argoevents",src:a(9595).Z,width:"780",height:"787"})),(0,o.kt)("h3",{id:"test-from-sqs"},"Test from SQS"),(0,o.kt)("p",null,"Send a message from SQS: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"message": "hello"}')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sqs",src:a(3543).Z,width:"1760",height:"734"})),(0,o.kt)("p",null,"Argo Events would capture the message and trigger Argo Workflows to create a workflow for spark jobs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get wf -A\n\nNAMESPACE        NAME                           STATUS    AGE   MESSAGE\nargo-workflows   aws-sqs-spark-workflow-p57qx   Running   9s  \n")),(0,o.kt)("h2",{id:"destroy"},"Destroy"),(0,o.kt)("p",null,"To teardown and remove the resources created in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl delete -f argo-events/.\n\nterraform destroy -target="module.eks_blueprints_kubernetes_addons" -target="module.irsa_argo_events" -auto-approve -var region=$region\nterraform destroy -target="module.eks_blueprints" -auto-approve -var region=$region\nterraform destroy -auto-approve -var region=$region\n')))}c.isMDXComponent=!0},8900:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/argo-wf-spark-operator-ff79e6e70984bda22112c899e501e0c5.png"},9132:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/argo-wf-spark-5b904b96ed2057519c456d8717f024a6.png"},100:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/argo-workflow-login-684a2020b281eb65eaf4eb5a87dddc1a.png"},3543:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sqs-e75b402e2a0f4ec520a2e7a5263af894.png"},9066:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},9595:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/things-argo-events-c72f32131768d81c7122cd4943a3a5ef.png"}}]);