"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93637],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),y=r,m=u["".concat(p,".").concat(y)]||u[y]||g[y]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},42737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(58168),r=(t(96540),t(15680));const i={id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},o=void 0,l={unversionedId:"user_guide/labels_and_annotations_in_yunikorn",id:"user_guide/labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn",description:"\x3c!--",source:"@site/docs/user_guide/labels_and_annotations_in_yunikorn.md",sourceDirName:"user_guide",slug:"/user_guide/labels_and_annotations_in_yunikorn",permalink:"/docs/next/user_guide/labels_and_annotations_in_yunikorn",draft:!1,tags:[],version:"current",frontMatter:{id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},sidebar:"docs",previous:{title:"Gang Scheduling",permalink:"/docs/next/user_guide/gang_scheduling"},next:{title:"Prometheus and Grafana",permalink:"/docs/next/user_guide/prometheus"}},p={},d=[{value:"Labels and Annotations in YuniKorn",id:"labels-and-annotations-in-yunikorn",level:2},{value:"Labels in YuniKorn",id:"labels-in-yunikorn",level:3},{value:"Annotations in YuniKorn",id:"annotations-in-yunikorn",level:3}],s={toc:d},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"labels-and-annotations-in-yunikorn"},"Labels and Annotations in YuniKorn"),(0,r.yg)("p",null,"YuniKorn utilizes several Kubernetes labels and annotations to support various features:"),(0,r.yg)("h3",{id:"labels-in-yunikorn"},"Labels in YuniKorn"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")),(0,r.yg)("td",{parentName:"tr",align:null},"Associates this pod with an application.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"queue")),(0,r.yg)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in. This may be ignored if a placement policy is in effect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"spark-app-selector")),(0,r.yg)("td",{parentName:"tr",align:null},"Alternative method of specifying ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")," used by Spark Operator if the label ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")," and annotation ",(0,r.yg)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," unset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disableStateAware")),(0,r.yg)("td",{parentName:"tr",align:null},"If present, disables the YuniKorn state-aware scheduling policy for this pod. Set internally by the YuniKorn admission controller.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"placeholder")),(0,r.yg)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")))),(0,r.yg)("h3",{id:"annotations-in-yunikorn"},"Annotations in YuniKorn"),(0,r.yg)("p",null,"All annotations are under the namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org"),". For example ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/app-id"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"app-id")),(0,r.yg)("td",{parentName:"tr",align:null},"Assoiates this pod with an application.",(0,r.yg)("br",null),"The priority of applicationID is determined by: annotation ",(0,r.yg)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," > label ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")," > label ",(0,r.yg)("inlineCode",{parentName:"td"},"spark-app-selector"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"queue")),(0,r.yg)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in.",(0,r.yg)("br",null),"The priority of queue is determined by: label ",(0,r.yg)("inlineCode",{parentName:"td"},"queue")," > annotation ",(0,r.yg)("inlineCode",{parentName:"td"},"yunikorn.apache.org/queue")," > default.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"task-group-name")),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the task group name this pod belongs to for the purposes of gang scheduling. It must be listed within ",(0,r.yg)("inlineCode",{parentName:"td"},"task-groups"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"task-groups")),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the set of task groups for this application for gang scheduling. Each pod within an application must define all task groups.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"schedulingPolicyParameters")),(0,r.yg)("td",{parentName:"tr",align:null},"Arbitrary key-value pairs used to customize scheduling policies such as gang scheduling.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"placeholder")),(0,r.yg)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"allow-preemption")),(0,r.yg)("td",{parentName:"tr",align:null},"The ",(0,r.yg)("inlineCode",{parentName:"td"},"allow-preemption")," annotation can be set on the Pod or PriorityClass object. The annotation in Pod takes priority over PriorityClass. It will trigger opt out of preemption for pods. Further details can be found in the ",(0,r.yg)("a",{parentName:"td",href:"./../design/simple_preemptor"},"DaemonSet Scheduling using Simple Preemptor")," documentation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"parentqueue")),(0,r.yg)("td",{parentName:"tr",align:null},"Define a parent queue for a set of K8s namespaces. Further details can be found in the ",(0,r.yg)("a",{parentName:"td",href:"resource_quota_management#parent-queue-mapping-for-namespaces"}," Resource Quota Management")," documentation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"namespace.quota")),(0,r.yg)("td",{parentName:"tr",align:null},"Set the maximum capacity of the queue mapped to this namespace. Further details can be found in the ",(0,r.yg)("a",{parentName:"td",href:"resource_quota_management#namespace-quota"}," Resource Quota Management")," documentation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[DEPRECATED]"," ",(0,r.yg)("inlineCode",{parentName:"td"},"namespace.max.cpu")),(0,r.yg)("td",{parentName:"tr",align:null},"Replaced with ",(0,r.yg)("inlineCode",{parentName:"td"},"namespace.quota")," since version 1.2.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[DEPRECATED]"," ",(0,r.yg)("inlineCode",{parentName:"td"},"namespace.max.memory")),(0,r.yg)("td",{parentName:"tr",align:null},"Replaced with ",(0,r.yg)("inlineCode",{parentName:"td"},"namespace.quota")," since version 1.2.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"namespace.enableYuniKorn")),(0,r.yg)("td",{parentName:"tr",align:null},"Controls which namespaces will have pods forwarded to Yunikorn for scheduling. Further details can be found in the ",(0,r.yg)("a",{parentName:"td",href:"service_config#admission-controller-filtering-settings"},"Service Configuration #admission-controller-filtering-settings"),"documentation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"namespace.generateAppId")),(0,r.yg)("td",{parentName:"tr",align:null},"Controls which namespaces will have pods labeled with an ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId"),". Further details can be found in the ",(0,r.yg)("a",{parentName:"td",href:"service_config#admission-controller-filtering-settings"},"Service Configuration #admission-controller-filtering-settings")," documentation.")))),(0,r.yg)("p",null,"For more details surrounding gang-scheduling labels and annotations, please refer to the documentation on ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/user_guide/gang_scheduling"},"gang scheduling"),"."))}g.isMDXComponent=!0}}]);