"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65672],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),o=(n(96540),n(15680));const l={id:"troubleshooting",title:"Troubleshooting"},r=void 0,i={unversionedId:"user_guide/troubleshooting",id:"version-1.5.0/user_guide/troubleshooting",title:"Troubleshooting",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/user_guide/troubleshooting.md",sourceDirName:"user_guide",slug:"/user_guide/troubleshooting",permalink:"/docs/user_guide/troubleshooting",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Queue",permalink:"/docs/metrics/queue"},next:{title:"Dev Environment Setup",permalink:"/docs/developer_guide/env_setup"}},s={},p=[{value:"Scheduler logs",id:"scheduler-logs",level:2},{value:"Understanding the linkage between Pod UUID, Task TaskID, AllocationAsk AllocationKey and Allocation AllocationID",id:"understanding-the-linkage-between-pod-uuid-task-taskid-allocationask-allocationkey-and-allocation-allocationid",level:3},{value:"Retrieve scheduler logs",id:"retrieve-scheduler-logs",level:3},{value:"Set Logging Level",id:"set-logging-level",level:3},{value:"Pods are stuck at Pending state",id:"pods-are-stuck-at-pending-state",level:2},{value:"1. Non of the nodes satisfy pod placement requirement",id:"1-non-of-the-nodes-satisfy-pod-placement-requirement",level:3},{value:"2. The queue is running out of capacity",id:"2-the-queue-is-running-out-of-capacity",level:3},{value:"Obtain full state dump",id:"obtain-full-state-dump",level:2},{value:"1. Scheduler URL",id:"1-scheduler-url",level:3},{value:"2. Scheduler REST API",id:"2-scheduler-rest-api",level:3},{value:"Restart the scheduler",id:"restart-the-scheduler",level:2},{value:"Gang Scheduling",id:"gang-scheduling",level:2},{value:"1. No placeholders created, app&#39;s pods are pending",id:"1-no-placeholders-created-apps-pods-are-pending",level:3},{value:"2. Not all placeholders can be allocated",id:"2-not-all-placeholders-can-be-allocated",level:3},{value:"3. Not all placeholders are swapped",id:"3-not-all-placeholders-are-swapped",level:3},{value:"4.Placeholders are not cleaned up when the app terminated",id:"4placeholders-are-not-cleaned-up-when-the-app-terminated",level:3},{value:"Still got questions?",id:"still-got-questions",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"scheduler-logs"},"Scheduler logs"),(0,o.yg)("h3",{id:"understanding-the-linkage-between-pod-uuid-task-taskid-allocationask-allocationkey-and-allocation-allocationid"},"Understanding the linkage between Pod UUID, Task TaskID, AllocationAsk AllocationKey and Allocation AllocationID"),(0,o.yg)("p",null,"Pod is always submitted with ",(0,o.yg)("inlineCode",{parentName:"p"},"UID"),", a unique identifier to differentiate various pods. When a pod is submitted, a ",(0,o.yg)("inlineCode",{parentName:"p"},"Task")," gets created in the Shim. It uses ",(0,o.yg)("inlineCode",{parentName:"p"},"UID")," of the POD as ",(0,o.yg)("inlineCode",{parentName:"p"},"TaskID")," and passed as an ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocationAsk")," request to the core. ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocationAsk")," uses ",(0,o.yg)("inlineCode",{parentName:"p"},"Task"),"'s\n",(0,o.yg)("inlineCode",{parentName:"p"},"TaskID")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocationKey")," and passed onto core for further processing. On receiving the ask request, Core tries to find a suitable\n",(0,o.yg)("inlineCode",{parentName:"p"},"Allocation")," using ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocationAsk"),"'s ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocationKey")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"AllocationID"),". Understanding this flow and its linkage between different objects helps to debug the issues."),(0,o.yg)("p",null,"An example has been described below to explain how pod's ",(0,o.yg)("inlineCode",{parentName:"p"},"UID")," is getting translated with different name and passed through different objects. "),(0,o.yg)("p",null,"On task creation,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'2023-10-05T10:00:02.224Z  INFO cache/context.go:832 task added  {"appID": "yunikorn-dex-app-mqgh4dw2-autogen", "taskID": "849b762d-68c7-4cce-96e1-5acb545a8620", "taskState": "New"}\n')),(0,o.yg)("p",null,"On processing allocation,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'2023-10-05T10:00:02.523Z  INFO  scheduler/partition.go:890  scheduler allocation processed  {"appID": "yunikorn-dex-app-mqgh4dw2-autogen", "allocationKey": "849b762d-68c7-4cce-96e1-5acb545a8620", "allocationID": "849b762d-68c7-4cce-96e1-5acb545a8620-0", "allocatedResource": "map[memory:343932928 vcore:200]", "placeholder": false, "targetNode": "ip-10-130-86-3.eu-west-1.compute.internal"}\n')),(0,o.yg)("p",null,"On binding the pod to node,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'2023-10-05T10:00:02.523Z  INFO  client/kubeclient.go:112  bind pod to node  {"podName": "dbtdmchicdbdmchicdbstagingdata-1f8b6b53321f4cee9da13a7ac1f2a60c", "podUID": "849b762d-68c7-4cce-96e1-5acb545a8620", "nodeID": "ip-10-130-86-3.eu-west-1.compute.internal"}\n')),(0,o.yg)("h3",{id:"retrieve-scheduler-logs"},"Retrieve scheduler logs"),(0,o.yg)("p",null,"Currently, the scheduler writes its logs to stdout/stderr, docker container handles the redirection of these logs to a\nlocal location on the underneath node, you can read more document ",(0,o.yg)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/configure/"},"here"),".\nThese logs can be retrieved by ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#logs"},"kubectl logs"),". Such as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// get the scheduler pod\nkubectl get pod -l component=yunikorn-scheduler -n yunikorn\nNAME                                  READY   STATUS    RESTARTS   AGE\nyunikorn-scheduler-766d7d6cdd-44b82   2/2     Running   0          33h\n\n// retrieve logs\nkubectl logs yunikorn-scheduler-766d7d6cdd-44b82 yunikorn-scheduler-k8s -n yunikorn\n")),(0,o.yg)("p",null,"In most cases, this command cannot get all logs because the scheduler is rolling logs very fast. To retrieve more logs in\nthe past, you will need to setup the ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#cluster-level-logging-architectures"},"cluster level logging"),".\nThe recommended setup is to leverage ",(0,o.yg)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd")," to collect and persistent logs on an external storage, e.g s3. "),(0,o.yg)("h3",{id:"set-logging-level"},"Set Logging Level"),(0,o.yg)("p",null,"Edit the yunikorn-configs configmap:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl edit configmap/yunikorn-configs -n yunikorn\n")),(0,o.yg)("p",null,"Add ",(0,o.yg)("inlineCode",{parentName:"p"},"log.level")," to the ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," field of the configmap. For example setting ",(0,o.yg)("inlineCode",{parentName:"p"},"log.level")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"DEBUG")," sets the logging\nlevel to ",(0,o.yg)("inlineCode",{parentName:"p"},"DEBUG"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  log.level: DEBUG\n  ...\nkind: ConfigMap\nmetadata:\n   ...\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"log.level")," value can be either numeric (-1 through 5) or textual (DEBUG through FATAL)."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"center"},"Value"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Logging Level"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"-1"),(0,o.yg)("td",{parentName:"tr",align:"center"},"DEBUG")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"0"),(0,o.yg)("td",{parentName:"tr",align:"center"},"INFO")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"1"),(0,o.yg)("td",{parentName:"tr",align:"center"},"WARN")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"2"),(0,o.yg)("td",{parentName:"tr",align:"center"},"ERROR")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"3"),(0,o.yg)("td",{parentName:"tr",align:"center"},"DPANIC")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"4"),(0,o.yg)("td",{parentName:"tr",align:"center"},"PANIC")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"5"),(0,o.yg)("td",{parentName:"tr",align:"center"},"FATAL")))),(0,o.yg)("h2",{id:"pods-are-stuck-at-pending-state"},"Pods are stuck at Pending state"),(0,o.yg)("p",null,"If some pods are stuck at Pending state, that means the scheduler could not find a node to allocate the pod. There are\nseveral possibilities to cause this:"),(0,o.yg)("h3",{id:"1-non-of-the-nodes-satisfy-pod-placement-requirement"},"1. Non of the nodes satisfy pod placement requirement"),(0,o.yg)("p",null,"A pod can be configured with some placement constraints, such as ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"node-selector"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity"},"affinity/anti-affinity"),",\ndo not have certain toleration for node ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"taints"),", etc.\nTo debug such issues, you can describe the pod by:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl describe pod <pod-name> -n <namespace>\n")),(0,o.yg)("p",null,"the pod events will contain the predicate failures and that explains why nodes are not qualified for allocation."),(0,o.yg)("h3",{id:"2-the-queue-is-running-out-of-capacity"},"2. The queue is running out of capacity"),(0,o.yg)("p",null,"If the queue is running out of capacity, pods will be pending for available queue resources. To check if a queue is still\nhaving enough capacity for the pending pods, there are several approaches:"),(0,o.yg)("p",null,"1) check the queue usage from yunikorn UI"),(0,o.yg)("p",null,"If you do not know how to access the UI, you can refer the document ",(0,o.yg)("a",{parentName:"p",href:"/docs/#access-the-web-ui"},"here"),". Go\nto the ",(0,o.yg)("inlineCode",{parentName:"p"},"Queues")," page, navigate to the queue where this job is submitted to. You will be able to see the available capacity\nleft for the queue."),(0,o.yg)("p",null,"2) check the pod events"),(0,o.yg)("p",null,"Run the ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl describe pod")," to get the pod events. If you see some event like:\n",(0,o.yg)("inlineCode",{parentName:"p"},"Application <appID> does not fit into <queuePath> queue"),". That means the pod could not get allocated because the queue\nis running out of capacity."),(0,o.yg)("p",null,"The pod will be allocated if some other pods in this queue is completed or removed. If the pod remains pending even\nthe queue has capacity, that may because it is waiting for the cluster to scale up."),(0,o.yg)("h2",{id:"obtain-full-state-dump"},"Obtain full state dump"),(0,o.yg)("p",null,"A Yunikorn state dump contains the every state object for every process which getting dumped. With endpoint to retrieve we can have many useful information in a single response for troubleshooting for example:  list of partitions, list of applications which includes running, completed also historical application details, number of nodes, utilization of nodes, generic cluster information, cluster utilization details, container history and queues information. "),(0,o.yg)("p",null,"The state dump is a valuable resource that Yunikorn offers for use while troubleshooting."),(0,o.yg)("p",null,"There are a few ways to obtain the full state dump."),(0,o.yg)("h3",{id:"1-scheduler-url"},"1. Scheduler URL"),(0,o.yg)("p",null,"STEPS:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Open the Scheduler URL in your browser window/tab and edit the URL as follows:"),(0,o.yg)("li",{parentName:"ul"},"Replace ",(0,o.yg)("inlineCode",{parentName:"li"},"/#/dashboard")," with ",(0,o.yg)("inlineCode",{parentName:"li"},"/ws/v1/fullstatedump"),", (For example, ",(0,o.yg)("inlineCode",{parentName:"li"},"http://localhost:9889/ws/v1/fullstatedump"),")"),(0,o.yg)("li",{parentName:"ul"},"Press Enter")),(0,o.yg)("p",null,"That displays and provides an easy user experience to view live full state dump."),(0,o.yg)("h3",{id:"2-scheduler-rest-api"},"2. Scheduler REST API"),(0,o.yg)("p",null,"With the below scheduler REST API returns information about full state dump used by the YuniKorn Scheduler."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"curl -X 'GET' http://localhost:9889/ws/v1/fullstatedump -H 'accept: application/json'")),(0,o.yg)("p",null,"For more details around the content of the state dump, please refer to the documentation on ",(0,o.yg)("a",{parentName:"p",href:"/docs/api/scheduler#retrieve-full-state-dump"},"retrieve-full-state-dump")),(0,o.yg)("h2",{id:"restart-the-scheduler"},"Restart the scheduler"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"In accordance with best practices for troubleshooting, restarting the scheduler should only be done as a last effort to get everything back up and running. It should never be done before gathering all logs and state dumps.")),(0,o.yg)("p",null,"YuniKorn can recover its state upon a restart. YuniKorn scheduler pod is deployed as a deployment, restart the scheduler\ncan be done by scale down and up the replica:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=0\nkubectl scale deployment yunikorn-scheduler -n yunikorn --replicas=1\n")),(0,o.yg)("h2",{id:"gang-scheduling"},"Gang Scheduling"),(0,o.yg)("h3",{id:"1-no-placeholders-created-apps-pods-are-pending"},"1. No placeholders created, app's pods are pending"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Reason"),": This is usually because the app is rejected by the scheduler, therefore non of the pods are scheduled.\nThe common reasons caused the rejection are: 1) The taskGroups definition is invalid. The scheduler does the\nsanity check upon app submission, to ensure all the taskGroups are defined correctly, if these info are malformed,\nthe scheduler rejects the app; 2) The total min resources defined in the taskGroups is bigger than the queues' max\ncapacity, scheduler rejects the app because it won't fit into the queue's capacity. Check the pod event for relevant messages,\nand you will also be able to find more detail error messages from the schedulers' log."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Solution"),": Correct the taskGroups definition and retry submitting the app. "),(0,o.yg)("h3",{id:"2-not-all-placeholders-can-be-allocated"},"2. Not all placeholders can be allocated"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Reason"),": The placeholders also consume resources, if not all of them can be allocated, that usually means either the queue\nor the cluster has no sufficient resources for them. In this case, the placeholders will be cleaned up after a certain\namount of time, defined by the ",(0,o.yg)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")," scheduling policy parameter."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Solution"),": Note, if the placeholder timeout reaches, currently the app will transit to failed state and can not be scheduled\nanymore. You can increase the placeholder timeout value if you are willing to wait for a longer time. In the future, a fallback policy\nmight be added to provide some retry other than failing the app."),(0,o.yg)("h3",{id:"3-not-all-placeholders-are-swapped"},"3. Not all placeholders are swapped"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Reason"),": This usually means the actual app's pods are less than the minMembers defined in the taskGroups."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Solution"),": Check the ",(0,o.yg)("inlineCode",{parentName:"p"},"minMember")," in the taskGroup field and ensure it is correctly set. The ",(0,o.yg)("inlineCode",{parentName:"p"},"minMember")," can be less than\nthe actual pods, setting it to bigger than the actual number of pods is invalid."),(0,o.yg)("h3",{id:"4placeholders-are-not-cleaned-up-when-the-app-terminated"},"4.Placeholders are not cleaned up when the app terminated"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Reason"),": All the placeholders are set an ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/#owners-and-dependents"},"ownerReference"),"\nto the first real pod of the app, or the controller reference. If the placeholder could not be cleaned up, that means\nthe garbage collection is not working properly. "),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Solution"),": check the placeholder ",(0,o.yg)("inlineCode",{parentName:"p"},"ownerReference")," and the garbage collector in Kubernetes.    "),(0,o.yg)("h2",{id:"still-got-questions"},"Still got questions?"),(0,o.yg)("p",null,"No problem! The Apache YuniKorn community will be happy to help. You can reach out to the community with the following options:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Post your questions to ",(0,o.yg)("a",{parentName:"li",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")),(0,o.yg)("li",{parentName:"ol"},"Join the ",(0,o.yg)("a",{parentName:"li",href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"},"YuniKorn slack channel")," and post your questions to the ",(0,o.yg)("inlineCode",{parentName:"li"},"#yunikorn-user")," channel."),(0,o.yg)("li",{parentName:"ol"},"Join the ",(0,o.yg)("a",{parentName:"li",href:"http://yunikorn.apache.org/community/get_involved#community-meetings"},"community sync up meetings")," and directly talk to the community members.")))}u.isMDXComponent=!0}}]);