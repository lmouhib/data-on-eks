"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[6136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5,sidebar_label:"EMR on EKS with CDK"},l="EMR on EKS with CDK blueprint",i={unversionedId:"amazon-emr-on-eks/emr-eks-cdk",id:"amazon-emr-on-eks/emr-eks-cdk",title:"EMR on EKS with CDK blueprint",description:"Introduction",source:"@site/docs/amazon-emr-on-eks/emr-eks-cdk.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/emr-eks-cdk",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-cdk",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/emr-eks-cdk.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"EMR on EKS with CDK"},sidebar:"docs",previous:{title:"EMR on EKS with ACK Controller",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-ack"},next:{title:"Data Analytics on EKS",permalink:"/data-on-eks/docs/category/data-analytics-on-eks"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Customize",id:"customize",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:2},{value:"Execute Sample Spark job on EMR Virtual Cluster",id:"execute-sample-spark-job-on-emr-virtual-cluster",level:2},{value:"Cleanup",id:"cleanup",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"emr-on-eks-with-cdk-blueprint"},"EMR on EKS with CDK blueprint"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this post, we will learn how to use EMR on EKS AddOn and Teams in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cdk-eks-blueprints")," to deploy a an infrasturcture on EKS to submit Spark Job. The ",(0,r.kt)("inlineCode",{parentName:"p"},"cdk-eks-blueprints")," allows you deploy an EKS cluster and enable it to be used by EMR on EKS service with minimal setup. The architecture below shows a conceptual view of the infrastructure you will deploy through this blueprint."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EMR on EKS CDK",src:n(5854).Z,width:"1816",height:"1180"})),(0,r.kt)("h2",{id:"deploying-the-solution"},"Deploying the Solution"),(0,r.kt)("p",null,"In this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/analytics/cdk/emr-eks"},"example"),", you will provision the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates EKS Cluster Control plane with public endpoint (for demo purpose only)"),(0,r.kt)("li",{parentName:"ul"},"Two managed node groups",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Core Node group with 3 AZs for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, Logging etc."),(0,r.kt)("li",{parentName:"ul"},"Spark Node group with single AZ for running Spark jobs"))),(0,r.kt)("li",{parentName:"ul"},"Enable EMR on EKS and create one Data teams (",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-a"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates new namespace for each team"),(0,r.kt)("li",{parentName:"ul"},"Creates Kubernetes role and role binding(",(0,r.kt)("inlineCode",{parentName:"li"},"emr-containers")," user) for the above namespace"),(0,r.kt)("li",{parentName:"ul"},"New IAM role for the team execution role"),(0,r.kt)("li",{parentName:"ul"},"Update AWS_AUTH config map with  emr-containers user and AWSServiceRoleForAmazonEMRContainers role"),(0,r.kt)("li",{parentName:"ul"},"Create a trust relationship between the job execution role and the identity of the EMR managed service account"))),(0,r.kt)("li",{parentName:"ul"},"EMR Virtual Cluster for ",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,r.kt)("li",{parentName:"ul"},"IAM policy for ",(0,r.kt)("inlineCode",{parentName:"li"},"emr-data-team-a")),(0,r.kt)("li",{parentName:"ul"},"Deploys the following Kubernetes Add-ons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Managed Add-ons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"VPC CNI, CoreDNS, KubeProxy, AWS EBS CSi Driver"))),(0,r.kt)("li",{parentName:"ul"},"Self Managed Add-ons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Metrics server with HA, Cluster Autoscaler, CertManager and AwsLoadBalancerController")))))),(0,r.kt)("p",null,"This blueprint can also take an EKS cluster that you defined using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cdk-blueprints-library"),"."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install"},"CDK"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You need to have an AWS account and region that are ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_bootstrap"},"bootstraped")," by AWS CDK."),(0,r.kt)("h3",{id:"customize"},"Customize"),(0,r.kt)("p",null,"The the entry point for this cdk blueprint is ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/emr-eks.ts")," which instantiate a stack defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/emr-eks-blueprint-stack.ts"),". This stack must be provided with a VPC and a list of EMR on EKS team defition and the role that will be admin of the EKS cluster. It can also take as options an EKS cluster defined through ",(0,r.kt)("inlineCode",{parentName:"p"},"cdk-blueprints-library")," and the EKS cluster name."),(0,r.kt)("p",null,"The properties that are passed to the emr on eks blueprint stack are defined as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EmrEksBlueprintProps extends StackProps {\n  clusterVpc: IVpc,\n  clusterAdminRoleArn: ArnPrincipal\n  dataTeams: EmrEksTeamProps[],\n  eksClusterName?: string, //Default eksBlueprintCluster\n  eksCluster?: GenericClusterProvider,\n\n}\n")),(0,r.kt)("p",null,"In this example we define a VPC in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/vpc.ts")," and is instantiated in ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/emr-eks.ts"),". We also define a team called ",(0,r.kt)("inlineCode",{parentName:"p"},"emr-data-team-a")," and which has an execution role called ",(0,r.kt)("inlineCode",{parentName:"p"},"myBlueprintExecRole"),".\nThe blueprint will deploy by default an EKS cluster with the managed nodegroups defined in the section ",(0,r.kt)("a",{parentName:"p",href:"#deploying-the-solution"},"Deploying the Solution"),"."),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Before you run the solution, you ",(0,r.kt)("strong",{parentName:"p"},"MUST")," change the ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterAdminRoleArn")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," object in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/emr-eks.ts"),". This role allows you to interact manage EKS cluster and should have be allowed at least the IAM action ",(0,r.kt)("inlineCode",{parentName:"p"},"eks:AccessKubernetesApi"),"."),(0,r.kt)("p",null,"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,r.kt)("p",null,"Navigate into one of the example directories and run ",(0,r.kt)("inlineCode",{parentName:"p"},"cdk synth")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd analytics/cdk/emr-eks\nnpm install\ncdk synth --profile YOUR-AWS-PROFILE\n")),(0,r.kt)("p",null,"Deploy the pattern"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdk deploy --all\n")),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," to deploy."),(0,r.kt)("h2",{id:"verify-the-resources"},"Verify the resources"),(0,r.kt)("p",null,"Let\u2019s verify the resources created by ",(0,r.kt)("inlineCode",{parentName:"p"},"cdk deploy"),"."),(0,r.kt)("p",null,"Verify the Amazon EKS Cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks describe-cluster --name eksBlueprintCluster # Update the name cluster name if you supplied your own\n\n")),(0,r.kt)("p",null,"Verify EMR on EKS Namespaces ",(0,r.kt)("inlineCode",{parentName:"p"},"batchjob")," and Pod status for ",(0,r.kt)("inlineCode",{parentName:"p"},"Metrics Server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Autoscaler"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region <ENTER_YOUR_REGION> update-kubeconfig --name eksBlueprintCluster # Creates k8s config file to authenticate with EKS Cluster. Update the name cluster name if you supplied your own\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\nkubectl get ns | grep batchjob # Output shows batchjob\n\nkubectl get pods --namespace=kube-system | grep  metrics-server # Output shows Metric Server pod\n\nkubectl get pods --namespace=kube-system | grep  cluster-autoscaler # Output shows Cluster Autoscaler pod\n")),(0,r.kt)("h2",{id:"execute-sample-spark-job-on-emr-virtual-cluster"},"Execute Sample Spark job on EMR Virtual Cluster"),(0,r.kt)("p",null,"Execute the Spark job using the below shell script."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once you deploy the blueprint you will have as output the Virtual Cluster id. You can use the id and the execution role for which you supplied a policy to submit jobs. Below you can find an example of a job you can submit with AWS CLI.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\nexport EMR_ROLE_ARN=arn:aws:iam::<YOUR-ACCOUNT-ID>:role/myBlueprintExecRole\n\naws emr-containers start-job-run \\\n  --virtual-cluster-id=<VIRTUAL-CLUSTER-ID-IN-CDK-OUTPUT> \\\n  --name=pi-2 \\\n  --execution-role-arn=$EMR_ROLE_ARN \\\n  --release-label=emr-6.8.0-latest \\\n  --job-driver=\'{\n    "sparkSubmitJobDriver": {\n      "entryPoint": "local:///usr/lib/spark/examples/src/main/python/pi.py",\n      "sparkSubmitParameters": "--conf spark.executor.instances=1 --conf spark.executor.memory=2G --conf spark.executor.cores=1 --conf spark.driver.cores=1 --conf spark.kubernetes.node.selector.app=spark"\n    }\n  }\'\n\n')),(0,r.kt)("p",null,"Verify the job execution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=batchjob -w\n")),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"To clean up your environment, you call the command below. This will destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdk destroy --all\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}d.isMDXComponent=!0},5854:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/emr-eks-cdk-5946f8799f11fb327975c945ade014eb.png"}}]);