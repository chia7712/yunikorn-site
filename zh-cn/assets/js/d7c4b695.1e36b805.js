"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55896],{95788:(e,t,r)=>{r.d(t,{Iu:()=>o,yg:()=>u});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},g=Object.keys(e);for(n=0;n<g.length;n++)r=g[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(n=0;n<g.length;n++)r=g[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),y=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,g=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=y(r),m=a,u=c["".concat(p,".").concat(m)]||c[m]||d[m]||g;return r?n.createElement(u,l(l({ref:t},o),{},{components:r})):n.createElement(u,l({ref:t},o))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var g=r.length,l=new Array(g);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var y=2;y<g;y++)l[y]=r[y];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>g,metadata:()=>i,toc:()=>y});var n=r(45072),a=(r(11504),r(95788));const g={id:"version",title:"\u7248\u672c\u8be6\u60c5"},l=void 0,i={unversionedId:"get_started/version",id:"get_started/version",title:"\u7248\u672c\u8be6\u60c5",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/get_started/version.md",sourceDirName:"get_started",slug:"/get_started/version",permalink:"/zh-cn/docs/next/get_started/version",draft:!1,tags:[],version:"current",frontMatter:{id:"version",title:"\u7248\u672c\u8be6\u60c5"},sidebar:"docs",previous:{title:"\u7279\u5f81",permalink:"/zh-cn/docs/next/get_started/core_features"},next:{title:"\u90e8\u7f72\u6a21\u5f0f",permalink:"/zh-cn/docs/next/user_guide/deployment_modes"}},p={},y=[],o={toc:y},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.c)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u7248\u672c"},"\u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u7248\u672c\uff1f"),(0,a.yg)("p",null,"\u5efa\u8bae\u59cb\u7ec8\u8fd0\u884c\u6700\u65b0\u7248\u672c\u7684 YuniKorn\u3002\u65b0\u7248\u672c\u5b9a\u671f\u7531 YuniKorn \u672c\u8eab\u548c/\u6216 shim \u7684\u65b0\u529f\u80fd\u9a71\u52a8\u3002\u76ee\u524d\u65b0\u529f\u80fd\u548c\u4fee\u590d\u4ec5\u5408\u5e76\u5230\u7528\u6765\u505a\u91ca\u51fa\u7684\u5f00\u53d1\u5206\u652f\u3002"),(0,a.yg)("p",null,"\u6b64\u65f6\u8be5\u9879\u76ee\u4ec5\u521b\u5efa\u6b21\u8981\u7248\u672c\uff0c\u6ca1\u6709\u8865\u4e01\u7248\u672c\u3002"),(0,a.yg)("p",null,"\u5982\u679c shim \u7248\u672c\uff08\u5373 Kubernetes\uff09\u53d7\u591a\u4e2a YuniKorn \u7248\u672c\u652f\u6301\uff0c\u6211\u4eec\u5efa\u8bae\u59cb\u7ec8\u4f7f\u7528\u6700\u65b0\u7684 YuniKorn \u7248\u672c\u3002\n\u65e9\u671f\u7248\u672c\u4e2d\u8f83\u65e7\u7684\u6784\u5efa\u4f9d\u8d56\u9879\u53ef\u80fd\u4f1a\u963b\u6b62\u60a8\u4f7f\u7528 shim \u7684\u67d0\u4e9b\u65b0\u529f\u80fd\u3002"),(0,a.yg)("h1",{id:"yunikorn-\u652f\u6301\u7684-kubernetes-\u7248\u672c"},"YuniKorn \u652f\u6301\u7684 Kubernetes \u7248\u672c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"K8s \u7248\u672c"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u53d1\u884c\u7248\u672c"),(0,a.yg)("th",{parentName:"tr",align:"center"},"\u652f\u6301\u7ed3\u675f"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.12.x (\u6216\u66f4\u65e9)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.13.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.14.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.15.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.16.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.17.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.18.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.19.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.0.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.20.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.21.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.3.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.22.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.3.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.23.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.3.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.24.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.0.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.25.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.26.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.27.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.4.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.28.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.4.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.29.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.5.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")))))}d.isMDXComponent=!0}}]);