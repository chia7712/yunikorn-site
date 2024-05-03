"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8250],{46338:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>t});var r=n(13274),c=n(1780);const o={id:"system",title:"System"},l=void 0,d={id:"api/system",title:"System",description:"\x3c!--",source:"@site/docs/api/system.md",sourceDirName:"api",slug:"/api/system",permalink:"/docs/next/api/system",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"system",title:"System"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/docs/next/api/scheduler"},next:{title:"Scheduler",permalink:"/docs/next/metrics/scheduler"}},i={},t=[{value:"pprof",id:"pprof",level:2},{value:"Success response",id:"success-response",level:3},{value:"Heap",id:"heap",level:2},{value:"Success response",id:"success-response-1",level:3},{value:"Thread create",id:"thread-create",level:2},{value:"Success response",id:"success-response-2",level:3},{value:"Goroutine",id:"goroutine",level:2},{value:"Success response",id:"success-response-3",level:3},{value:"Allocations",id:"allocations",level:2},{value:"Success response",id:"success-response-4",level:3},{value:"Block",id:"block",level:2},{value:"Success response",id:"success-response-5",level:3},{value:"Mutex",id:"mutex",level:2},{value:"Success response",id:"success-response-6",level:3},{value:"Cmdline",id:"cmdline",level:2},{value:"Success response",id:"success-response-7",level:3},{value:"Profile",id:"profile",level:2},{value:"Success response",id:"success-response-8",level:3},{value:"Symbol",id:"symbol",level:2},{value:"Success response",id:"success-response-9",level:3},{value:"Trace",id:"trace",level:2},{value:"Success response",id:"success-response-10",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["These endpoints are for the ",(0,r.jsx)(s.a,{href:"https://github.com/google/pprof",children:"pprof"})," profiling tool."]}),"\n",(0,r.jsx)(s.h2,{id:"pprof",children:"pprof"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"/debug/pprof/\n\nTypes of profiles available:\nCount\tProfile\n273\tallocs\n0\tblock\n0\tcmdline\n78\tgoroutine\n273\theap\n0\tmutex\n0\tprofile\n29\tthreadcreate\n0\ttrace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n"})}),"\n",(0,r.jsx)(s.h2,{id:"heap",children:"Heap"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/heap"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-1",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"thread-create",children:"Thread create"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/threadcreate"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-2",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"goroutine",children:"Goroutine"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/goroutine"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-3",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"allocations",children:"Allocations"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/allocs"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-4",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"block",children:"Block"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/block"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-5",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"mutex",children:"Mutex"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/mutex"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-6",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"cmdline",children:"Cmdline"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/cmdline"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-7",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"profile",children:"Profile"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/profile"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-8",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"symbol",children:"Symbol"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/symbol"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-9",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})}),"\n",(0,r.jsx)(s.h2,{id:"trace",children:"Trace"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"URL"})," : ",(0,r.jsx)(s.code,{children:"/debug/pprof/trace"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Method"})," : ",(0,r.jsx)(s.code,{children:"GET"})]}),"\n",(0,r.jsx)(s.h3,{id:"success-response-10",children:"Success response"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code"})," : ",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-proto",children:"// binary data from proto\n"})})]})}function p(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1780:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var r=n(79474);const c={},o=r.createContext(c);function l(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);