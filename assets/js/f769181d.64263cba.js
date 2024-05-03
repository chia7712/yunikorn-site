"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40081],{35567:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=i(13274),a=i(1780);const l={id:"run_nvidia",title:"Run NVIDIA GPU Jobs",description:"How to run generic example of GPU scheduling with Yunikorn.",keywords:["NVIDIA GPU"]},t=void 0,r={id:"user_guide/workloads/run_nvidia",title:"Run NVIDIA GPU Jobs",description:"How to run generic example of GPU scheduling with Yunikorn.",source:"@site/versioned_docs/version-1.5.0/user_guide/workloads/run_nvidia.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_nvidia",permalink:"/docs/user_guide/workloads/run_nvidia",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"run_nvidia",title:"Run NVIDIA GPU Jobs",description:"How to run generic example of GPU scheduling with Yunikorn.",keywords:["NVIDIA GPU"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/user_guide/workloads/workload_overview"},next:{title:"Run Spark Jobs",permalink:"/docs/user_guide/workloads/run_spark"}},c={},o=[{value:"Yunikorn with NVIDIA GPUs",id:"yunikorn-with-nvidia-gpus",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Install NVIDIA Device Plugin",id:"install-nvidia-device-plugin",level:3},{value:"Testing NVIDIA Device Plugin",id:"testing-nvidia-device-plugin",level:3},{value:"Enable GPU Time-Slicing (Optional)",id:"enable-gpu-time-slicing-optional",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Install NVIDIA GPU Operator",id:"install-nvidia-gpu-operator",level:3},{value:"Applying the Time-Slicing Configuration",id:"applying-the-time-slicing-configuration",level:3},{value:"Testing GPU Time-Slicing",id:"testing-gpu-time-slicing",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"yunikorn-with-nvidia-gpus",children:"Yunikorn with NVIDIA GPUs"}),"\n",(0,s.jsxs)(e.p,{children:["This guide gives an overview of how to set up NVIDIA Device Plugin which enable user to run GPUs with Yunikorn, for more details please check ",(0,s.jsx)(e.a,{href:"https://github.com/NVIDIA/k8s-device-plugin#nvidia-device-plugin-for-kubernetes",children:(0,s.jsx)(e.strong,{children:"NVIDIA device plugin for Kubernetes"})}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,s.jsx)(e.p,{children:"Before following the steps below, Yunikorn need to deploy on the Kubernetes with GPUs."}),"\n",(0,s.jsx)(e.h3,{id:"install-nvidia-device-plugin",children:"Install NVIDIA Device Plugin"}),"\n",(0,s.jsx)(e.p,{children:"Add the nvidia-device-plugin helm repository."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"helm repo add nvdp https://nvidia.github.io/k8s-device-plugin\nhelm repo update\nhelm repo list\n"})}),"\n",(0,s.jsx)(e.p,{children:"Verify the latest release version of the plugin is available."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"helm search repo nvdp --devel\nNAME                     \t  CHART VERSION  APP VERSION\t DESCRIPTION\nnvdp/nvidia-device-plugin\t  0.14.1         0.14.1          A Helm chart for ...\n"})}),"\n",(0,s.jsx)(e.p,{children:"Deploy the device plugin"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"kubectl create namespace nvidia\nhelm install nvidia-device-plugin nvdp/nvidia-device-plugin \\\n  --namespace nvidia \\\n  --create-namespace \\\n  --version 0.14.1\n"})}),"\n",(0,s.jsx)(e.p,{children:"Check the status of the pods to ensure NVIDIA device plugin is running"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"kubectl get pods -A\n\nNAMESPACE      NAME                                      READY   STATUS    RESTARTS      AGE\nkube-flannel   kube-flannel-ds-j24fx                     1/1     Running   1 (11h ago)   11h\nkube-system    coredns-78fcd69978-2x9l8                  1/1     Running   1 (11h ago)   11h\nkube-system    coredns-78fcd69978-gszrw                  1/1     Running   1 (11h ago)   11h\nkube-system    etcd-katlantyss-nzxt                      1/1     Running   3 (11h ago)   11h\nkube-system    kube-apiserver-katlantyss-nzxt            1/1     Running   4 (11h ago)   11h\nkube-system    kube-controller-manager-katlantyss-nzxt   1/1     Running   3 (11h ago)   11h\nkube-system    kube-proxy-4wz7r                          1/1     Running   1 (11h ago)   11h\nkube-system    kube-scheduler-katlantyss-nzxt            1/1     Running   4 (11h ago)   11h\nnvidia         nvidia-device-plugin-1659451060-c92sb     1/1     Running   1 (11h ago)   11h\n"})}),"\n",(0,s.jsx)(e.h3,{id:"testing-nvidia-device-plugin",children:"Testing NVIDIA Device Plugin"}),"\n",(0,s.jsx)(e.p,{children:"Create a gpu test yaml file."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"# gpu-pod.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-pod\nspec:\n  restartPolicy: Never\n  containers:\n    - name: cuda-container\n      image: nvcr.io/nvidia/k8s/cuda-sample:vectoradd-cuda11.7.1-ubi8\n      resources:\n        limits:\n          nvidia.com/gpu: 1 #requesting 1 GPU\n  tolerations:\n  - key: nvidia.com/gpu\n    operator: Exists\n    effect: NoSchedule\n"})}),"\n",(0,s.jsx)(e.p,{children:"Deploy the application."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"kubectl apply -f gpu-pod.yaml\n"})}),"\n",(0,s.jsx)(e.p,{children:"Check the logs to ensure the app completed successfully."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"kubectl get pod gpu-pod\n\nNAME                READY   STATUS      RESTARTS   AGE\ngpu-pod   0/1     Completed   0          9d\n"})}),"\n",(0,s.jsx)(e.p,{children:"Check the result."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"kubectl logs gpu-pod\n\t\n[Vector addition of 50000 elements]\nCopy input data from the host memory to the CUDA device\nCUDA kernel launch with 196 blocks of 256 threads\nCopy output data from the CUDA device to the host memory\nTest PASSED\nDone\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"enable-gpu-time-slicing-optional",children:"Enable GPU Time-Slicing (Optional)"}),"\n",(0,s.jsxs)(e.p,{children:["GPU time-slicing allow multi-tenant to share single GPU.\nTo know how the GPU time-slicing works, please refer to ",(0,s.jsx)(e.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/gpu-sharing.html#introduction",children:(0,s.jsx)(e.strong,{children:"Time-Slicing GPUs in Kubernetes"})}),". This page covers ways to enable GPU scheduling in Yunikorn using ",(0,s.jsx)(e.a,{href:"https://catalog.ngc.nvidia.com/orgs/nvidia/containers/gpu-operator",children:(0,s.jsx)(e.strong,{children:"NVIDIA GPU Operator"})}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(e.p,{children:["Specify multiple configurations in a ",(0,s.jsx)(e.code,{children:"ConfigMap"})," as in the following example."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"# time-slicing-config.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: time-slicing-config\n  namespace: nvidia\ndata:\n    a100-40gb: |-\n        version: v1\n        sharing:\n          timeSlicing:\n            resources:\n            - name: nvidia.com/gpu\n              replicas: 8\n            - name: nvidia.com/mig-1g.5gb\n              replicas: 2\n            - name: nvidia.com/mig-2g.10gb\n              replicas: 2\n            - name: nvidia.com/mig-3g.20gb\n              replicas: 3\n            - name: nvidia.com/mig-7g.40gb\n              replicas: 7\n    rtx-3070: |-\n        version: v1\n        sharing:\n          timeSlicing:\n            resources:\n            - name: nvidia.com/gpu\n              replicas: 8\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"If the GPU type in nodes do not include the a100-40gb or rtx-3070, you could modify the yaml file based on existing GPU types.\nFor example, there are only multiple rtx-2080ti in the local kubernetes cluster.\nMIG is not supported by rtx-2080ti, so it could not replace the a100-40gb.\nTime slicing is supported by rtx-2080ti, so it could replace rtx-3070."})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["MIG support was added to Kubernetes in 2020. Refer to ",(0,s.jsx)(e.a,{href:"https://www.google.com/url?q=https://docs.google.com/document/d/1mdgMQ8g7WmaI_XVVRrCvHPFPOMCm5LQD5JefgAh6N8g/edit&sa=D&source=editors&ust=1655578433019961&usg=AOvVaw1F-OezvM-Svwr1lLsdQmu3",children:(0,s.jsx)(e.strong,{children:"Supporting MIG in Kubernetes"})})," for details on how this works."]})}),"\n",(0,s.jsxs)(e.p,{children:["Create a ",(0,s.jsx)(e.code,{children:"ConfigMap"})," in the operator namespace."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl create namespace nvidia\nkubectl create -f time-slicing-config.yaml\n"})}),"\n",(0,s.jsx)(e.h3,{id:"install-nvidia-gpu-operator",children:"Install NVIDIA GPU Operator"}),"\n",(0,s.jsx)(e.p,{children:"Add the nvidia-gpu-operator helm repository."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"helm repo add nvidia https://helm.ngc.nvidia.com/nvidia\nhelm repo update\nhelm repo list\n"})}),"\n",(0,s.jsx)(e.p,{children:"Enabling shared access to GPUs with the NVIDIA GPU Operator."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"During fresh install of the NVIDIA GPU Operator with time-slicing enabled."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"helm install gpu-operator nvidia/gpu-operator \\\n    -n nvidia \\\n    --set devicePlugin.config.name=time-slicing-config\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"For dynamically enabling time-slicing with GPU Operator already installed."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'kubectl patch clusterpolicy/cluster-policy \\\n-n nvidia --type merge \\\n-p \'{"spec": {"devicePlugin": {"config": {"name": "time-slicing-config"}}}}\'\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"applying-the-time-slicing-configuration",children:"Applying the Time-Slicing Configuration"}),"\n",(0,s.jsx)(e.p,{children:"There are two methods:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Across the cluster"}),"\n",(0,s.jsxs)(e.p,{children:["Install the GPU Operator by passing the time-slicing ",(0,s.jsx)(e.code,{children:"ConfigMap"})," name and the default configuration."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'kubectl patch clusterpolicy/cluster-policy \\\n  -n nvidia --type merge \\\n  -p \'{"spec": {"devicePlugin": {"config": {"name": "time-slicing-config", "default": "rtx-3070"}}}}\'\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"On certain nodes"}),"\n",(0,s.jsxs)(e.p,{children:["Label the node with the required time-slicing configuration in the ",(0,s.jsx)(e.code,{children:"ConfigMap"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl label node <node-name> nvidia.com/device-plugin.config=rtx-3070\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Once the GPU Operator and Time-Slicing GPUs is installed, check the status of the pods to ensure all the containers are running and the validation is complete."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl get pods -n nvidia\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"NAME                                                          READY   STATUS      RESTARTS   AGE\ngpu-feature-discovery-qbslx                                   2/2     Running     0          20h\ngpu-operator-7bdd8bf555-7clgv                                 1/1     Running     0          20h\ngpu-operator-node-feature-discovery-master-59b4b67f4f-q84zn   1/1     Running     0          20h\ngpu-operator-node-feature-discovery-worker-n58dv              1/1     Running     0          20h\nnvidia-container-toolkit-daemonset-8gv44                      1/1     Running     0          20h\nnvidia-cuda-validator-tstpk                                   0/1     Completed   0          20h\nnvidia-dcgm-exporter-pgk7v                                    1/1     Running     1          20h\nnvidia-device-plugin-daemonset-w8hh4                          2/2     Running     0          20h\nnvidia-device-plugin-validator-qrpxx                          0/1     Completed   0          20h\nnvidia-operator-validator-htp6b                               1/1     Running     0          20h\n"})}),"\n",(0,s.jsx)(e.p,{children:"Verify that the time-slicing configuration is applied successfully."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl describe node <node-name>\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"...\nCapacity:\n  nvidia.com/gpu: 8\n...\nAllocatable:\n  nvidia.com/gpu: 8\n...\n"})}),"\n",(0,s.jsx)(e.h3,{id:"testing-gpu-time-slicing",children:"Testing GPU Time-Slicing"}),"\n",(0,s.jsxs)(e.p,{children:["Create a wordload test file ",(0,s.jsx)(e.code,{children:"plugin-test.yaml"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'# plugin-test.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nvidia-plugin-test\n  labels:\n    app: nvidia-plugin-test\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: nvidia-plugin-test\n  template:\n    metadata:\n      labels:\n        app: nvidia-plugin-test\n    spec:\n      tolerations:\n        - key: nvidia.com/gpu\n          operator: Exists\n          effect: NoSchedule\n      containers:\n        - name: dcgmproftester11\n          image: nvidia/samples:dcgmproftester-2.1.7-cuda11.2.2-ubuntu20.04\n          command: ["/bin/sh", "-c"]\n          args:\n            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done\n          resources:\n            limits:\n              nvidia.com/gpu: 1\n          securityContext:\n            capabilities:\n              add: ["SYS_ADMIN"]\n'})}),"\n",(0,s.jsx)(e.p,{children:"Create a deployment with multiple replicas."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl apply -f plugin-test.yaml\n"})}),"\n",(0,s.jsx)(e.p,{children:"Verify that all five replicas are running."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"In pods"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl get pods\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"NAME                                  READY   STATUS    RESTARTS   AGE\nnvidia-plugin-test-677775d6c5-bpsvn   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-m95zm   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-9kgzg   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-lrl2c   1/1     Running   0          8m8s\nnvidia-plugin-test-677775d6c5-9r2pz   1/1     Running   0          8m8s\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"In node"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kubectl describe node <node-name>\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"...\nAllocated resources:\n  (Total limits may be over 100 percent, i.e., overcommitted.)\n  Resource           Requests    Limits\n  --------           --------    ------\n  ...\n  nvidia.com/gpu     5           5\n...\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"In NVIDIA system management Interface"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"nvidia-smi\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 520.61.05    Driver Version: 520.61.05    CUDA Version: 11.8     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  On   | 00000000:01:00.0  On |                  N/A |\n| 46%   86C    P2   214W / 220W |   4297MiB /  8192MiB |    100%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n                                                                              \n+-----------------------------------------------------------------------------+\n| Processes:                                                                  |\n|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |\n|        ID   ID                                                   Usage      |\n|=============================================================================|\n|    0   N/A  N/A   1776886      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1776921      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1776937      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1777068      C   /usr/bin/dcgmproftester11         764MiB |\n|    0   N/A  N/A   1777079      C   /usr/bin/dcgmproftester11         764MiB |\n+-----------------------------------------------------------------------------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In Yunikorn UI applications\n",(0,s.jsx)(e.img,{src:i(75581).A+"",width:"619",height:"298"})]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},75581:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/yunikorn-gpu-time-slicing-4116c040183147ddf56dd1b8a28d2265.png"},1780:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>r});var s=i(79474);const a={},l=s.createContext(a);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);