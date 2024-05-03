"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87683],{4586:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var i=n(13274),s=n(1780);const t={id:"core_features",title:"Features",keywords:["feature"]},a=void 0,o={id:"get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/docs/get_started/core_features",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/"},next:{title:"Version details",permalink:"/docs/get_started/version"}},c={},u=[{value:"App-aware scheduling",id:"app-aware-scheduling",level:2},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",level:2},{value:"Gang Scheduling",id:"gang-scheduling",level:2},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",level:2},{value:"Resource fairness",id:"resource-fairness",level:2},{value:"Resource Reservation",id:"resource-reservation",level:2},{value:"Preemption",id:"preemption",level:2},{value:"Throughput",id:"throughput",level:2},{value:"MaxApplication Enforcement",id:"maxapplication-enforcement",level:2},{value:"CPU Architecture support",id:"cpu-architecture-support",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"The main features of YuniKorn include:"}),"\n",(0,i.jsx)(r.h2,{id:"app-aware-scheduling",children:"App-aware scheduling"}),"\n",(0,i.jsx)(r.p,{children:"One of the key differences of YuniKorn is that it does app-aware scheduling. The default K8s scheduler simply schedules\npod by pod without any context about user, app, or queue. However, YuniKorn recognizes users, apps, and queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to use\nfine-grained controls on resource quotas, resource fairness, and priorities, which are the most important requirements\nfor a multi-tenancy computing system."}),"\n",(0,i.jsx)(r.h2,{id:"hierarchy-resource-queues",children:"Hierarchy Resource Queues"}),"\n",(0,i.jsx)(r.p,{children:"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues and helps you to gain insight into how the resources are\nused across different tenants. What's more, by leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."}),"\n",(0,i.jsx)(r.h2,{id:"gang-scheduling",children:"Gang Scheduling"}),"\n",(0,i.jsx)(r.p,{children:"An application can request a set of resources, i.e. a gang, to be scheduled all at once.\nThe gang defines all the resources the application requires to start.\nDuring the first scheduling phase all resources requested will be reserved.\nThe application will only be started when all requested resources are available."}),"\n",(0,i.jsxs)(r.p,{children:["Reservation duration and application behaviour when the reservation fails are configurable.\nIt is even possible to create multiple gangs of different specifications for one application.\nSee the ",(0,i.jsx)(r.a,{href:"/docs/design/gang_scheduling",children:"gang design"})," and the Gang Scheduling ",(0,i.jsx)(r.a,{href:"/docs/user_guide/gang_scheduling",children:"user guide"})," for more details."]}),"\n",(0,i.jsx)(r.h2,{id:"job-ordering-and-queuing",children:"Job Ordering and Queuing"}),"\n",(0,i.jsxs)(r.p,{children:["Applications can be properly queued in working-queues, the ordering policy determining which application can get resources first.\nThere are various policies such as simple ",(0,i.jsx)(r.code,{children:"FIFO"}),", ",(0,i.jsx)(r.code,{children:"Fair"}),", ",(0,i.jsx)(r.code,{children:"StateAware"}),", or ",(0,i.jsx)(r.code,{children:"Priority"})," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."]}),"\n",(0,i.jsx)(r.p,{children:"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas which\nare enforced by the quota-admission-controller. If the underlying namespace does not have enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."}),"\n",(0,i.jsx)(r.h2,{id:"resource-fairness",children:"Resource fairness"}),"\n",(0,i.jsx)(r.p,{children:"In a multi-tenant environment, a lot of users share cluster resources. To prevent tenants from competing for resources\nand potentially getting starved, more fine-grained fairness controls are needed to achieve fairness across users, as well as across teams/organizations.\nWith consideration of weights or priorities, more important applications can demand resources beyond their share.\nThis feature is often considered in relation to resource budgets, where a more fine-grained fairness mode can further improve spending efficiency."}),"\n",(0,i.jsx)(r.h2,{id:"resource-reservation",children:"Resource Reservation"}),"\n",(0,i.jsx)(r.p,{children:"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can prevent the pod from being starved by future smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods are submitted\nto the cluster, it's very likely some pods can be starved even when they are submitted much earlier."}),"\n",(0,i.jsx)(r.h2,{id:"preemption",children:"Preemption"}),"\n",(0,i.jsx)(r.p,{children:"YuniKorn's preemption feature allows higher-priority tasks to dynamically reallocate resources by preempting lower-priority ones, ensuring critical workloads get necessary resources in a multi-tenant Kubernetes environment.\nThis proactive mechanism maintains system stability and fairness, integrating with Kubernetes' priority classes and YuniKorn's hierarchical queue system."}),"\n",(0,i.jsx)(r.h2,{id:"throughput",children:"Throughput"}),"\n",(0,i.jsxs)(r.p,{children:["Throughput is a key criterion for measuring scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling and further impact service SLAs.\nWhen the cluster gets bigger, it also means there is a requirement for higher throughput. The ",(0,i.jsx)(r.a,{href:"/docs/performance/evaluate_perf_function_with_kubemark",children:"performance evaluation based on Kube-mark"}),"\nreveals some perf numbers."]}),"\n",(0,i.jsx)(r.h2,{id:"maxapplication-enforcement",children:"MaxApplication Enforcement"}),"\n",(0,i.jsxs)(r.p,{children:["The MaxApplication enforcement feature allows users to limit the number of running applications for a configured queue.\nThis feature is critical in large scale batch workloads.\nWithout this feature, when a large number of concurrent jobs are launched, they would compete for resources, and a certain amount of resources would be wasted, which could lead to job failure.\nThe ",(0,i.jsx)(r.a,{href:"/docs/user_guide/queue_config",children:"Partition and Queue Configuration"})," provides configuration examples."]}),"\n",(0,i.jsx)(r.h2,{id:"cpu-architecture-support",children:"CPU Architecture support"}),"\n",(0,i.jsx)(r.p,{children:"YuniKorn supports running on ARM as well as on AMD/Intel CPUs.\nWith the release of YuniKorn 1.1.0, prebuilt convenience images for both architectures are provided in docker hub."})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1780:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var i=n(79474);const s={},t=i.createContext(s);function a(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);