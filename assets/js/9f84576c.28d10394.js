"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6595],{18550:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(13274),i=s(1780);const o={id:"rn-1.3.0",title:"Release Announcement v1.3.0"},t="Release Announcement v1.3.0",a={type:"mdx",permalink:"/release-announce/1.3.0",source:"@site/src/pages/release-announce/1.3.0.md",title:"Release Announcement v1.3.0",description:"\x3c!--",frontMatter:{id:"rn-1.3.0",title:"Release Announcement v1.3.0"},unlisted:!1},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Kubernetes version support",id:"kubernetes-version-support",level:3},{value:"Preemption support",id:"preemption-support",level:3},{value:"Better support for BestEffort pods",id:"better-support-for-besteffort-pods",level:3},{value:"Lighter and more secure images",id:"lighter-and-more-secure-images",level:3},{value:"Dynamic namespace support in admission controller",id:"dynamic-namespace-support-in-admission-controller",level:3},{value:"CPU and memory optimization",id:"cpu-and-memory-optimization",level:3},{value:"Community",id:"community",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"release-announcement-v130",children:"Release Announcement v1.3.0"}),"\n",(0,r.jsx)(n.p,{children:"We are pleased to announce that the Apache YuniKorn community has voted to\nrelease 1.3.0. Apache YuniKorn is a standalone resource scheduler, designed\nfor managing and scheduling Big Data workloads on container orchestration\nframeworks like Kubernetes for on-prem and on-cloud use cases."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The Apache YuniKorn community has resolved 160\n",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/issues/?filter=12352568",children:"JIRAs"}),"\nin this release."]}),"\n",(0,r.jsx)(n.p,{children:"Release manager: Yu Teng Chen"}),"\n",(0,r.jsx)(n.p,{children:"Release date: 2023-06-12"}),"\n",(0,r.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes-version-support",children:"Kubernetes version support"}),"\n",(0,r.jsxs)(n.p,{children:["YuniKorn 1.3.0 supports running on Kubernetes clusters from version 1.21\nthrough 1.26. Support for running on Kubernetes 1.27 is ",(0,r.jsx)(n.strong,{children:"not"})," supported,\nbut is planned for YuniKorn 1.4.0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": YuniKorn 1.3.0 is the last release planned which will support\nKubernetes 1.21 through 1.23; YuniKorn 1.4.0 is expected to require Kubernetes\n1.24 or later."]}),"\n",(0,r.jsxs)(n.p,{children:["Please see ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1699",children:"YUNIKORN-1699"}),"\nfor details."]}),"\n",(0,r.jsx)(n.h3,{id:"preemption-support",children:"Preemption support"}),"\n",(0,r.jsxs)(n.p,{children:["YuniKorn now has comprehensive support for preemption, including customizable\npolicies per queue. Please see the the Preemption\n",(0,r.jsx)(n.a,{href:"https://yunikorn.apache.org/docs/next/design/preemption",children:"design documentation"}),"\nfor more details."]}),"\n",(0,r.jsxs)(n.p,{children:["JIRA: ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1461",children:"YUNIKORN-1461"})]}),"\n",(0,r.jsx)(n.h3,{id:"better-support-for-besteffort-pods",children:"Better support for BestEffort pods"}),"\n",(0,r.jsxs)(n.p,{children:["YuniKorn now tracks the number of pods scheduled as part of queue quota limits.\nThis allows limiting parallelism within a queue, but also provides better\nsupport for running Kubernetes pods with the ",(0,r.jsx)(n.code,{children:"PodQOSBestEffort"})," scheduling class\n(i.e. those with no explicit resources requested)."]}),"\n",(0,r.jsxs)(n.p,{children:["Please see ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1632",children:"YUNIKORN-1632"}),"\nfor details."]}),"\n",(0,r.jsx)(n.h3,{id:"lighter-and-more-secure-images",children:"Lighter and more secure images"}),"\n",(0,r.jsx)(n.p,{children:"YuniKorn 1.3.0 has moved to using scratch base images for all containers. This\nresults in a smaller footprint as well as improved security as YuniKorn no\nlonger ships any third-party software in our container images."}),"\n",(0,r.jsxs)(n.p,{children:["A prerequisite for using scratch images was the move from nginx to a go-based\nweb server for the web application. Please see\n",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1672",children:"YUNIKORN-1672"})," and\n",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1535",children:"YUNIKORN-1535"})," for\ndetails."]}),"\n",(0,r.jsx)(n.h3,{id:"dynamic-namespace-support-in-admission-controller",children:"Dynamic namespace support in admission controller"}),"\n",(0,r.jsx)(n.p,{children:"The YuniKorn admission controller now suports per-namespace annotations to\ncontrol YuniKorn-specific processing. Previously, only a static list of\nregular expressions (still supported) could be used to select namespaces."}),"\n",(0,r.jsxs)(n.p,{children:["Please see ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1647",children:"YUNIKORN-1647"}),"\nfor details."]}),"\n",(0,r.jsx)(n.h3,{id:"cpu-and-memory-optimization",children:"CPU and memory optimization"}),"\n",(0,r.jsx)(n.p,{children:"YuniKorn 1.3.0 contains several optimizations for CPU and memory usage, making\nthis release the lightest and fastest yet. Some examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1719",children:"YUNIKORN-1719"}),"\nImprove the performance of Application.sortRequests()"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1720",children:"YUNIKORN-1720"}),"\nImprove the performance of node.preAllocateCheck()"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1722",children:"YUNIKORN-1722"}),"\nExcessive resource clone calls in calculateNodesResourceUsage()"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1746",children:"YUNIKORN-1746"}),"\nImprove the performance of nodeInfoListerImpl.List()"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,r.jsx)(n.p,{children:"The Apache YuniKorn community is pleased to welcome new PMC member\nYu Teng Chen and committer Qi Zhu."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(79474);const i={},o=r.createContext(i);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);