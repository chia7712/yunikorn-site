"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72406],{79572:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=s(13274),n=s(1780);const c={id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},i=void 0,d={id:"performance/metrics",title:"Scheduler Metrics",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.0/performance/metrics.md",sourceDirName:"performance",slug:"/performance/metrics",permalink:"/docs/performance/metrics",draft:!1,unlisted:!1,tags:[],version:"1.5.0",frontMatter:{id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},sidebar:"docs",previous:{title:"Benchmarking Tutorial",permalink:"/docs/performance/performance_tutorial"},next:{title:"Profiling",permalink:"/docs/performance/profiling"}},l={},o=[{value:"Scheduler Metrics",id:"scheduler-metrics",level:3},{value:"Queue Metrics",id:"queue-metrics",level:3},{value:"Event Metrics",id:"event-metrics",level:3},{value:"Access Metrics",id:"access-metrics",level:2},{value:"Aggregate Metrics to Prometheus",id:"aggregate-metrics-to-prometheus",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["YuniKorn leverages ",(0,r.jsx)(t.a,{href:"https://prometheus.io/",children:"Prometheus"})," to record metrics. The metrics system keeps tracking of\nscheduler's critical execution paths, to reveal potential performance bottlenecks. Currently, there are three categories\nfor these metrics:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"scheduler: generic metrics of the scheduler, such as allocation latency, num of apps etc."}),"\n",(0,r.jsx)(t.li,{children:"queue: each queue has its own metrics sub-system, tracking queue status."}),"\n",(0,r.jsx)(t.li,{children:"event: record various changes of events in YuniKorn."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["all metrics are declared in ",(0,r.jsx)(t.code,{children:"yunikorn"})," namespace."]}),"\n",(0,r.jsx)(t.h3,{id:"scheduler-metrics",children:"Scheduler Metrics"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Metrics Name"}),(0,r.jsx)(t.th,{children:"Metrics Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"containerAllocation"}),(0,r.jsx)(t.td,{children:"Counter"}),(0,r.jsxs)(t.td,{children:["Total number of attempts to allocate containers. State of the attempt includes ",(0,r.jsx)(t.code,{children:"allocated"}),", ",(0,r.jsx)(t.code,{children:"rejected"}),", ",(0,r.jsx)(t.code,{children:"error"}),", ",(0,r.jsx)(t.code,{children:"released"}),". Increase only."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"applicationSubmission"}),(0,r.jsx)(t.td,{children:"Counter"}),(0,r.jsxs)(t.td,{children:["Total number of application submissions. State of the attempt includes ",(0,r.jsx)(t.code,{children:"accepted"})," and ",(0,r.jsx)(t.code,{children:"rejected"}),". Increase only."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"application"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsxs)(t.td,{children:["Total number of applications. State of the application includes ",(0,r.jsx)(t.code,{children:"running"}),", ",(0,r.jsx)(t.code,{children:"completed"})," and ",(0,r.jsx)(t.code,{children:"failed"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"node"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsxs)(t.td,{children:["Total number of nodes. State of the node includes ",(0,r.jsx)(t.code,{children:"active"})," and ",(0,r.jsx)(t.code,{children:"failed"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nodeResourceUsage"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total resource usage of node, by resource name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"schedulingLatency"}),(0,r.jsx)(t.td,{children:"Histogram"}),(0,r.jsx)(t.td,{children:"Latency of the main scheduling routine, in milliseconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortingLatency"}),(0,r.jsx)(t.td,{children:"Histogram"}),(0,r.jsx)(t.td,{children:"Latency of all nodes sorting, in milliseconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tryNodeLatency"}),(0,r.jsx)(t.td,{children:"Histogram"}),(0,r.jsx)(t.td,{children:"Latency of node condition checks for container allocations, such as placement constraints, in milliseconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tryPreemptionLatency"}),(0,r.jsx)(t.td,{children:"Histogram"}),(0,r.jsx)(t.td,{children:"Latency of preemption condition checks for container allocations, in milliseconds."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"queue-metrics",children:"Queue Metrics"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Metrics Name"}),(0,r.jsx)(t.th,{children:"Metrics Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"appMetrics"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsxs)(t.td,{children:["Queue application metrics. State of the application includes ",(0,r.jsx)(t.code,{children:"running"}),", ",(0,r.jsx)(t.code,{children:"accepted"}),", ",(0,r.jsx)(t.code,{children:"rejected"}),", ",(0,r.jsx)(t.code,{children:"failed"}),", ",(0,r.jsx)(t.code,{children:"completed"}),", ",(0,r.jsx)(t.code,{children:"allocated"}),", ",(0,r.jsx)(t.code,{children:"released"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ResourceMetrics"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsxs)(t.td,{children:["Queue resource metrics. State of the resource includes ",(0,r.jsx)(t.code,{children:"guaranteed"}),", ",(0,r.jsx)(t.code,{children:"max"}),", ",(0,r.jsx)(t.code,{children:"allocated"}),", ",(0,r.jsx)(t.code,{children:"pending"}),", ",(0,r.jsx)(t.code,{children:"preempting"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"event-metrics",children:"Event Metrics"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Metrics Name"}),(0,r.jsx)(t.th,{children:"Metrics Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsCreated"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events created."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsChanneled"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events channeled."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsNotChanneled"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events not channeled."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsProcessed"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events processed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsStored"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events stored."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsNotStored"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events not stored."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalEventsCollected"}),(0,r.jsx)(t.td,{children:"Gauge"}),(0,r.jsx)(t.td,{children:"Total events collected."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"access-metrics",children:"Access Metrics"}),"\n",(0,r.jsxs)(t.p,{children:["YuniKorn metrics are collected through Prometheus client library, and exposed via scheduler restful service.\nOnce started, they can be accessed via endpoint ",(0,r.jsx)(t.a,{href:"http://localhost:9080/ws/v1/metrics",children:"http://localhost:9080/ws/v1/metrics"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"aggregate-metrics-to-prometheus",children:"Aggregate Metrics to Prometheus"}),"\n",(0,r.jsx)(t.p,{children:"It's simple to setup a Prometheus server to grab YuniKorn metrics periodically. Follow these steps:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Setup Prometheus (read more from ",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/prometheus/latest/installation/",children:"Prometheus docs"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Configure Prometheus rules: a sample configuration"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080']\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"start Prometheus"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",metastring:"script",children:"docker pull prom/prometheus:latest\ndocker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"docker.for.mac.host.internal"})," instead of ",(0,r.jsx)(t.code,{children:"localhost"})," if you are running Prometheus in a local docker container\non Mac OS. Once started, open Prometheus web UI: ",(0,r.jsx)(t.a,{href:"http://localhost:9090/graph",children:"http://localhost:9090/graph"}),". You'll see all available metrics from\nYuniKorn scheduler."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1780:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var r=s(79474);const n={},c=r.createContext(n);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);