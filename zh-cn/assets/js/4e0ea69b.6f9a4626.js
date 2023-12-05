"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,d=s["".concat(i,".").concat(c)]||s[c]||m[c]||p;return n?r.createElement(d,l(l({ref:t},k),{},{components:n})):r.createElement(d,l({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const p={id:"system",title:"\u7cfb\u7d71"},l=void 0,o={unversionedId:"api/system",id:"version-1.4.0/api/system",title:"\u7cfb\u7d71",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.4.0/api/system.md",sourceDirName:"api",slug:"/api/system",permalink:"/zh-cn/docs/api/system",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"system",title:"\u7cfb\u7d71"},sidebar:"docs",previous:{title:"\u8c03\u5ea6\u5668",permalink:"/zh-cn/docs/api/scheduler"},next:{title:"Scheduler",permalink:"/zh-cn/docs/metrics/scheduler"}},i={},u=[{value:"pprof",id:"pprof",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",level:3},{value:"\u5806 (Heap)",id:"\u5806-heap",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-1",level:3},{value:"\u7ebf\u7a0b\u521b\u5efa",id:"\u7ebf\u7a0b\u521b\u5efa",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-2",level:3},{value:"Goroutine",id:"goroutine",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-3",level:3},{value:"\u5206\u914d (Allocations)",id:"\u5206\u914d-allocations",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-4",level:3},{value:"\u963b\u585e\u5206\u6790 (Block)",id:"\u963b\u585e\u5206\u6790-block",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-5",level:3},{value:"\u4e92\u65a5\u9501\u5206\u6790 (Mutex)",id:"\u4e92\u65a5\u9501\u5206\u6790-mutex",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-6",level:3},{value:"\u547d\u4ee4\u884c\u53c2\u6570 (Cmdline)",id:"\u547d\u4ee4\u884c\u53c2\u6570-cmdline",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-7",level:3},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-8",level:3},{value:"Symbol",id:"symbol",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-9",level:3},{value:"\u8ddf\u8e2a(Trace)",id:"\u8ddf\u8e2atrace",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-10",level:3}],k={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7aef\u70b9\u662f\u7528\u4e8e\u63d0\u4f9b\u8cc7\u8a0a\u7d66",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof"),"\u5206\u6790\u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"pprof"},"pprof"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/debug/pprof/\n\nTypes of profiles available:\nCount   Profile\n273 allocs\n0   block\n0   cmdline\n78  goroutine\n273 heap\n0   mutex\n0   profile\n29  threadcreate\n0   trace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n")),(0,a.kt)("h2",{id:"\u5806-heap"},"\u5806 (Heap)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/heap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-1"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u7ebf\u7a0b\u521b\u5efa"},"\u7ebf\u7a0b\u521b\u5efa"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/threadcreate")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-2"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"goroutine"},"Goroutine"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/goroutine")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-3"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u5206\u914d-allocations"},"\u5206\u914d (Allocations)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/allocs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-4"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u963b\u585e\u5206\u6790-block"},"\u963b\u585e\u5206\u6790 (Block)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/block")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-5"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u4e92\u65a5\u9501\u5206\u6790-mutex"},"\u4e92\u65a5\u9501\u5206\u6790 (Mutex)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/mutex")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-6"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570-cmdline"},"\u547d\u4ee4\u884c\u53c2\u6570 (Cmdline)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/cmdline")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-7"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/profile")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-8"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"symbol"},"Symbol"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/symbol")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-9"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")),(0,a.kt)("h2",{id:"\u8ddf\u8e2atrace"},"\u8ddf\u8e2a(Trace)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/trace")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94-10"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// \u6765\u81eaproto\u7684\u4e8c\u8fdb\u5236\u6570\u636e\n")))}m.isMDXComponent=!0}}]);