"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60491],{92397:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(13274),t=s(1780);const r={id:"env_setup",title:"Dev Environment Setup"},o=void 0,l={id:"developer_guide/env_setup",title:"Dev Environment Setup",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/developer_guide/env_setup.md",sourceDirName:"developer_guide",slug:"/developer_guide/env_setup",permalink:"/docs/1.3.0/developer_guide/env_setup",draft:!1,unlisted:!1,tags:[],version:"1.3.0",frontMatter:{id:"env_setup",title:"Dev Environment Setup"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/1.3.0/user_guide/troubleshooting"},next:{title:"Build and Run",permalink:"/docs/1.3.0/developer_guide/build"}},c={},d=[{value:"Local Kubernetes cluster using Docker Desktop",id:"local-kubernetes-cluster-using-docker-desktop",level:2},{value:"Installation",id:"installation",level:3},{value:"Deploy and access dashboard",id:"deploy-and-access-dashboard",level:3},{value:"Access local Kubernetes cluster",id:"access-local-kubernetes-cluster",level:3},{value:"Local Kubernetes cluster with Minikube",id:"local-kubernetes-cluster-with-minikube",level:2},{value:"Installing Minikube",id:"installing-minikube",level:3},{value:"Deploy and access the cluster",id:"deploy-and-access-the-cluster",level:3},{value:"Build impact",id:"build-impact",level:3},{value:"Local Kubernetes Cluster with Kind",id:"local-kubernetes-cluster-with-kind",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Using Kind",id:"using-kind",level:3},{value:"Loading your images",id:"loading-your-images",level:3},{value:"Debug code locally",id:"debug-code-locally",level:2},{value:"Access remote Kubernetes cluster",id:"access-remote-kubernetes-cluster",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["There are several ways to setup a local development environment for Kubernetes, the three most common ones are ",(0,i.jsx)(n.code,{children:"Minikube"})," (",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/minikube/",children:"docs"}),"), ",(0,i.jsx)(n.code,{children:"docker-desktop"})," and ",(0,i.jsx)(n.code,{children:"kind"})," (",(0,i.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"kind"}),")\n",(0,i.jsx)(n.code,{children:"Minikube"})," provisions a local Kubernetes cluster on several Virtual Machines (via VirtualBox or something similar). ",(0,i.jsx)(n.code,{children:"docker-desktop"})," on the other hand, sets up Kubernetes cluster in docker containers.  ",(0,i.jsx)(n.code,{children:"kind"})," provides lightweight Kubernetes clusters for Windows, Linux and Mac."]}),"\n",(0,i.jsx)(n.h2,{id:"local-kubernetes-cluster-using-docker-desktop",children:"Local Kubernetes cluster using Docker Desktop"}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we will base all the installs on Docker Desktop.\nEven in this case we can use a lightweight ",(0,i.jsx)(n.a,{href:"#local-kubernetes-cluster-with-minikube",children:"minikube"})," setup which gives the same functionality with less impact."]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Download and install ",(0,i.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker-Desktop"})," on your laptop. Latest version has an embedded version of Kubernetes so no additional install is needed.\nJust simply follow the instruction ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/docker-for-mac/#kubernetes",children:"here"})," to get Kubernetes up and running within docker-desktop."]}),"\n",(0,i.jsx)(n.p,{children:"Once Kubernetes is started in docker desktop, you should see something similar below:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kubernetes in Docker Desktop",src:s(57692).A+"",width:"424",height:"391"})}),"\n",(0,i.jsx)(n.p,{children:"This means that:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Kubernetes is running."}),"\n",(0,i.jsxs)(n.li,{children:["the command line tool ",(0,i.jsx)(n.code,{children:"kubctl"})," is installed in the ",(0,i.jsx)(n.code,{children:"/usr/local/bin"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["the Kubernetes context is set to ",(0,i.jsx)(n.code,{children:"docker-desktop"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-and-access-dashboard",children:"Deploy and access dashboard"}),"\n",(0,i.jsx)(n.p,{children:"After setting up the local Kubernetes you need to deploy the dashboard using the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["follow the instructions in ",(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/dashboard",children:"Kubernetes dashboard doc"})," to deploy the dashboard."]}),"\n",(0,i.jsxs)(n.li,{children:["start the Kubernetes proxy in the background from a terminal to get access on the dashboard on the local host:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"kubectl proxy &\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["access the dashboard at the following URL: ",(0,i.jsx)(n.a,{href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login",children:"clickable link"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"access-local-kubernetes-cluster",children:"Access local Kubernetes cluster"}),"\n",(0,i.jsx)(n.p,{children:"The dashboard as deployed in the previous step requires a token or config to sign in. Here we use the token to sign in. The token is generated automatically and can be retrieved from the system."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["retrieve the name of the dashboard token:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"kubectl -n kube-system get secret | grep kubernetes-dashboard-token\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["retrieve the content of the token, note that the token name ends with a random 5 character code and needs to be replaced with the result of step 1. As an example:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"kubectl -n kube-system describe secret kubernetes-dashboard-token-tf6n8\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["copy the token value which is part of the ",(0,i.jsx)(n.code,{children:"Data"})," section with the tag ",(0,i.jsx)(n.code,{children:"token"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["select the ",(0,i.jsx)(n.strong,{children:"Token"})," option in the dashboard web UI:",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.img,{alt:"Token Access in dashboard",src:s(56054).A+"",width:"481",height:"267"})]}),"\n",(0,i.jsxs)(n.li,{children:["paste the token value into the input box and sign in:",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.img,{alt:"Token Access in dashboard",src:s(28872).A+"",width:"432",height:"209"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"local-kubernetes-cluster-with-minikube",children:"Local Kubernetes cluster with Minikube"}),"\n",(0,i.jsxs)(n.p,{children:["Minikube can be added to an existing Docker Desktop install. Minikube can either use the pre-installed hypervisor or use a hypervisor of choice. These instructions use ",(0,i.jsx)(n.a,{href:"https://github.com/moby/hyperkit",children:"HyperKit"})," which is embedded in Docker Desktop."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use a different hypervisor then HyperKit make sure that you follow the generic minikube install instructions. Do not forget to install the correct driver for the chosen hypervisor if required.\nThe basic instructions are provided in the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/",children:"minikube install"})," instructions."]}),"\n",(0,i.jsxs)(n.p,{children:["Check hypervisor Docker Desktop should have already installed HyperKit. In a terminal run: ",(0,i.jsx)(n.code,{children:"hyperkit"})," to confirm. Any response other than ",(0,i.jsx)(n.code,{children:"hyperkit: command not found"})," confirms that HyperKit is installed and on the path. If it is not found you can choose a different hypervisor or fix the Docker Desktop install."]}),"\n",(0,i.jsx)(n.h3,{id:"installing-minikube",children:"Installing Minikube"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["install minikube, you can either use brew or directly via these steps:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64\nchmod +x minikube\nsudo mv minikube /usr/local/bin\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["install HyperKit driver (required), you can either use brew or directly via these steps:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"curl -LO https://storage.googleapis.com/minikube/releases/latest/docker-machine-driver-hyperkit\nsudo install -o root -g wheel -m 4755 docker-machine-driver-hyperkit /usr/local/bin/\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["update the minikube config to default to the HyperKit install ",(0,i.jsx)(n.code,{children:"minikube config set vm-driver hyperkit"})]}),"\n",(0,i.jsxs)(n.li,{children:["change docker desktop to use minikube for Kubernetes:",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.img,{alt:"Kubernetes in Docker Desktop: minikube setting",src:s(19904).A+"",width:"425",height:"391"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-and-access-the-cluster",children:"Deploy and access the cluster"}),"\n",(0,i.jsx)(n.p,{children:"After the installation is done you can start a new cluster."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["start the minikube cluster: ",(0,i.jsx)(n.code,{children:"minikube start --kubernetes-version v1.24.7"})]}),"\n",(0,i.jsxs)(n.li,{children:["start the minikube dashboard: ",(0,i.jsx)(n.code,{children:"minikube dashboard &"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-impact",children:"Build impact"}),"\n",(0,i.jsx)(n.p,{children:"When you create images make sure that the build is run after pointing it to the right environment.\nWithout setting the enviromnent minikube might not find the docker images when deploying the scheduler."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"make sure minikube is started"}),"\n",(0,i.jsxs)(n.li,{children:["in the terminal where you wll run the build execute: ",(0,i.jsx)(n.code,{children:"eval $(minikube docker-env)"})]}),"\n",(0,i.jsxs)(n.li,{children:["run the image build from the yunikorn-k8shim repository root: ",(0,i.jsx)(n.code,{children:"make image"})]}),"\n",(0,i.jsx)(n.li,{children:"deploy the scheduler as per the normal instructions."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"local-kubernetes-cluster-with-kind",children:"Local Kubernetes Cluster with Kind"}),"\n",(0,i.jsx)(n.p,{children:"Kind (Kubernetes in Docker) is a lightweight tool for running lightweight Kubernetes environments.  It is very easy to test different Kubernetes versions with kind.  You can just select the kind image you want."}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["If you have go installed, you can run ",(0,i.jsx)(n.code,{children:"go install sigs.k8s.io/kind@latest"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Other ways can be found on the Kind ",(0,i.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation",children:"website"})]}),"\n",(0,i.jsx)(n.p,{children:"To use Kind with Kubernetes 1.25, you will need to use v0.15 or greater of Kind.  The release of kind does allow for particular versions of Kubernetes and you can get that information from the Kind release notes."}),"\n",(0,i.jsx)(n.h3,{id:"using-kind",children:"Using Kind"}),"\n",(0,i.jsx)(n.p,{children:"To test a new version of Kubernetes, you can pull a corresponding image from kind's repo."}),"\n",(0,i.jsxs)(n.p,{children:["Creating a v1.24.7 Kubernetes Cluster: ",(0,i.jsx)(n.code,{children:"kind create cluster --name test --image kindest/node:v1.24.7"})]}),"\n",(0,i.jsxs)(n.p,{children:["Deleting a kind cluster: ",(0,i.jsx)(n.code,{children:"kind delete cluster --name test"})]}),"\n",(0,i.jsx)(n.h3,{id:"loading-your-images",children:"Loading your images"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use a local image, you have to load your images into kind's registry.  If you run ",(0,i.jsx)(n.code,{children:"make image"}),", you could use the following command to load your kind image.  This assumes AMD64 architecture."]}),"\n",(0,i.jsxs)(n.p,{children:["The scheduler, web-ui and admission-controller examples are below:\nscheduler:\n",(0,i.jsx)(n.code,{children:"kind load docker-image apache/yunikorn:scheduler-amd64-latest"})]}),"\n",(0,i.jsxs)(n.p,{children:["web:\n",(0,i.jsx)(n.code,{children:"kind load docker-image apache/yunikorn:web-amd64-latest"})]}),"\n",(0,i.jsxs)(n.p,{children:["admission-controller:\n",(0,i.jsx)(n.code,{children:"kind load docker-image apache/yunikorn:admission-amd64-latest"})]}),"\n",(0,i.jsx)(n.h2,{id:"debug-code-locally",children:"Debug code locally"}),"\n",(0,i.jsx)(n.p,{children:"Note, this instruction requires you have GoLand IDE for development."}),"\n",(0,i.jsxs)(n.p,{children:['In GoLand, go to yunikorn-k8shim project. Then click "Run" -> "Debug..." -> "Edit Configuration..." to get the pop-up configuration window.\nNote, you need to click "+" to create a new profile if the ',(0,i.jsx)(n.code,{children:"Go Build"})," option is not available at the first time."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Debug Configuration",src:s(31926).A+"",width:"1281",height:"965"})}),"\n",(0,i.jsx)(n.p,{children:"The highlighted fields are the configurations you need to add. These include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run Kind: package"}),"\n",(0,i.jsxs)(n.li,{children:["Package path: point to the path of ",(0,i.jsx)(n.code,{children:"pkg/shim"})," package"]}),"\n",(0,i.jsxs)(n.li,{children:["Working directory: point to the path of the ",(0,i.jsx)(n.code,{children:"conf"})," directory, this is where the program loads configuration file from"]}),"\n",(0,i.jsxs)(n.li,{children:["Program arguments: specify the arguments to run the program, such as ",(0,i.jsx)(n.code,{children:"-kubeConfig=/path/to/.kube/config -interval=1s -clusterId=mycluster -clusterVersion=0.1 -name=yunikorn -policyGroup=queues -logEncoding=console -logLevel=-1"}),".\nNote, you need to replace ",(0,i.jsx)(n.code,{children:"/path/to/.kube/config"})," with the local path to the kubeconfig file. And if you want to change or add more options, you can run ",(0,i.jsx)(n.code,{children:"_output/bin/k8s-yunikorn-scheduler -h"})," to find out."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Once the changes are done, click "Apply", then "Debug". You will need to set proper breakpoints in order to debug the program.'}),"\n",(0,i.jsx)(n.h2,{id:"access-remote-kubernetes-cluster",children:"Access remote Kubernetes cluster"}),"\n",(0,i.jsxs)(n.p,{children:["This setup assumes you have already installed a remote Kubernetes cluster.\nFor a generic view on how to access a multiple cluster and integrate it follow the ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",children:"accessing multiple clusters"})," documentation from Kubernetes."]}),"\n",(0,i.jsx)(n.p,{children:"Or follow these simplified steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["get the Kubernetes ",(0,i.jsx)(n.code,{children:"config"})," file from remote cluster, copy it to the local machine and give it a unique name i.e. ",(0,i.jsx)(n.code,{children:"config-remote"})]}),"\n",(0,i.jsxs)(n.li,{children:["save the ",(0,i.jsx)(n.code,{children:"KUBECONFIG"})," environment variable (if set)","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"export KUBECONFIG_SAVED=$KUBECONFIG\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["add the new file to the environment variable","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"export KUBECONFIG=$KUBECONFIG:config-remote\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["run the command ",(0,i.jsx)(n.code,{children:"kubectl config view"})," to check that both configs can be accessed"]}),"\n",(0,i.jsxs)(n.li,{children:["switch context using ",(0,i.jsx)(n.code,{children:"kubectl config use-context my-remote-cluster"})]}),"\n",(0,i.jsxs)(n.li,{children:["confirm that the current context is now switched to the remote cluster config:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"kubectl config get-contexts\nCURRENT   NAME                   CLUSTER                      AUTHINFO             NAMESPACE\n          docker-for-desktop     docker-for-desktop-cluster   docker-for-desktop\n*         my-remote-cluster      kubernetes                   kubernetes-admin\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["More docs can be found ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28872:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dashboard_secret-80e18f88ceb541c0d70bcd1c60176290.png"},56054:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dashboard_token_select-a9c66b12d37a247d623e662d642b80be.png"},19904:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/docker-dektop-minikube-741c814795983ad6133a5b5b33a2f398.png"},57692:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/docker-desktop-7afa28a7972e0e8867bcab8a6a9ac614.png"},31926:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/goland_debug-bf10925ea3e1fdd82cfd32b6f4049678.jpg"},1780:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(79474);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);