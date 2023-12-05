"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),p=i,f=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={id:"architecture",title:"Architecture"},a=void 0,c={unversionedId:"design/architecture",id:"version-0.12.2/design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/zh-cn/docs/0.12.2/design/architecture",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"version-0.12.2/docs",previous:{title:"Development in CodeReady Containers",permalink:"/zh-cn/docs/0.12.2/developer_guide/openshift_development"},next:{title:"Scheduler Core Design",permalink:"/zh-cn/docs/0.12.2/design/scheduler_core_design"}},s={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2},{value:"Scheduler interface",id:"scheduler-interface",level:3},{value:"Scheduler core",id:"scheduler-core",level:3},{value:"Kubernetes shim",id:"kubernetes-shim",level:3}],u={toc:l},h="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache YuniKorn (Incubating) is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),(0,i.kt)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),(0,i.kt)("img",{src:r(34298).Z}),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("h3",{id:"scheduler-interface"},"Scheduler interface"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),(0,i.kt)("h3",{id:"scheduler-core"},"Scheduler core"),(0,i.kt)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/design/scheduler_core_design"},"here"),"."),(0,i.kt)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),(0,i.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/design/k8shim"},"here")))}d.isMDXComponent=!0},34298:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);