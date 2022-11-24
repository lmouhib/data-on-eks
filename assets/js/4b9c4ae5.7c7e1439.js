"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[8759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:5,sidebar_label:"ACK Controller for EMR on EKS"},l="ACK Controller for EMR on EKS",s={unversionedId:"amazon-emr-on-eks/emr-eks-ack",id:"amazon-emr-on-eks/emr-eks-ack",title:"ACK Controller for EMR on EKS",description:"TODO: This deployment patterns will be updated with EMR on EKS ACK Controllers.",source:"@site/docs/amazon-emr-on-eks/emr-eks-ack.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/emr-eks-ack",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-ack",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/emr-eks-ack.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"ACK Controller for EMR on EKS"},sidebar:"docs",previous:{title:"EMR on EKS with FSx for Lustre",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-fsx-for-lustre"},next:{title:"Apache Spark on EKS",permalink:"/data-on-eks/docs/category/apache-spark-on-eks"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:2},{value:"Setup Amazon Managed Grafana with SSO",id:"setup-amazon-managed-grafana-with-sso",level:3},{value:"Execute Sample Spark job on EMR Virtual Cluster",id:"execute-sample-spark-job-on-emr-virtual-cluster",level:2},{value:"Cleanup",id:"cleanup",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ack-controller-for-emr-on-eks"},"ACK Controller for EMR on EKS"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"TODO: This deployment patterns will be updated with EMR on EKS ACK Controllers.\nFor more information, please see this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/issues/51"},"issue"))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this post, we will learn to build end-to-end observability for EMR on EKS Spark workloads by leveraging Amazon Managed Service for Prometheus to collect and store the metrics generated by Spark Applications.\nWe will then use Amazon Managed Grafana to build dashboards for monitoring use cases."),(0,n.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,n.kt)("p",null,"In this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/terraform/emr-eks-ack"},"example"),", you will provision the following resources required to run Spark Jobs using EMR on EKS, as well as monitor spark job metrics using ",(0,n.kt)("strong",{parentName:"p"},"Amazon Managed Prometheus")," and ",(0,n.kt)("strong",{parentName:"p"},"Amazon Managed Grafana"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only)"),(0,n.kt)("li",{parentName:"ul"},"Two managed node groups",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Core Node group with 3 AZs for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, Observability, Logging etc."),(0,n.kt)("li",{parentName:"ul"},"Spark Node group with single AZ for running Spark jobs"))),(0,n.kt)("li",{parentName:"ul"},"Enable EMR on EKS and creates two Data teams (",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-b"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Creates new namespace for each team"),(0,n.kt)("li",{parentName:"ul"},"Creates Kubernetes role and role binding(",(0,n.kt)("inlineCode",{parentName:"li"},"emr-containers")," user) for the above namespace"),(0,n.kt)("li",{parentName:"ul"},"New IAM role for the team execution role"),(0,n.kt)("li",{parentName:"ul"},"Update AWS_AUTH config map with  emr-containers user and AWSServiceRoleForAmazonEMRContainers role"),(0,n.kt)("li",{parentName:"ul"},"Create a trust relationship between the job execution role and the identity of the EMR managed service account"))),(0,n.kt)("li",{parentName:"ul"},"EMR Virtual Cluster for ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,n.kt)("li",{parentName:"ul"},"IAM policy for ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,n.kt)("li",{parentName:"ul"},"Amazon Managed Prometheus workspace to remote write metrics from Prometheus server"),(0,n.kt)("li",{parentName:"ul"},"Deploys the following Kubernetes Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Managed Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VPC CNI, CoreDNS, KubeProxy, AWS EBS CSi Driver"))),(0,n.kt)("li",{parentName:"ul"},"Self Managed Add-ons",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Metrics server with HA, CoreDNS Cluster proportional Autoscaler, Cluster Autoscaler, Prometheus Server and Node Exporter, VPA for Prometheus, AWS for FluentBit, CloudWatchMetrics for EKS")))))),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,n.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: Currently Amazon Managed Prometheus supported only in selected regions. Please see this ",(0,n.kt)("a",{parentName:"em",href:"https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html"},"userguide")," for supported regions.")),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate into one of the example directories and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/terraform/emr-eks-ack\nterraform init\n")),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and Run Terraform plan to verify the resources created by this execution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION="us-west-2" # Change region according to your needs\nterraform plan\n')),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," to apply."),(0,n.kt)("h2",{id:"verify-the-resources"},"Verify the resources"),(0,n.kt)("p",null,"Let\u2019s verify the resources created by ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."),(0,n.kt)("p",null,"Verify the Amazon EKS Cluster and Amazon Managed service for Prometheus."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name emr-eks-ack\n\naws amp list-workspaces --alias amp-ws-emr-eks-ack\n")),(0,n.kt)("p",null,"Verify EMR on EKS Namespaces ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-data-team-a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-data-team-b")," and Pod status for ",(0,n.kt)("inlineCode",{parentName:"p"},"Prometheus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Vertical Pod Autoscaler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Metrics Server")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Autoscaler"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region us-west-2 update-kubeconfig --name emr-eks-ack # Creates k8s config file to authenticate with EKS Cluster\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\nkubectl get ns | grep emr-data-team # Output shows emr-data-team-a and emr-data-team-b namespaces for data teams\n\nkubectl get pods --namespace=prometheus # Output shows Prometheus server and Node exporter pods\n\nkubectl get pods --namespace=vpa  # Output shows Vertical Pod Autoscaler pods\n\nkubectl get pods --namespace=kube-system | grep  metrics-server # Output shows Metric Server pod\n\nkubectl get pods --namespace=kube-system | grep  cluster-autoscaler # Output shows Cluster Autoscaler pod\n")),(0,n.kt)("h3",{id:"setup-amazon-managed-grafana-with-sso"},"Setup Amazon Managed Grafana with SSO"),(0,n.kt)("p",null,"Currently, this step is manual. Please follow the steps in this ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/mt/monitoring-amazon-emr-on-eks-with-amazon-managed-prometheus-and-amazon-managed-grafana/"},"blog")," to create Amazon Managed Grafana with SSO enabled in your account.\nYou can visualize the Spark jobs runs and metrics using Amazon Managed Prometheus and Amazon Managed Grafana."),(0,n.kt)("h2",{id:"execute-sample-spark-job-on-emr-virtual-cluster"},"Execute Sample Spark job on EMR Virtual Cluster"),(0,n.kt)("p",null,"Execute the Spark job using the below shell script."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This script requires three input parameters in which ",(0,n.kt)("inlineCode",{parentName:"li"},"EMR_VIRTUAL_CLUSTER_ID")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"EMR_JOB_EXECUTION_ROLE_ARN")," values can be extracted from ",(0,n.kt)("inlineCode",{parentName:"li"},"terraform apply")," output values."),(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("inlineCode",{parentName:"li"},"S3_BUCKET"),", Either create a new S3 bucket or use an existing S3 bucket to store the scripts, input and output data required to run this sample job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"EMR_VIRTUAL_CLUSTER_ID=$1     # Terraform output variable is emrcontainers_virtual_cluster_id\nS3_BUCKET=$2                  # This script requires s3 bucket as input parameter e.g., s3://<bucket-name>\nEMR_JOB_EXECUTION_ROLE_ARN=$3 # Terraform output variable is emr_on_eks_role_arn\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This shell script downloads the test data to your local machine and uploads to S3 bucket. Verify the shell script before running the job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cd data-on-eks/analytics/terraform/emr-eks-ack/examples/spark/\n\n./emr-eks-spark-amp-amg.sh "<ENTER_EMR_VIRTUAL_CLUSTER_ID>" "s3://<ENTER-YOUR-BUCKET-NAME>" "<EMR_JOB_EXECUTION_ROLE_ARN>"\n')),(0,n.kt)("p",null,"Verify the job execution"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=emr-data-team-a -w\n")),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("p",null,"To clean up your environment, destroy the Terraform modules in reverse order with ",(0,n.kt)("inlineCode",{parentName:"p"},"--target")," option to avoid destroy failures."),(0,n.kt)("p",null,"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'terraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks_blueprints" -auto-approve\nterraform destroy -target="module.vpc" -auto-approve\n')),(0,n.kt)("p",null,"Finally, destroy any additional resources that are not in the above modules"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform destroy -auto-approve\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}m.isMDXComponent=!0}}]);