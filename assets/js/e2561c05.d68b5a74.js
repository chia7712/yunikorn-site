"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67546],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(58168),i=(t(96540),t(15680));const r={id:"env_setup",title:"Dev Environment Setup"},l=void 0,o={unversionedId:"developer_guide/env_setup",id:"developer_guide/env_setup",title:"Dev Environment Setup",description:"\x3c!--",source:"@site/docs/developer_guide/env_setup.md",sourceDirName:"developer_guide",slug:"/developer_guide/env_setup",permalink:"/docs/next/developer_guide/env_setup",draft:!1,tags:[],version:"current",frontMatter:{id:"env_setup",title:"Dev Environment Setup"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/user_guide/troubleshooting"},next:{title:"Build and Run",permalink:"/docs/next/developer_guide/build"}},s={},u=[{value:"Local Kubernetes cluster using Docker Desktop",id:"local-kubernetes-cluster-using-docker-desktop",level:2},{value:"Installation",id:"installation",level:3},{value:"Deploy and access dashboard",id:"deploy-and-access-dashboard",level:3},{value:"Access local Kubernetes cluster",id:"access-local-kubernetes-cluster",level:3},{value:"Local Kubernetes cluster with Minikube",id:"local-kubernetes-cluster-with-minikube",level:2},{value:"Installing Minikube",id:"installing-minikube",level:3},{value:"Deploy and access the cluster",id:"deploy-and-access-the-cluster",level:3},{value:"Build impact",id:"build-impact",level:3},{value:"Local Kubernetes Cluster with Kind",id:"local-kubernetes-cluster-with-kind",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Using Kind",id:"using-kind",level:3},{value:"Loading your images",id:"loading-your-images",level:3},{value:"Debug code locally",id:"debug-code-locally",level:2},{value:"Debug the scheduler plugin",id:"debug-the-scheduler-plugin",level:2},{value:"Access remote Kubernetes cluster",id:"access-remote-kubernetes-cluster",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"There are several ways to setup a local development environment for Kubernetes.\nThe three most common ones are ",(0,i.yg)("strong",{parentName:"p"},"Minikube")," (",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/minikube/"},"docs"),"),\n",(0,i.yg)("strong",{parentName:"p"},"Docker Desktop")," and ",(0,i.yg)("strong",{parentName:"p"},"Kind")," (",(0,i.yg)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"docs"),").\n",(0,i.yg)("strong",{parentName:"p"},"Minikube")," provisions a local Kubernetes cluster on several Virtual Machines\n(via VirtualBox or something similar)."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Docker Desktop"),", on the other hand, sets up Kubernetes cluster using a local\nDocker installation."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Kind")," provides lightweight Kubernetes clusters for Windows, Linux and Mac\nusing an existing Docker installation."),(0,i.yg)("h2",{id:"local-kubernetes-cluster-using-docker-desktop"},"Local Kubernetes cluster using Docker Desktop"),(0,i.yg)("p",null,"In this tutorial, we will base all the installs on Docker Desktop.\nEven in this case we can use a lightweight ",(0,i.yg)("a",{parentName:"p",href:"#local-kubernetes-cluster-with-minikube"},"minikube"),"\nsetup which gives the same functionality with less impact."),(0,i.yg)("h3",{id:"installation"},"Installation"),(0,i.yg)("p",null,"Download and install ",(0,i.yg)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),".\nNewer Docker versions have an embedded version of Kubernetes so no additional\ninstallation is needed. Follow the instructions ",(0,i.yg)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/#kubernetes"},"here"),"\nto get Kubernetes up and running within Docker Desktop.\nAlternatively, a Kind cluster may be created (see instructions\n",(0,i.yg)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#creating-a-cluster"},"here"),"."),(0,i.yg)("p",null,"Once Kubernetes is started in Docker Desktop, you should see something similar\nto this:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Kubernetes in Docker Desktop",src:t(51740).A,width:"424",height:"391"})),(0,i.yg)("p",null,"This means that:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Kubernetes is running."),(0,i.yg)("li",{parentName:"ol"},"The command line tool ",(0,i.yg)("inlineCode",{parentName:"li"},"kubectl")," is installed in the ",(0,i.yg)("inlineCode",{parentName:"li"},"/usr/local/bin")," directory."),(0,i.yg)("li",{parentName:"ol"},"The Kubernetes context is set to ",(0,i.yg)("inlineCode",{parentName:"li"},"docker-desktop"),".")),(0,i.yg)("h3",{id:"deploy-and-access-dashboard"},"Deploy and access dashboard"),(0,i.yg)("p",null,"Optionally, after setting up Kubernetes you may wish to deploy the Kubernetes\nDashboard Web UI. The dashboard may be deployed using the following steps:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Follow the instructions ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/kubernetes/dashboard"},"here")," to deploy the dashboard."),(0,i.yg)("li",{parentName:"ol"},"Start the Kubernetes proxy in the background from a terminal to get access on the dashboard on the local host:   ",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl proxy &\n"))),(0,i.yg)("li",{parentName:"ol"},"Access the dashboard ",(0,i.yg)("a",{parentName:"li",href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/#!/login"},"here"),".")),(0,i.yg)("h3",{id:"access-local-kubernetes-cluster"},"Access local Kubernetes cluster"),(0,i.yg)("p",null,"The dashboard as deployed in the previous step requires a token or config to\nsign in. Here we use the token to sign in. The token is generated\nautomatically and can be retrieved from the system."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Retrieve the name of the dashboard token:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl -n kube-system get secret | grep kubernetes-dashboard-token\n"))),(0,i.yg)("li",{parentName:"ol"},"Retrieve the content of the token. Note that the token name ends with a random\n5 character code and needs to be replaced with the result of step 1. As an\nexample:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl -n kube-system describe secret kubernetes-dashboard-token-tf6n8\n"))),(0,i.yg)("li",{parentName:"ol"},"Copy the token value which is part of the ",(0,i.yg)("inlineCode",{parentName:"li"},"Data")," section with the tag ",(0,i.yg)("inlineCode",{parentName:"li"},"token"),"."),(0,i.yg)("li",{parentName:"ol"},"Select the ",(0,i.yg)("strong",{parentName:"li"},"Token")," option in the dashboard web UI:",(0,i.yg)("br",null),(0,i.yg)("img",{alt:"Token Access in dashboard",src:t(50230).A,width:"481",height:"267"})),(0,i.yg)("li",{parentName:"ol"},"Paste the token value into the input box and sign in:",(0,i.yg)("br",null),(0,i.yg)("img",{alt:"Token Access in dashboard",src:t(5832).A,width:"432",height:"209"}))),(0,i.yg)("h2",{id:"local-kubernetes-cluster-with-minikube"},"Local Kubernetes cluster with Minikube"),(0,i.yg)("p",null,"Minikube can be added to an existing Docker Desktop install. Minikube can\neither use the pre-installed hypervisor or use a hypervisor of your choice.\nThese instructions use ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/moby/hyperkit"},"HyperKit")," which is\nembedded in Docker Desktop."),(0,i.yg)("p",null,"If you want to use a different hypervisor then HyperKit make sure that you\nfollow the generic minikube install instructions. Do not forget to install\nthe correct driver for the chosen hypervisor if required. The minikube\ninstallation instructions can be found ",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"here"),"."),(0,i.yg)("p",null,"Docker Desktop should have already installed HyperKit. To verify this, open a\nterminal and run: ",(0,i.yg)("inlineCode",{parentName:"p"},"hyperkit"),". Any response other than\n",(0,i.yg)("inlineCode",{parentName:"p"},"hyperkit: command not found")," confirms that HyperKit is installed and on\nthe path. If it is not found you can choose a different hypervisor or\nfix the Docker Desktop install."),(0,i.yg)("h3",{id:"installing-minikube"},"Installing Minikube"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Install minikube, either via ",(0,i.yg)("inlineCode",{parentName:"li"},"brew")," or directly via these steps: ",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64\nchmod +x minikube\nsudo mv minikube /usr/local/bin\n"))),(0,i.yg)("li",{parentName:"ol"},"Install HyperKit driver (required). You can either use ",(0,i.yg)("inlineCode",{parentName:"li"},"brew")," or directly via these steps:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -LO https://storage.googleapis.com/minikube/releases/latest/docker-machine-driver-hyperkit\nsudo install -o root -g wheel -m 4755 docker-machine-driver-hyperkit /usr/local/bin/\n"))),(0,i.yg)("li",{parentName:"ol"},"Update the minikube configuration to default to using HyperKit:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube config set vm-driver hyperkit\n"))),(0,i.yg)("li",{parentName:"ol"},"Change Docker Desktop to use minikube for Kubernetes:",(0,i.yg)("br",null),(0,i.yg)("img",{alt:"Kubernetes in Docker Desktop: minikube setting",src:t(11616).A,width:"425",height:"391"}))),(0,i.yg)("h3",{id:"deploy-and-access-the-cluster"},"Deploy and access the cluster"),(0,i.yg)("p",null,"After the installation is done you can start a new cluster."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Start the minikube cluster:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start --kubernetes-version v1.24.7\n"))),(0,i.yg)("li",{parentName:"ol"},"Start the minikube dashboard:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube dashboard &\n")))),(0,i.yg)("h3",{id:"build-impact"},"Build impact"),(0,i.yg)("p",null,"When you create images make sure that the build is run after pointing it to\nthe correct cluster. Without setting the environment minikube might not find\nthe docker images when deploying the scheduler."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Make sure minikube is started."),(0,i.yg)("li",{parentName:"ol"},"In the terminal where you will run the build, execute:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"eval $(minikube docker-env)\n"))),(0,i.yg)("li",{parentName:"ol"},"Run the image build from the yunikorn-k8shim repository root:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make image\n"))),(0,i.yg)("li",{parentName:"ol"},"Deploy the scheduler as per the normal instructions.")),(0,i.yg)("h2",{id:"local-kubernetes-cluster-with-kind"},"Local Kubernetes Cluster with Kind"),(0,i.yg)("p",null,"Kind (Kubernetes in Docker) is a lightweight tool for running lightweight\nKubernetes environments. It is very easy to test different Kubernetes versions\nwith Kind by specifing the version during cluster setup."),(0,i.yg)("h3",{id:"installation-1"},"Installation"),(0,i.yg)("p",null,"If you have go installed, you can run:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"go install sigs.k8s.io/kind@latest\n")),(0,i.yg)("p",null,"Other installation methods can be found on the Kind\n",(0,i.yg)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"website"),"."),(0,i.yg)("p",null,"Kind version 0.15 is required for Kubernetes 1.25 or later.\nLater versions of Kind add Kubernetes 1.26, 1.27 and 1.28.\nCheck the Kind release notes for the specific Kubernetes releases supported."),(0,i.yg)("h3",{id:"using-kind"},"Using Kind"),(0,i.yg)("p",null,"To test a new version of Kubernetes, you can pull a corresponding image from\nkind's repository."),(0,i.yg)("p",null,"For example, to create a cluster running Kubernetes 1.26.6:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kind create cluster --name test --image kindest/node:v1.26.6\n")),(0,i.yg)("p",null,"Kind will download the appropriate image and launch a new cluster named\n",(0,i.yg)("inlineCode",{parentName:"p"},"test"),". The active Kubernetes cluster will also be changed to ",(0,i.yg)("inlineCode",{parentName:"p"},"test"),"."),(0,i.yg)("p",null,"To delete the kind cluster:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kind delete cluster --name test\n")),(0,i.yg)("h3",{id:"loading-your-images"},"Loading your images"),(0,i.yg)("p",null,"In order to use a local image, you have to load your images into kind's\nregistry.  If you run ",(0,i.yg)("inlineCode",{parentName:"p"},"make image"),", you could use the following command\nto load your kind image.  This assumes AMD64 architecture."),(0,i.yg)("p",null,"The scheduler, web-ui and admission-controller examples are below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kind load docker-image apache/yunikorn:scheduler-amd64-latest\nkind load docker-image apache/yunikorn:web-amd64-latest\nkind load docker-image apache/yunikorn:admission-amd64-latesta\n")),(0,i.yg)("p",null,"If running on an ARM system, replace ",(0,i.yg)("inlineCode",{parentName:"p"},"amd64")," with ",(0,i.yg)("inlineCode",{parentName:"p"},"arm64")," above."),(0,i.yg)("h2",{id:"debug-code-locally"},"Debug code locally"),(0,i.yg)("p",null,"The scheduler may be run locally for debugging. This example assumes\nyou have installed the GoLand IDE for development."),(0,i.yg)("p",null,"In GoLand, open the ",(0,i.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),' project. Then click "Run" ->\n"Debug..." -> "Edit Configuration..." to get the pop-up configuration\nwindow. Note, you need to click "+" to create a new profile if the ',(0,i.yg)("inlineCode",{parentName:"p"},"Go Build"),"\noption is not available at the first time."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Debug Configuration",src:t(882).A,width:"1722",height:"1270"})),(0,i.yg)("p",null,"Set the following values in the dialog (as shown):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Run Kind: Package"),(0,i.yg)("li",{parentName:"ul"},"Package path: ",(0,i.yg)("inlineCode",{parentName:"li"},"github.com/apache/yunikorn-k8shim/pkg/cmd/shim")),(0,i.yg)("li",{parentName:"ul"},"Working directory: Project base directory (",(0,i.yg)("inlineCode",{parentName:"li"},"yunikorn-k8shim"),")"),(0,i.yg)("li",{parentName:"ul"},"Program arguments: Empty"),(0,i.yg)("li",{parentName:"ul"},"Environment: If ",(0,i.yg)("inlineCode",{parentName:"li"},"KUBECONFIG")," is not set globally, ensure it is set here.\nAdditionally, you may want to set ",(0,i.yg)("inlineCode",{parentName:"li"},"NAMESPACE=yunikorn"),", as otherwise\nYuniKorn will look for the ",(0,i.yg)("inlineCode",{parentName:"li"},"yunikorn-configs")," ConfigMap under the\n",(0,i.yg)("inlineCode",{parentName:"li"},"default")," Kubernetes namespace.")),(0,i.yg)("p",null,'Once the changes are done, click "Apply", then "Debug". You will need to\nset proper breakpoints in order to debug the program.'),(0,i.yg)("h2",{id:"debug-the-scheduler-plugin"},"Debug the scheduler plugin"),(0,i.yg)("p",null,"The scheduler may also be run in plugin mode. In this mode, the YuniKorn\nscheduler is built on top of the default scheduler and runs as a\nplugin (rather than completely standalone). Functionally, it performs the\nsame tasks, but relies on the upstream Kubernetes scheduler codebase for\ncommon functionality."),(0,i.yg)("p",null,"The run configuration for the scheduler in plugin mode is as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Run Kind: Package"),(0,i.yg)("li",{parentName:"ul"},"Package path: ",(0,i.yg)("inlineCode",{parentName:"li"},"github.com/apache/yunikorn-k8shim/pkg/cmd/schedulerplugin")),(0,i.yg)("li",{parentName:"ul"},"Working directory: Project base directory (",(0,i.yg)("inlineCode",{parentName:"li"},"yunikorn-k8shim"),")"),(0,i.yg)("li",{parentName:"ul"},"Program arguments:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"--bind-address=0.0.0.0\n--leader-elect=false\n--config=conf/scheduler-config-local.yaml\n-v=2\n"))),(0,i.yg)("li",{parentName:"ul"},"Environment: If ",(0,i.yg)("inlineCode",{parentName:"li"},"KUBECONFIG")," is not set globally, ensure it is set here.\nAdditionally, you may want to set ",(0,i.yg)("inlineCode",{parentName:"li"},"NAMESPACE=yunikorn"),", as otherwise\nYuniKorn will look for the ",(0,i.yg)("inlineCode",{parentName:"li"},"yunikorn-configs")," ConfigMap under the\n",(0,i.yg)("inlineCode",{parentName:"li"},"default")," Kubernetes namespace.")),(0,i.yg)("p",null,"Additionally, before running for the first time, run ",(0,i.yg)("inlineCode",{parentName:"p"},"make init")," from a\nterminal in the root of the ",(0,i.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository. This will\ngenerate the contents of ",(0,i.yg)("inlineCode",{parentName:"p"},"conf/scheduler-config-local.yaml"),", which is\nrequired."),(0,i.yg)("h2",{id:"access-remote-kubernetes-cluster"},"Access remote Kubernetes cluster"),(0,i.yg)("p",null,"This setup assumes you have already installed a remote Kubernetes cluster.\nFor a generic view on how to access a multiple cluster and integrate it follow\nthe ",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"accessing multiple clusters"),"\ndocumentation from Kubernetes."),(0,i.yg)("p",null,"Or follow these simplified steps:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Get the Kubernetes ",(0,i.yg)("inlineCode",{parentName:"li"},"config")," file from remote cluster, copy it to the local\nmachine and give it a unique name i.e. ",(0,i.yg)("inlineCode",{parentName:"li"},"config-remote")),(0,i.yg)("li",{parentName:"ol"},"Save the ",(0,i.yg)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable (if set)",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export KUBECONFIG_SAVED=$KUBECONFIG\n"))),(0,i.yg)("li",{parentName:"ol"},"Add the new file to the environment variable",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export KUBECONFIG=$KUBECONFIG:config-remote\n"))),(0,i.yg)("li",{parentName:"ol"},"Run the command ",(0,i.yg)("inlineCode",{parentName:"li"},"kubectl config view")," to check that both configs can be accessed"),(0,i.yg)("li",{parentName:"ol"},"Switch context using ",(0,i.yg)("inlineCode",{parentName:"li"},"kubectl config use-context remote-cluster")),(0,i.yg)("li",{parentName:"ol"},"Confirm that the current context is now switched to the remote cluster config:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"kubectl config get-contexts\nCURRENT NAME           CLUSTER                AUTHINFO\n        docker-desktop docker-desktop-cluster docker-for-desktop\n*       remote-cluster kubernetes             kubernetes-admin\n")))),(0,i.yg)("p",null,"More documentation can be found\n",(0,i.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"here"),"."))}d.isMDXComponent=!0},5832:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dashboard_secret-80e18f88ceb541c0d70bcd1c60176290.png"},50230:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dashboard_token_select-a9c66b12d37a247d623e662d642b80be.png"},11616:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/docker-dektop-minikube-741c814795983ad6133a5b5b33a2f398.png"},51740:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/docker-desktop-7afa28a7972e0e8867bcab8a6a9ac614.png"},882:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/goland_debug-564b799ed8f9dcb6b9b18ba0272496bf.png"}}]);