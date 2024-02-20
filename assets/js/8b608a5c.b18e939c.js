"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48866],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69770:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={id:"rn-0.12.1",title:"Release Announcement v0.12.1"},i=void 0,s={type:"mdx",permalink:"/release-announce/0.12.1",source:"@site/src/pages/release-announce/0.12.1.md",title:"Release Announcement v0.12.1",description:"\x3c!--",frontMatter:{id:"rn-0.12.1",title:"Release Announcement v0.12.1"}},l=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Supported Kubernetes Versions",id:"supported-kubernetes-versions",level:3},{value:"Node Sorting Improvements",id:"node-sorting-improvements",level:3},{value:"Gang Scheduling Enhancements",id:"gang-scheduling-enhancements",level:3},{value:"Logging &amp; Observability Improvements",id:"logging--observability-improvements",level:3},{value:"Scheduler Interface Revamp",id:"scheduler-interface-revamp",level:3},{value:"Kubernetes Dependency Upgrade",id:"kubernetes-dependency-upgrade",level:3},{value:"Latest Performance Benchmarking Results",id:"latest-performance-benchmarking-results",level:3},{value:"Community",id:"community",level:2}],u={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"release-announcement-v0121"},"Release Announcement v0.12.1"),(0,o.yg)("p",null,"We are pleased to announce that the Apache YuniKorn (Incubating) community has voted to release 0.12.1. Apache YuniKorn (Incubating) is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on container orchestration frameworks like Kubernetes for on-prem and on-cloud use cases."),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"The Apache YuniKorn (Incubating) community has fixed 150 ",(0,o.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12351063"},"JIRAs")," in this release. Note that we decided to skip the 0.12.0 release and go directly to 0.12.1 due to a technical issue with the Go Modules system, where a marked tag cannot be updated to point to a later commit after the fact."),(0,o.yg)("p",null,"Release manager: Chaoran Yu"),(0,o.yg)("p",null,"Release date: 2021-12-26"),(0,o.yg)("h2",{id:"highlights"},"Highlights"),(0,o.yg)("h3",{id:"supported-kubernetes-versions"},"Supported Kubernetes Versions"),(0,o.yg)("p",null,"In this release, the supported Kubernetes versions have been updated to 1.19.x, 1.20.x and 1.21.x. (The last release supported 1.17.x, 1.18.x and 1.19.x.). The YuniKorn support matrix primarily supports 3 major Kubernetes versions."),(0,o.yg)("h3",{id:"node-sorting-improvements"},"Node Sorting Improvements"),(0,o.yg)("p",null,"YuniKorn used to sort all nodes on demand for the scheduling of each container, which results in a slow performance when the number of nodes increases. Using an optimized data structure (B-tree), this release achieved a considerable improvement to the node sorting performance. "),(0,o.yg)("h3",{id:"gang-scheduling-enhancements"},"Gang Scheduling Enhancements"),(0,o.yg)("p",null,"Improved test coverage. Added support for node affinity. Fixed a critical bug when handling placeholders during the removal of a node."),(0,o.yg)("h3",{id:"logging--observability-improvements"},"Logging & Observability Improvements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Enhanced logging in various components by adding logs, adjusting the severity level of existing logs and removing unneeded logs."),(0,o.yg)("li",{parentName:"ul"},"Added support for getting a full state dump of the scheduler periodically or on demand through a REST endpoint to facilitate troubleshooting."),(0,o.yg)("li",{parentName:"ul"},"Improved the health check of the scheduler to report issues with problematic allocations.")),(0,o.yg)("h3",{id:"scheduler-interface-revamp"},"Scheduler Interface Revamp"),(0,o.yg)("p",null,"Simplified the scheduler interface that the core and shim use to talk to each other. A bulky message is broken down so that each message contains a smaller payload and is only for a specific purpose. Most messages are now made bi-directional between the core and the shim."),(0,o.yg)("h3",{id:"kubernetes-dependency-upgrade"},"Kubernetes Dependency Upgrade"),(0,o.yg)("p",null,"The version of Kubernetes that the K8shim depends on has been upgraded from 1.16 to 1.20. This paves the way for supporting future versions of Kubernetes. As a result of this work, the predicate logic has been rewritten using the Scheduling Framework."),(0,o.yg)("h3",{id:"latest-performance-benchmarking-results"},"Latest Performance Benchmarking Results"),(0,o.yg)("p",null,"We are excited to publish the performance evaluation results of the latest code base using Kubemark. YuniKorn achieved up to 4x throughput improvement over the default scheduler."),(0,o.yg)("h2",{id:"community"},"Community"),(0,o.yg)("p",null,"The Apache YuniKorn community is pleased to welcome new committers Craig Condit, Chenya Zhang, Chaoran Yu and Chia-Ping Tsai, as well as new mentors Luciano Resende and Wei-Chiu Chuang. We would love to see more committers joining the community and help to shape the project. In the past few months, we continue to have bi-weekly community meetings in 2 different time zones, ad-hoc meetings, offline channel discussions. The community will continue to be open."))}d.isMDXComponent=!0}}]);