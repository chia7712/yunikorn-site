"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),N=n,f=c["".concat(p,".").concat(N)]||c[N]||m[N]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=N;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},97061:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"roadmap",title:"Roadmap"},o=void 0,l={type:"mdx",permalink:"/community/roadmap",source:"@site/src/pages/community/roadmap.md",title:"Roadmap",description:"\x3c!--",frontMatter:{id:"roadmap",title:"Roadmap"}},p=[],s={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kubernetes-version-support"},"Kubernetes version support"),(0,n.kt)("p",null,"Supported Kubernetes versions and the Kubernetes dependency will be defined and finalised during the development cycle.\nCurrent build dependency: 1.27"),(0,n.kt)("h1",{id:"next-release-development"},"Next Release Development"),(0,n.kt)("p",null,"Release Details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Version: 1.5.0"),(0,n.kt)("li",{parentName:"ul"},"Target release date: February / March 2024"),(0,n.kt)("li",{parentName:"ul"},"Release manager: undecided"),(0,n.kt)("li",{parentName:"ul"},"Development status: ",(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/issues/?filter=12348416"},"Issue tracker"))),(0,n.kt)("p",null,"Planned major features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-970"},"YUNIKORN-970")," Change queue metrics to labeled"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1544"},"YUNIKORN-1544")," User and group quota enforcement - Phase 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-2099"},"YUNIKORN-2099")," ","[Umbrella]"," K8shim simplification"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-2125"},"YUNIKORN-2115")," ","[Umbrella]"," Application tracking history - Phase 2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1362"},"YUNIKORN-1362")," filtering nodes in UI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1727"},"YUNIKORN-1727")," build info extension"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1922"},"YUNIKORN-1922")," display pending resources in web UI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-2140"},"YUNIKORN-2140")," Web UI: resource display rework"),(0,n.kt)("li",{parentName:"ul"},"[no jira yet]"," display preemption info in web UI")),(0,n.kt)("h1",{id:"future-development-long-term-goals"},"Future development: long term goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-22"},"YUNIKORN-22")," Partition support for nodes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1728"},"YUNIKORN-1728")," Percentage support for queue max app and resources"),(0,n.kt)("li",{parentName:"ul"},"Queue type change from leaf to parent and reverse"),(0,n.kt)("li",{parentName:"ul"},"moving applications from queue to queue"),(0,n.kt)("li",{parentName:"ul"},"compressed queue config (configmap 1MB limit)"),(0,n.kt)("li",{parentName:"ul"},"reproducible builds"),(0,n.kt)("li",{parentName:"ul"},"FIPS builds")))}c.isMDXComponent=!0}}]);