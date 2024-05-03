"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86650],{74550:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=r(13274),i=r(1780);const t={id:"run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",keywords:["mpi"]},s=void 0,a={id:"user_guide/workloads/run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",source:"@site/versioned_docs/version-1.5.0/user_guide/workloads/run_mpi.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_mpi",permalink:"/docs/user_guide/workloads/run_mpi",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"run_mpi",title:"Run MPI Jobs",description:"How to run MPI jobs with YuniKorn",keywords:["mpi"]},sidebar:"docs",previous:{title:"Run TensorFlow Jobs",permalink:"/docs/user_guide/workloads/run_tf"},next:{title:"Cluster",permalink:"/docs/api/cluster"}},p={},l=[{value:"Installing the MPI Operator",id:"installing-the-mpi-operator",level:2},{value:"Run a MPI Job",id:"run-a-mpi-job",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This guide walks through how to setup the ",(0,o.jsx)(n.a,{href:"https://github.com/kubeflow/mpi-operator",children:"MPI Operator"})," and to how to run a MPIJob with the YuniKorn scheduler."]}),"\n",(0,o.jsx)(n.h2,{id:"installing-the-mpi-operator",children:"Installing the MPI Operator"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following command to install the mpi operator. If you have problems with installation,\nplease refer to ",(0,o.jsx)(n.a,{href:"https://github.com/kubeflow/mpi-operator",children:"this doc"})," for details."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f https://raw.githubusercontent.com/kubeflow/mpi-operator/master/deploy/v2beta1/mpi-operator.yaml\n"})}),"\n",(0,o.jsx)(n.h2,{id:"run-a-mpi-job",children:"Run a MPI Job"}),"\n",(0,o.jsx)(n.p,{children:"This example shows to run a pure MPI application."}),"\n",(0,o.jsx)(n.p,{children:"The program prints some basic information about the workers.\nThen, it calculates an approximate value for pi."}),"\n",(0,o.jsxs)(n.p,{children:["Here is a Pi YAML example ",(0,o.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/examples/mpioperator/Pi/pi.yaml",children:"example"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: kubeflow.org/v2beta1\nkind: MPIJob\nmetadata:\n  name: pi\nspec:\n  slotsPerWorker: 1\n  runPolicy:\n    cleanPodPolicy: Running\n    ttlSecondsAfterFinished: 60\n  sshAuthMountPath: /home/mpiuser/.ssh\n  mpiReplicaSpecs:\n    Launcher:\n      replicas: 1\n      template:\n        labels:\n          applicationId: "mpi_job_pi"\n          queue: root.mpi\n        spec:\n          schedulerName: yunikorn\n          containers:\n          - image: mpioperator/mpi-pi\n            name: mpi-launcher\n            securityContext:\n              runAsUser: 1000\n            command:\n            - mpirun\n            args:\n            - -n\n            - "2"\n            - /home/mpiuser/pi\n            resources:\n              limits:\n                cpu: 1\n                memory: 1Gi\n    Worker:\n      replicas: 2\n      template:\n        labels:\n          applicationId: "mpi_job_pi"\n          queue: root.mpi\n        spec:\n          schedulerName: yunikorn\n          containers:\n          - image: mpioperator/mpi-pi\n            name: mpi-worker\n            securityContext:\n              runAsUser: 1000\n            command:\n            - /usr/sbin/sshd\n            args:\n            - -De\n            - -f\n            - /home/mpiuser/.sshd_config\n            resources:\n              limits:\n                cpu: 1\n                memory: 1Gi\n'})}),"\n",(0,o.jsx)(n.p,{children:"Create the MPIJob."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl create -f deployments/examples/mpioperator/Pi/pi.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"We added Yunikorn labels to the Pi example to demonstrate using the yunikorn scheduler."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1780:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var o=r(79474);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);