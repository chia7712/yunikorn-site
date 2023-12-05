"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"deployment",title:"Deploy to Kubernetes"},l=void 0,i={unversionedId:"developer_guide/deployment",id:"version-1.4.0/developer_guide/deployment",title:"Deploy to Kubernetes",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/developer_guide/deployment.md",sourceDirName:"developer_guide",slug:"/developer_guide/deployment",permalink:"/docs/developer_guide/deployment",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"deployment",title:"Deploy to Kubernetes"},sidebar:"docs",previous:{title:"Go module updates",permalink:"/docs/developer_guide/dependencies"},next:{title:"Development in CodeReady Containers",permalink:"/docs/developer_guide/openshift_development"}},s={},p=[{value:"Build docker image",id:"build-docker-image",level:2},{value:"Setup RBAC for Scheduler",id:"setup-rbac-for-scheduler",level:2},{value:"Create/Update the ConfigMap",id:"createupdate-the-configmap",level:2},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",level:2},{value:"Setup RBAC for Admission Controller",id:"setup-rbac-for-admission-controller",level:2},{value:"Create the Secret",id:"create-the-secret",level:2},{value:"Deploy the Admission Controller",id:"deploy-the-admission-controller",level:2},{value:"Access to the web UI",id:"access-to-the-web-ui",level:2},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The easiest way to deploy YuniKorn is to leverage our ",(0,o.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/yunikorn/yunikorn"},"helm charts"),",\nyou can find the guide ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"here"),". This document describes the manual process to deploy YuniKorn\nscheduler and admission controller. It is primarily intended for developers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The primary source of deployment information is the Helm chart, which can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/"},"yunikorn-release"),". Manual deployment may lead to out-of-sync configurations, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments/scheduler")),(0,o.kt)("h2",{id:"build-docker-image"},"Build docker image"),(0,o.kt)("p",null,"Under project root of the ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),", run the command to build an image using the map for the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"make image\n")),(0,o.kt)("p",null,"This command will build an image. The image will be tagged with a default version, image tag and your build architecture. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," the default build uses a hardcoded user and tag. You ",(0,o.kt)("em",{parentName:"p"},"must")," update the ",(0,o.kt)("inlineCode",{parentName:"p"},"IMAGE_TAG")," variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile")," to push to an appropriate repository. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," the latest yunikorn images in docker hub are not updated anymore due to ASF policy. Hence, you should build both scheduler image and web image locally before deploying them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," the imaging tagging includes your build architecture. For Intel, it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"amd64")," and for Mac M1, it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"arm64"),"."),(0,o.kt)("h2",{id:"setup-rbac-for-scheduler"},"Setup RBAC for Scheduler"),(0,o.kt)("p",null,"In the example, RBAC are configured for the yuniKorn namespace.\nThe first step is to create the RBAC role for the scheduler, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml"},"yunikorn-rbac.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/yunikorn-rbac.yaml\n")),(0,o.kt)("p",null,"The role is a requirement on the current versions of kubernetes."),(0,o.kt)("h2",{id:"createupdate-the-configmap"},"Create/Update the ConfigMap"),(0,o.kt)("p",null,"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"download configuration file if not available on the node to add to kubernetes:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -o yunikorn-configs.yaml https://raw.githubusercontent.com/apache/yunikorn-k8shim/master/deployments/scheduler/yunikorn-configs.yaml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"modify the content of yunikorn-configs.yaml file as needed, and create ConfigMap in kubernetes:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=yunikorn-configs.yaml\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Or update ConfigMap in kubernetes:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=yunikorn-configs.yaml -o yaml --dry-run=client | kubectl apply -f -\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"check if the ConfigMap was created/updated correctly:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl describe configmaps yunikorn-configs\n")),(0,o.kt)("h2",{id:"deploy-the-scheduler"},"Deploy the Scheduler"),(0,o.kt)("p",null,"The scheduler can be deployed with following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/scheduler.yaml\n")),(0,o.kt)("p",null,"The deployment will run 2 containers from your pre-built docker images in 1 pod,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"),(0,o.kt)("li",{parentName:"ul"},"yunikorn-scheduler-web (web UI)")),(0,o.kt)("p",null,"Alternatively, the scheduler can be deployed as a K8S scheduler plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/plugin.yaml\n")),(0,o.kt)("p",null,"The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName: yunikorn")," in pod's spec. In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName"),", you will also have to add a label ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationId")," to the pod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  metadata:\n    name: pod_example\n    labels:\n      applicationId: appID\n  spec:\n    schedulerName: yunikorn\n")),(0,o.kt)("p",null,"Note: Admission controller abstracts the addition of ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationId")," from the user and hence, routes all traffic to YuniKorn. If you use helm chart to deploy, it will install admission controller along with the scheduler. Otherwise, proceed to the steps below to manually deploy the admission controller if running non-example workloads where ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulerName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"applicationId")," are not present in the pod spec and metadata, respectively."),(0,o.kt)("h2",{id:"setup-rbac-for-admission-controller"},"Setup RBAC for Admission Controller"),(0,o.kt)("p",null,"Before the admission controller is deployed, we must create its RBAC role, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller-rbac.yaml"},"admission-controller-rbac.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/admission-controller-rbac.yaml\n")),(0,o.kt)("h2",{id:"create-the-secret"},"Create the Secret"),(0,o.kt)("p",null,"Since the admission controller intercepts calls to the API server to validate/mutate incoming requests, we must deploy an empty secret\nused by the webhook server to store TLS certificates and keys. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller-secrets.yaml"},"admission-controller-secrets.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/admission-controller-secrets.yaml\n")),(0,o.kt)("h2",{id:"deploy-the-admission-controller"},"Deploy the Admission Controller"),(0,o.kt)("p",null,"Now we can deploy the admission controller as a service. This will automatically validate/modify incoming requests and objects, respectively, in accordance with the ",(0,o.kt)("a",{parentName:"p",href:"#Deploy-the-Scheduler"},"example in Deploy the Scheduler"),". See the contents of the admission controller deployment and service in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller.yaml"},"admission-controller.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/admission-controller.yaml\n")),(0,o.kt)("h2",{id:"access-to-the-web-ui"},"Access to the web UI"),(0,o.kt)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward svc/yunikorn-service 9889 9080\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",(0,o.kt)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."),(0,o.kt)("h2",{id:"configuration-hot-refresh"},"Configuration Hot Refresh"),(0,o.kt)("p",null,"YuniKorn uses config maps for configurations, and it supports loading configuration changes automatically by watching config map changes using shared informers."),(0,o.kt)("p",null,"To make configuration changes, simply update the content in the configmap, which can be done either via Kubernetes dashboard UI or command line. Note, changes made to the configmap might have some delay to be picked up by the scheduler."))}u.isMDXComponent=!0}}]);