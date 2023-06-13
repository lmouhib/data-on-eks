"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,d=u["".concat(l,".").concat(k)]||u[k]||c[k]||o;return a?n.createElement(d,s(s({ref:t},m),{},{components:a})):n.createElement(d,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9520:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"EMR on EKS with Spark Streaming",sidebar_position:2},s="EMR on EKS with Spark Streaming",i={unversionedId:"blueprints/streaming-platforms/emr-eks-stream",id:"blueprints/streaming-platforms/emr-eks-stream",title:"EMR on EKS with Spark Streaming",description:"This is a project developed in Python CDK.",source:"@site/docs/blueprints/streaming-platforms/emr-eks-stream.md",sourceDirName:"blueprints/streaming-platforms",slug:"/blueprints/streaming-platforms/emr-eks-stream",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-eks-stream",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/streaming-platforms/emr-eks-stream.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"EMR on EKS with Spark Streaming",sidebar_position:2},sidebar:"blueprints",previous:{title:"Introduction",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/"},next:{title:"Amazon EMR NVIDIA Spark RAPIDS on EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-nvidia-spark-rapids"}},l={},p=[{value:"Spark examples - read stream from MSK",id:"spark-examples---read-stream-from-msk",level:2},{value:"Spark examples - read stream from Kinesis",id:"spark-examples---read-stream-from-kinesis",level:2},{value:"Deploy Infrastructure",id:"deploy-infrastructure",level:2},{value:"CloudFormation Deployment",id:"cloudformation-deployment",level:3},{value:"Customization",id:"customization",level:3},{value:"CDK Deployment",id:"cdk-deployment",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Deploy",id:"deploy",level:4},{value:"Post-deployment",id:"post-deployment",level:2},{value:"MSK integration",id:"msk-integration",level:2},{value:"1. Submit a job with EMR on EKS",id:"1-submit-a-job-with-emr-on-eks",level:3},{value:"Verify the job is running:",id:"verify-the-job-is-running",level:3},{value:"Cancel the long-running job (can get job id from the job submission output or in EMR console)",id:"cancel-the-long-running-job-can-get-job-id-from-the-job-submission-output-or-in-emr-console",level:3},{value:"2. EMR on EKS with Fargate",id:"2-emr-on-eks-with-fargate",level:3},{value:"Verify the job is running on EKS Fargate",id:"verify-the-job-is-running-on-eks-fargate",level:3},{value:"3. (Optional) Submit step to EMR on EC2",id:"3-optional-submit-step-to-emr-on-ec2",level:3},{value:"Verify",id:"verify",level:3},{value:"Kinesis integration",id:"kinesis-integration",level:2},{value:"1. (Optional) Build custom docker image",id:"1-optional-build-custom-docker-image",level:3},{value:"2. Use kinesis-sql connector",id:"2-use-kinesis-sql-connector",level:3},{value:"3. Use Spark&#39;s DStream",id:"3-use-sparks-dstream",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Clean up",id:"clean-up",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"emr-on-eks-with-spark-streaming"},"EMR on EKS with Spark Streaming"),(0,r.kt)("p",null,"This is a project developed in Python ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/latest/guide/home.html"},"CDK"),".\nIt includes sample data, Kafka producer simulator, and a consumer example that can be run with EMR on EC2 or EMR on EKS. Additionally, we have added few Kinesis examples for difference use cases."),(0,r.kt)("p",null,"The infrastructure deployment includes the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new S3 bucket to store sample data and stream job code"),(0,r.kt)("li",{parentName:"ul"},"An EKS cluster v1.24 in a new VPC across 2 AZs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Cluster has 2 default managed node groups: the OnDemand nodegroup scales from 1 to 5, SPOT instance nodegroup can scale from 1 to 30."),(0,r.kt)("li",{parentName:"ul"},"It also has a Fargate profile labelled with the value ",(0,r.kt)("inlineCode",{parentName:"li"},"serverless")))),(0,r.kt)("li",{parentName:"ul"},"An EMR virtual cluster in the same VPC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The virtual cluster links to ",(0,r.kt)("inlineCode",{parentName:"li"},"emr")," namespace"),(0,r.kt)("li",{parentName:"ul"},"The namespace accommodates two types of Spark jobs, ie. run on managed node group or serverless job on Fargate"),(0,r.kt)("li",{parentName:"ul"},"All EMR on EKS configuration are done, including fine-grained access controls for pods by the AWS native solution IAM roles for service accounts"))),(0,r.kt)("li",{parentName:"ul"},"A MSK Cluster in the same VPC with 2 brokers in total. Kafka version is 2.8.1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A Cloud9 IDE as the command line environment in the demo."),(0,r.kt)("li",{parentName:"ul"},"Kafka Client tool will be installed on the Cloud9 IDE"))),(0,r.kt)("li",{parentName:"ul"},"An EMR on EC2 cluster with managed scaling enabled.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1 primary and 1 core nodes with r5.xlarge."),(0,r.kt)("li",{parentName:"ul"},"configured to run one Spark job at a time."),(0,r.kt)("li",{parentName:"ul"},"can scale from 1 to 10 core + task nodes"),(0,r.kt)("li",{parentName:"ul"},"mounted EFS for checkpointing test/demo (a bootstrap action)")))),(0,r.kt)("h2",{id:"spark-examples---read-stream-from-msk"},"Spark examples - read stream from MSK"),(0,r.kt)("p",null,"Spark consumer applications reading from Amazon MSK:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-submit-a-job-with-emr-on-eks"},"1. Run a job with EMR on EKS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-emr-on-eks-with-fargate"},"2. Same job with Fargate on EMR on EKS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-optional-submit-step-to-emr-on-ec2"},"3. Same job with EMR on EC2"))),(0,r.kt)("h2",{id:"spark-examples---read-stream-from-kinesis"},"Spark examples - read stream from Kinesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-optional-build-custom-docker-image"},"1. (Optional) Build a custom docker image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-use-kinesis-sql-connector"},"2. Run a job with kinesis-sql connector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-use-sparks-dstream"},"3. Run a job with Spark's DStream"))),(0,r.kt)("h2",{id:"deploy-infrastructure"},"Deploy Infrastructure"),(0,r.kt)("p",null,"The provisioning takes about 30 minutes to complete.\nTwo ways to deploy:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AWS CloudFormation template (CFN)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/latest/guide/home.html"},"AWS Cloud Development Kit (AWS CDK)"),".")),(0,r.kt)("h3",{id:"cloudformation-deployment"},"CloudFormation Deployment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Region"),(0,r.kt)("th",{parentName:"tr",align:null},"Launch Template"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"---------------------------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------------------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"US East (N. Virginia)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?stackName=emr-stream-demo&templateURL=https://blogpost-sparkoneks-us-east-1.s3.amazonaws.com/emr-stream-demo/v2.0.0/emr-stream-demo.template"},(0,r.kt)("img",{alt:"Deploy to AWS",src:a(3325).Z,width:"150",height:"30"})))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To launch in a different AWS Region, check out the following customization section, or use the CDK deployment option.")),(0,r.kt)("h3",{id:"customization"},"Customization"),(0,r.kt)("p",null,"You can customize the solution, such as set to a different region, then generate the CFN templates in your required region:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export BUCKET_NAME_PREFIX=<my-bucket-name> # bucket where customized code will reside\nexport AWS_REGION=<your-region>\nexport SOLUTION_NAME=emr-stream-demo\nexport VERSION=v2.0.0 # version number for the customized code\n\ncd data-on-eks/analytics/cdk/stream-emr-on-eks\n./deployment/build-s3-dist.sh $BUCKET_NAME_PREFIX $SOLUTION_NAME $VERSION\n\n# create the bucket where customized code will reside\naws s3 mb s3://$BUCKET_NAME_PREFIX-$AWS_REGION --region $AWS_REGION\n\n# Upload deployment assets to the S3 bucket\naws s3 cp ./deployment/global-s3-assets/ s3://$BUCKET_NAME_PREFIX-$AWS_REGION/$SOLUTION_NAME/$VERSION/ --recursive --acl bucket-owner-full-control\naws s3 cp ./deployment/regional-s3-assets/ s3://$BUCKET_NAME_PREFIX-$AWS_REGION/$SOLUTION_NAME/$VERSION/ --recursive --acl bucket-owner-full-control\n\necho -e "\\nIn web browser, paste the URL to launch the template: https://console.aws.amazon.com/cloudformation/home?region=$AWS_REGION#/stacks/quickcreate?stackName=emr-stream-demo&templateURL=https://$BUCKET_NAME_PREFIX-$AWS_REGION.s3.amazonaws.com/$SOLUTION_NAME/$VERSION/emr-stream-demo.template\\n"\n')),(0,r.kt)("h3",{id:"cdk-deployment"},"CDK Deployment"),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install the folowing tools:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.6 +"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js 10.3.0 +")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html#install-macosos-bundled"},"AWS CLI"),". Configure the CLI by ",(0,r.kt)("inlineCode",{parentName:"li"},"aws configure"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cdkworkshop.com/15-prerequisites/500-toolkit.html"},"CDK toolkit")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cdkworkshop.com/20-typescript/20-create-project/500-deploy.html"},"One-off CDK bootstrap")," for the first time deployment.")),(0,r.kt)("h4",{id:"deploy"},"Deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv .env\nsource .env/bin/activate\npip install -r requirements.txt\n\ncdk deploy\n")),(0,r.kt)("h2",{id:"post-deployment"},"Post-deployment"),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"post-deployment.sh")," is executable in Linux, not for Mac OSX. Modify the script if needed."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open the "Kafka Client" IDE in Cloud9 console. Create one if the Cloud9 IDE doesn\'t exist.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VPC prefix: 'emr-stream-demo'\nInstance Type: 't3.small'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://catalog.us-east-1.prod.workshops.aws/workshops/d90c2f2d-a84b-4e80-b4f9-f5cee0614426/en-US/30-emr-serverless/31-set-up-env#setup-cloud9-ide"},"Attach the IAM role that contains ",(0,r.kt)("inlineCode",{parentName:"a"},"Cloud9Admin")," to your IDE"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Turn off AWS managed temporary credentials in Cloud9:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install --update\n/usr/local/bin/aws cloud9 update-environment  --environment-id $C9_PID --managed-credentials-action DISABLE\nrm -vf ${HOME}/.aws/credentials\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Run the script to configure the cloud9 IDE environment:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/aws-samples/stream-emr-on-eks/main/deployment/app_code/post-deployment.sh | bash\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Wait for 5 mins, then check the ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/msk/"},"MSK cluster")," status. Make sure it is ",(0,r.kt)("inlineCode",{parentName:"li"},"active")," before sending data to the cluster."),(0,r.kt)("li",{parentName:"ol"},"Launching a new termnial window in Cloud9, send the sample data to MSK:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'wget https://github.com/xuite627/workshop_flink1015-1/raw/master/dataset/nycTaxiRides.gz\nzcat nycTaxiRides.gz | split -l 10000 --filter="kafka_2.12-2.8.1/bin/kafka-console-producer.sh --broker-list ${MSK_SERVER} --topic taxirides ; sleep 0.2"  > /dev/null\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Launching the 3rd termnial window and monitor the source MSK topic:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kafka_2.12-2.8.1/bin/kafka-console-consumer.sh \\\n--bootstrap-server ${MSK_SERVER} \\\n--topic taxirides \\\n--from-beginning\n")),(0,r.kt)("h2",{id:"msk-integration"},"MSK integration"),(0,r.kt)("h3",{id:"1-submit-a-job-with-emr-on-eks"},"1. Submit a job with EMR on EKS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/msk_consumer.py"},"Sample job")," to consume data stream in MSK"),(0,r.kt)("li",{parentName:"ul"},"Submit the job:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aws emr-containers start-job-run \\\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\n--name msk_consumer \\\n--execution-role-arn $EMR_ROLE_ARN \\\n--release-label emr-5.33.0-latest \\\n--job-driver \'{\n    "sparkSubmitJobDriver":{\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/msk_consumer.py",\n        "entryPointArguments":["\'$MSK_SERVER\'","s3://\'$S3BUCKET\'/stream/checkpoint/emreks","emreks_output"],\n        "sparkSubmitParameters": "--conf spark.jars.packages=org.apache.spark:spark-sql-kafka-0-10_2.11:2.4.7 --conf spark.cleaner.referenceTracking.cleanCheckpoints=true --conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=2"}}\' \\\n--configuration-overrides \'{\n    "applicationConfiguration": [\n      {\n        "classification": "spark-defaults",\n        "properties": {\n          "spark.kubernetes.driver.podTemplateFile":"s3://\'$S3BUCKET\'/app_code/job/driver_template.yaml","spark.kubernetes.executor.podTemplateFile":"s3://\'$S3BUCKET\'/app_code/job/executor_template.yaml"\n         }\n      }\n    ],\n    "monitoringConfiguration": {\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/emreks-log/"}}\n}\'  \n')),(0,r.kt)("h3",{id:"verify-the-job-is-running"},"Verify the job is running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# can see the job pod in EKS\nkubectl get po -n emr\n\n# verify in EMR console\n# in Cloud9, run the consumer tool to check if any data comeing through in the target Kafka topic\nkafka_2.12-2.8.1/bin/kafka-console-consumer.sh --bootstrap-server ${MSK_SERVER} --topic emreks_output --from-beginning\n")),(0,r.kt)("h3",{id:"cancel-the-long-running-job-can-get-job-id-from-the-job-submission-output-or-in-emr-console"},"Cancel the long-running job (can get job id from the job submission output or in EMR console)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws emr-containers cancel-job-run --virtual-cluster-id $VIRTUAL_CLUSTER_ID  --id <YOUR_JOB_ID>\n")),(0,r.kt)("h3",{id:"2-emr-on-eks-with-fargate"},"2. EMR on EKS with Fargate"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/msk_consumer.py"},"same job")," on the same EKS cluster, but with the serverless option - Fargate compute choice."),(0,r.kt)("p",null,"To ensure it is picked up by Fargate not by the managed nodegroup on EC2, we will tag the Spark job by a ",(0,r.kt)("inlineCode",{parentName:"p"},"serverless")," label, which has setup in a Fargate profile prevously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"--conf spark.kubernetes.driver.label.type=serverless\n--conf spark.kubernetes.executor.label.type=serverless\n")),(0,r.kt)("p",null,"Submit the job to Fargate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'aws emr-containers start-job-run \\\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\n--name msk_consumer_fg \\\n--execution-role-arn $EMR_ROLE_ARN \\\n--release-label emr-5.33.0-latest \\\n--job-driver \'{\n    "sparkSubmitJobDriver":{\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/msk_consumer.py",\n        "entryPointArguments":["\'$MSK_SERVER\'","s3://\'$S3BUCKET\'/stream/checkpoint/emreksfg","emreksfg_output"],\n        "sparkSubmitParameters": "--conf spark.jars.packages=org.apache.spark:spark-sql-kafka-0-10_2.11:2.4.7 --conf spark.cleaner.referenceTracking.cleanCheckpoints=true --conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=2 --conf spark.kubernetes.driver.label.type=serverless --conf spark.kubernetes.executor.label.type=serverless"}}\' \\\n--configuration-overrides \'{\n    "monitoringConfiguration": {\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/emreksfg-log/"}}}\'  \n')),(0,r.kt)("h3",{id:"verify-the-job-is-running-on-eks-fargate"},"Verify the job is running on EKS Fargate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n emr\n\n# verify in EMR console\n# in Cloud9, run the consumer tool to check if any data comeing through in the target Kafka topic\nkafka_2.12-2.8.1/bin/kafka-console-consumer.sh \\\n--bootstrap-server ${MSK_SERVER} \\\n--topic emreksfg_output \\\n--from-beginning\n")),(0,r.kt)("h3",{id:"3-optional-submit-step-to-emr-on-ec2"},"3. (Optional) Submit step to EMR on EC2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cluster_id=$(aws emr list-clusters --cluster-states WAITING --query 'Clusters[?Name==`emr-stream-demo`].Id' --output text)\nMSK_SERVER=$(echo $MSK_SERVER | cut -d',' -f 2)\n\naws emr add-steps \\\n--cluster-id $cluster_id \\\n--steps Type=spark,Name=emrec2_stream,Args=[--deploy-mode,cluster,--conf,spark.cleaner.referenceTracking.cleanCheckpoints=true,--conf,spark.executor.instances=2,--conf,spark.executor.memory=2G,--conf,spark.driver.memory=2G,--conf,spark.executor.cores=2,--packages,org.apache.spark:spark-sql-kafka-0-10_2.12:3.0.1,s3://$S3BUCKET/app_code/job/msk_consumer.py,$MSK_SERVER,s3://$S3BUCKET/stream/checkpoint/emrec2,emrec2_output],ActionOnFailure=CONTINUE  \n")),(0,r.kt)("h3",{id:"verify"},"Verify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# verify in EMR console\n# in Cloud9, run the consumer tool to check if any data comeing through in the target Kafka topic\nkafka_2.12-2.8.1/bin/kafka-console-consumer.sh \\\n--bootstrap-server ${MSK_SERVER} \\\n--topic emrec2_output \\\n--from-beginning\n")),(0,r.kt)("h2",{id:"kinesis-integration"},"Kinesis integration"),(0,r.kt)("h3",{id:"1-optional-build-custom-docker-image"},"1. (Optional) Build custom docker image"),(0,r.kt)("p",null,"We will create & delete a kinesis test stream on the fly via boto3, so a custom EMR on EKS docker image to include the Python library is needed. The custom docker image is not compulsory, if you don't need the boto3 and kinesis-sql connector."),(0,r.kt)("p",null,"Build a image based on EMR on EKS 6.5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export AWS_REGION=$(aws configure list | grep region | awk '{print $2}')\nexport ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)\nexport ECR_URL=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com\n\naws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 895885662937.dkr.ecr.us-west-2.amazonaws.com\ndocker build -t emr6.5_custom .\n\n# create ECR repo in current account\naws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_URL\naws ecr create-repository --repository-name emr6.5_custom_boto3 --image-scanning-configuration scanOnPush=true --region $AWS_REGION\n\n# push to ECR\ndocker tag emr6.5_custom $ECR_URL/emr6.5_custom_boto3\ndocker push $ECR_URL/emr6.5_custom_boto3\n")),(0,r.kt)("h3",{id:"2-use-kinesis-sql-connector"},"2. Use kinesis-sql connector"),(0,r.kt)("p",null,"This demo uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"com.qubole.spark/spark-sql-kinesis_2.12/1.2.0-spark_3.0")," connector to interact with Kinesis."),(0,r.kt)("p",null,"To enable the job-level access control, ie. the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html"},"IRSA feature"),", we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/kinesis-sql"},"kinesis-sql git repo")," and recompiled a new jar after upgraded the AWS java SDK. The custom docker build above will pick up the upgraded connector automatically."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/qubole-kinesis.py"},"Sample job")," to consume data stream in Kinesis"),(0,r.kt)("li",{parentName:"ul"},"Submit the job:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION=$(aws configure list | grep region | awk \'{print $2}\')\nexport ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)\nexport ECR_URL=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com\n\naws emr-containers start-job-run \\\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\n--name kinesis-demo \\\n--execution-role-arn $EMR_ROLE_ARN \\\n--release-label emr-6.5.0-latest \\\n--job-driver \'{\n    "sparkSubmitJobDriver":{\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/qubole-kinesis.py",\n        "entryPointArguments":["\'${AWS_REGION}\'","s3://\'${S3BUCKET}\'/qubolecheckpoint","s3://\'${S3BUCKET}\'/qubole-kinesis-output"],\n        "sparkSubmitParameters": "--conf spark.cleaner.referenceTracking.cleanCheckpoints=true"}}\' \\\n--configuration-overrides \'{\n    "applicationConfiguration": [\n        {\n            "classification": "spark-defaults",\n            "properties": {\n                "spark.kubernetes.container.image": "\'${ECR_URL}\'/emr6.5_custom_boto3:latest"\n            }\n        }\n    ],\n    "monitoringConfiguration": {\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/kinesis-fargate-log/"}\n    }\n}\'\n')),(0,r.kt)("h3",{id:"3-use-sparks-dstream"},"3. Use Spark's DStream"),(0,r.kt)("p",null,"This demo uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-streaming-kinesis-asl_2.12")," library to read from Kinesis. Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/streaming-kinesis-integration.html"},"Spark's official document"),". The Spark syntax is slightly different from the spark-sql-kinesis approach. It operates at RDD level."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/pyspark-kinesis.py"},"Sample job")," to consume data stream from Kinesis"),(0,r.kt)("li",{parentName:"ul"},"Submit the job:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION=$(aws configure list | grep region | awk \'{print $2}\')\nexport ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)\nexport ECR_URL=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com\n\naws emr-containers start-job-run \\\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\n--name kinesis-demo \\\n--execution-role-arn $EMR_ROLE_ARN \\\n--release-label emr-6.5.0-latest \\\n--job-driver \'{\n    "sparkSubmitJobDriver":{\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/pyspark-kinesis.py",\n        "entryPointArguments":["\'${AWS_REGION}\'","s3://\'$S3BUCKET\'/asloutput/"],\n        "sparkSubmitParameters": "--jars https://repo1.maven.org/maven2/org/apache/spark/spark-streaming-kinesis-asl_2.12/3.1.2/spark-streaming-kinesis-asl_2.12-3.1.2.jar,https://repo1.maven.org/maven2/com/amazonaws/amazon-kinesis-client/1.12.0/amazon-kinesis-client-1.12.0.jar"}}\' \\\n--configuration-overrides \'{\n    "applicationConfiguration": [\n        {\n            "classification": "spark-defaults",\n            "properties": {\n                "spark.kubernetes.container.image": "\'${ECR_URL}\'/emr6.5_custom_boto3:latest"\n            }\n        }\n    ],\n    "monitoringConfiguration": {\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/kinesis-fargate-log/"}\n    }\n}\'  \n')),(0,r.kt)("h2",{id:"useful-commands"},"Useful commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get pod -n emr"),"               list running Spark jobs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl delete pod --all -n emr"),"      delete all Spark jobs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl logs <pod name> -n emr"),"       check logs against a pod in the emr namespace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get node --label-columns=eks.amazonaws.com/capacityType,topology.kubernetes.io/zone")," check EKS compute capacity types and AZ distribution.")),(0,r.kt)("h2",{id:"clean-up"},"Clean up"),(0,r.kt)("p",null,"Run the clean-up script with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/aws-samples/stream-emr-on-eks/main/deployment/app_code/delete_all.sh | bash\n")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/home?region=us-east-1"},"CloudFormation console"),", manually delete the remaining resources if needed."))}c.isMDXComponent=!0},3325:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAeCAMAAAD5PBdlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKhQTFRF+tyz+den98aA/fDf/vXq+dGb++bK9sJ2+MyP9bha++G+/OPD/OvV/OzX/vr198eD9r1o+tqu/vv1/vr19rxm9bhZ+dmt//79//79+dWj+dOe98Fz98F0/vbs+dCX/OXG9bdY//37/OvT++G9++PD+dWi/vz4//38+t63/vPk+MyL++fN//36/vz5++bK///+/vPl/vjv/fHh/e7a+MuK98Z/////9LJM3blaNgAAAnlJREFUeNrMmIly2jAQhiUsjSXXjN0KGALkaK4maeue/Hr/N+uubFM7GMi0DGjHYyQf0jf/HpYQqO3nbB2F/X5yjCMC1OXax2Mz12Dd3/iYbOkC1thHZktHWG4SG5Z/IKzZ9uVrdO3j4uRchLUt1gte2eT0WJfbF9/j8fbdxm6B0emxxkNYHzogo9iwpi/XP6rYsEbPmANXsWFNEwr2+WoLqwpZIAaGkgMTKN3vl1B8Mt4bHsNC24yGq+xbsRahOPgdWMj/DUsqFN4ngp9PmM1mqvSFyvZjXWyqwpyP5yEsml4D2msFp30KRbrKgGWJOTFWoaQJGTzw03MbdZXOiUAQUZLBckPxLen2Y33t1qvxQuzA8hkyTXNlMCkT5tCMlZAUOVJuZuyooFZKvaKR0jhLB4tkUTrDsglk6cHYAqZtbHHT78ISqFiTAnnK0UK/xFKwQpqmIf841TqRpalP9DJJ5UhVGJ34SlhmlxRcSXEIa1MguOn3qBVWRlDMQIokhGVQhSapphu3EVaWb7xkwyvsQVEJLxPT+I6cXx4Di2LLqHqoAbW8hEM6oJZU4YWUuuTBFFXlg2CUm/q/sZpMlMRn2GM0JLH+ja3CW4ekCXHZja0Q3p7SzoDi3Su+WqmCxT+s1gU+9b7U33bULek4A0mtvJ+JdCtvq0XFmeiaTDS1hMKVNuSpCH1e870ltiZ9KnyZ7qvIaStM55JQzh61ygfPre546QDUS4i7/euaASwJaH98rK3m6b+J7hXWvNVmNT8nFvqbscdOTH0/J9bnHd9E/Drb3uOGkzOmvWttT4zllpFRXdW7aheXXg/tfxC4j2cLux4Tzx8BBgBEE3DEesAT9AAAAABJRU5ErkJgggo="}}]);