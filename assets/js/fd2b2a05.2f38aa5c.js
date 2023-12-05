"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96516:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const n={id:"prometheus",title:"Prometheus and Grafana"},s=void 0,l={unversionedId:"user_guide/prometheus",id:"version-1.4.0/user_guide/prometheus",title:"Prometheus and Grafana",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/user_guide/prometheus.md",sourceDirName:"user_guide",slug:"/user_guide/prometheus",permalink:"/docs/user_guide/prometheus",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"prometheus",title:"Prometheus and Grafana"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/docs/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Use Cases",permalink:"/docs/user_guide/use_cases"}},i={},u=[{value:"Run Prometheus locally",id:"run-prometheus-locally",level:2},{value:"1. Download Prometheus release",id:"1-download-prometheus-release",level:3},{value:"2. Configure prometheus.yml",id:"2-configure-prometheusyml",level:3},{value:"3. Start port-forward",id:"3-start-port-forward",level:3},{value:"4. Execute prometheus",id:"4-execute-prometheus",level:3},{value:"5. Access the Prometheus UI",id:"5-access-the-prometheus-ui",level:3},{value:"Deploy Prometheus and Grafana in a cluster.",id:"deploy-prometheus-and-grafana-in-a-cluster",level:2},{value:"1. Add Prometheus repository to helm",id:"1-add-prometheus-repository-to-helm",level:3},{value:"2. Configuring yunikorn for prometheus",id:"2-configuring-yunikorn-for-prometheus",level:3},{value:"3. Use helm to create Prometheus",id:"3-use-helm-to-create-prometheus",level:3},{value:"4. Access the Prometheus Web UI",id:"4-access-the-prometheus-web-ui",level:3},{value:"Access Grafana Dashboard",id:"access-grafana-dashboard",level:2},{value:"Download JSON files for Yunikorn Dashboard",id:"download-json-files-for-yunikorn-dashboard",level:3},{value:"Import the JSON files in the Dashboard",id:"import-the-json-files-in-the-dashboard",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"YuniKorn exposes its scheduling metrics via Prometheus. Thus, we need to set up a Prometheus server to collect these metrics."),(0,o.kt)("p",null,"We will provide two methods for building Prometheus: either running it locally or using Helm to deploy it in your cluster. Additionally, in the Helm version, we will explain how to integrate it with Grafana and provide generic Grafana Dashboards for monitoring Yunikorn's metrics and observing the changes over time."),(0,o.kt)("p",null,"If you don't know what metric can be used, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/scheduler#metrics"},"REST API"),"."),(0,o.kt)("h2",{id:"run-prometheus-locally"},"Run Prometheus locally"),(0,o.kt)("h3",{id:"1-download-prometheus-release"},"1. Download Prometheus release"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/prometheus/releases/download/v2.30.3/prometheus-2.30.3.linux-amd64.tar.gz\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,o.kt)("h3",{id:"2-configure-prometheusyml"},"2. Configure prometheus.yml"),(0,o.kt)("p",null,"Prometheus collects metrics from\xa0",(0,o.kt)("em",{parentName:"p"},"targets"),"\xa0by scraping metrics HTTP endpoints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['localhost:9080'] \n    # 9080 is internal port, need port forward or modify 9080 to service's port\n")),(0,o.kt)("h3",{id:"3-start-port-forward"},"3. Start port-forward"),(0,o.kt)("p",null,"Port forwarding for the core's web service on the standard port can be turned on via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/yunikorn-service 9080:9080 -n yunikorn\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"9080"),"is the default port for core's web service. "),(0,o.kt)("h3",{id:"4-execute-prometheus"},"4. Execute prometheus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./prometheus --config.file=prometheus.yml\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"prometheus-cmd",src:r(13583).Z,width:"2560",height:"662"})),(0,o.kt)("h3",{id:"5-access-the-prometheus-ui"},"5. Access the Prometheus UI"),(0,o.kt)("p",null,"You should be able to browse to a status page at\xa0",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/"},"localhost:9090"),". Give it a couple of seconds to collect data about itself from its own HTTP metrics endpoint."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"prometheus-web-ui",src:r(23889).Z,width:"2560",height:"1418"})),(0,o.kt)("p",null,"You can also verify that Prometheus is serving metrics by navigating to its metrics endpoint:",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/metrics"},"localhost:9090/metrics")),(0,o.kt)("h2",{id:"deploy-prometheus-and-grafana-in-a-cluster"},"Deploy Prometheus and Grafana in a cluster."),(0,o.kt)("h3",{id:"1-add-prometheus-repository-to-helm"},"1. Add Prometheus repository to helm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# add helm repo\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n")),(0,o.kt)("h3",{id:"2-configuring-yunikorn-for-prometheus"},"2. Configuring yunikorn for prometheus"),(0,o.kt)("p",null,"Get the config from repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"helm show values prometheus-community/kube-prometheus-stack > /tmp/values.yaml\n")),(0,o.kt)("p",null,"Add a new job in Prometheus to collect metrics by scraping the metrics HTTP endpoints of the targets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"vim /tmp/values.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nadditionalScrapeConfigs:\n  - job_name: "yunikorn"\n    scrape_interval: 1s\n    metrics_path: \'/ws/v1/metrics\'\n    static_configs:\n      - targets: ["yunikorn-service.yunikorn.svc.cluster.local:9080"]\n...\n')),(0,o.kt)("h3",{id:"3-use-helm-to-create-prometheus"},"3. Use helm to create Prometheus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# create k8s namespace\nkubectl create namespace prometheus\n\n# deploy chart\nhelm install prometheus prometheus-community/kube-prometheus-stack -n prometheus -f /tmp/values.yaml\n")),(0,o.kt)("h3",{id:"4-access-the-prometheus-web-ui"},"4. Access the Prometheus Web UI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl port-forward -n prometheus svc/prometheus-kube-prometheus-prometheus 9090:9090\n")),(0,o.kt)("p",null,"After running port-forward, you can enter ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090"},"localhost:9090")," to access Prometheus Web UI."),(0,o.kt)("h2",{id:"access-grafana-dashboard"},"Access Grafana Dashboard"),(0,o.kt)("p",null,"Port forwarding for the Grafana web service on the standard port can be turned on via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl port-forward -n prometheus svc/prometheus-grafana 7070:80\n")),(0,o.kt)("p",null,"After running port-forward, you can enter ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:7070"},"localhost:7070")," to access grafana, and in the login page, enter account:",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," ,password:",(0,o.kt)("inlineCode",{parentName:"p"},"prom-operator"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana-login-page",src:r(23127).Z,width:"2560",height:"1410"})),(0,o.kt)("h3",{id:"download-json-files-for-yunikorn-dashboard"},"Download JSON files for Yunikorn Dashboard"),(0,o.kt)("p",null,"A dashboard consists of multiple panels that are organized and arranged in rows. Each panel has the ability to interact with data from any Grafana data source that has been configured. For more detailed information, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards"},"Grafana Dashboards"),"."),(0,o.kt)("p",null,"We provide a sample dashboard JSON file. To access it, you can navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/deployments/grafana-dashboard")," directory in the Yunikorn-k8shim repository."),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/scheduler#metrics"},"REST API")," to build your own custom Dashboard."),(0,o.kt)("h3",{id:"import-the-json-files-in-the-dashboard"},"Import the JSON files in the Dashboard"),(0,o.kt)("p",null,"Once you access the Dashboard page, you can proceed to import the provided JSON file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import_dashboard_01",src:r(42533).Z,width:"2560",height:"1434"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"import_dashboard_02",src:r(59744).Z,width:"2560",height:"1430"})),(0,o.kt)("p",null,"Once the import is complete, you will be able to locate Yunikorn's Dashboard on the page. From there, you can regularly monitor the status of Yunikorn."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana_dashboard",src:r(27315).Z,width:"1079",height:"1376"})))}m.isMDXComponent=!0},27315:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/grafana_dashboard-0befb519dda1c73efbd3bf308106f722.png"},23127:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/grafana_login_page-a1ded769d7575fa17b6acfd61f45a6f8.png"},42533:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import_dashboard_01-8387f9f2ecc21d01579de036884e8b37.png"},59744:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import_dashboard_02-26d463a674a2604bcceaed5047fa0715.png"},13583:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-cmd-e9648bf15688017326c8d89df9640099.png"},23889:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/prometheus-web-ui-19fc9b727de2706c897400faf4095815.png"}}]);