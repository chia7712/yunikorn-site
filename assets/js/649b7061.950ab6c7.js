"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32518],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>h});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?t.createElement(h,a(a({ref:n},u),{},{components:r})):t.createElement(h,a({ref:n},u))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60889:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={id:"run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",keywords:["mpi"]},a=void 0,p={unversionedId:"user_guide/workloads/run_mpi",id:"version-1.2.0/user_guide/workloads/run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",source:"@site/versioned_docs/version-1.2.0/user_guide/workloads/run_mpi.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_mpi",permalink:"/docs/1.2.0/user_guide/workloads/run_mpi",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",keywords:["mpi"]},sidebar:"docs",previous:{title:"Run TensorFlow Jobs",permalink:"/docs/1.2.0/user_guide/workloads/run_tf"},next:{title:"Cluster",permalink:"/docs/1.2.0/api/cluster"}},s={},l=[{value:"Installing the MPI Operator",id:"installing-the-mpi-operator",level:2},{value:"Run a MPI Job",id:"run-a-mpi-job",level:2}],u={toc:l},c="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide walks through how to setup the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator"},"MPI Operator")," and to how to run a MPIJob with the YuniKorn scheduler."),(0,o.kt)("h2",{id:"installing-the-mpi-operator"},"Installing the MPI Operator"),(0,o.kt)("p",null,"You can use the following command to install the mpi operator. If you have problems with installation,\nplease refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/mpi-operator"},"this doc")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f https://raw.githubusercontent.com/kubeflow/mpi-operator/master/deploy/v2beta1/mpi-operator.yaml\n")),(0,o.kt)("h2",{id:"run-a-mpi-job"},"Run a MPI Job"),(0,o.kt)("p",null,"This example shows to run a pure MPI application."),(0,o.kt)("p",null,"The program prints some basic information about the workers.\nThen, it calculates an approximate value for pi."),(0,o.kt)("p",null,"Here is a Pi YAML example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/mpioperator/Pi/pi.yaml"},"example"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v2beta1\nkind: MPIJob\nmetadata:\n  name: pi\nspec:\n  slotsPerWorker: 1\n  runPolicy:\n    cleanPodPolicy: Running\n    ttlSecondsAfterFinished: 60\n  sshAuthMountPath: /home/mpiuser/.ssh\n  mpiReplicaSpecs:\n    Launcher:\n      replicas: 1\n      template:\n        labels:\n          applicationId: "mpi_job_pi"\n          queue: root.mpi\n        spec:\n          schedulerName: yunikorn\n          containers:\n          - image: mpioperator/mpi-pi\n            name: mpi-launcher\n            securityContext:\n              runAsUser: 1000\n            command:\n            - mpirun\n            args:\n            - -n\n            - "2"\n            - /home/mpiuser/pi\n            resources:\n              limits:\n                cpu: 1\n                memory: 1Gi\n    Worker:\n      replicas: 2\n      template:\n        labels:\n          applicationId: "mpi_job_pi"\n          queue: root.mpi\n        spec:\n          schedulerName: yunikorn\n          containers:\n          - image: mpioperator/mpi-pi\n            name: mpi-worker\n            securityContext:\n              runAsUser: 1000\n            command:\n            - /usr/sbin/sshd\n            args:\n            - -De\n            - -f\n            - /home/mpiuser/.sshd_config\n            resources:\n              limits:\n                cpu: 1\n                memory: 1Gi\n')),(0,o.kt)("p",null,"Create the MPIJob."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/mpioperator/Pi/pi.yaml\n")),(0,o.kt)("p",null,"We added Yunikorn labels to the Pi example to demonstrate using the yunikorn scheduler."))}m.isMDXComponent=!0}}]);