"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7545],{56382:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(13274),t=n(1780);const o={id:"acls",title:"ACLs"},r=void 0,c={id:"user_guide/acls",title:"ACLs",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/user_guide/acls.md",sourceDirName:"user_guide",slug:"/user_guide/acls",permalink:"/docs/0.11.0/user_guide/acls",draft:!1,unlisted:!1,tags:[],version:"0.11.0",frontMatter:{id:"acls",title:"ACLs"},sidebar:"docs",previous:{title:"Sorting Policies",permalink:"/docs/0.11.0/user_guide/sorting_policies"},next:{title:"Resource Quota Management",permalink:"/docs/0.11.0/user_guide/resource_quota_management"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example config",id:"example-config",level:2},{value:"Simple examples",id:"simple-examples",level:3},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",level:3},{value:"Access check",id:"access-check",level:2},{value:"User and Group information",id:"user-and-group-information",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["User information is passed to the core scheduler from the kubernetes shim using the methodology defined ",(0,i.jsx)(s.a,{href:"usergroup_resolution",children:"here"})]})}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.p,{children:"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."}),"\n",(0,i.jsx)(s.p,{children:"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."}),"\n",(0,i.jsxs)(s.p,{children:["If there is no access control list is configured access is ",(0,i.jsx)(s.em,{children:"denied"})," by default."]}),"\n",(0,i.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(s.p,{children:"The access control list is defined as:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n"})}),"\n",(0,i.jsx)(s.p,{children:"This definition specifies a wildcard of * which results in access for everyone."}),"\n",(0,i.jsx)(s.p,{children:"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"an empty access control list. (implicit)"}),"\n",(0,i.jsx)(s.li,{children:"a single space. (explicit)"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"example-config",children:"Example config"}),"\n",(0,i.jsx)(s.h3,{id:"simple-examples",children:"Simple examples"}),"\n",(0,i.jsxs)(s.p,{children:["An ACL that allows access to just the user ",(0,i.jsx)(s.code,{children:"sue"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"  adminacl: sue\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Nobody else will get access, this is just for ",(0,i.jsx)(s.code,{children:"sue"}),".\n",(0,i.jsx)(s.code,{children:"john"})," and ",(0,i.jsx)(s.code,{children:"bob"})," will be denied access."]}),"\n",(0,i.jsxs)(s.p,{children:["An ACL that allows access to the user ",(0,i.jsx)(s.code,{children:"sue"})," and the members of the group ",(0,i.jsx)(s.code,{children:"dev"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"  adminacl: sue dev\n"})}),"\n",(0,i.jsxs)(s.p,{children:["The user ",(0,i.jsx)(s.code,{children:"sue"})," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",(0,i.jsx)(s.code,{children:"dev"}),". Her group membership is irrelevant."]}),"\n",(0,i.jsxs)(s.p,{children:["The user named ",(0,i.jsx)(s.code,{children:"john"})," whom is a member of the group ",(0,i.jsx)(s.code,{children:"dev"})," will be allowed access based on his group membership.\nA third user called ",(0,i.jsx)(s.code,{children:"bob"})," whom is not mentioned explicitly and is not a member of the ",(0,i.jsx)(s.code,{children:"dev"})," group will be denied access."]}),"\n",(0,i.jsxs)(s.p,{children:["An ACL that allows access to the members of the groups ",(0,i.jsx)(s.code,{children:"dev"})," and ",(0,i.jsx)(s.code,{children:"test"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:'  adminacl: " dev,test"\n'})}),"\n",(0,i.jsxs)(s.p,{children:["The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",(0,i.jsx)(s.code,{children:"dev"})," or ",(0,i.jsx)(s.code,{children:"test"})," group."]}),"\n",(0,i.jsxs)(s.p,{children:["Looking at the same three users as before:\nThe user ",(0,i.jsx)(s.code,{children:"sue"})," is not a member of either group and is denied access.\nThe user named ",(0,i.jsx)(s.code,{children:"john"})," whom is a member of the group ",(0,i.jsx)(s.code,{children:"dev"})," will be allowed access based on his group membership.\n",(0,i.jsx)(s.code,{children:"bob"})," is not a member of the ",(0,i.jsx)(s.code,{children:"dev"})," group but is a member of ",(0,i.jsx)(s.code,{children:"test"})," and will be allowed access."]}),"\n",(0,i.jsx)(s.h3,{id:"escaping-and-quotation-marks",children:"Escaping and quotation marks"}),"\n",(0,i.jsx)(s.p,{children:"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."}),"\n",(0,i.jsx)(s.p,{children:"The following points need to be taken into account:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"The wildcard entry must be quoted in the yaml config."}),"\n",(0,i.jsx)(s.li,{children:"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."}),"\n",(0,i.jsx)(s.li,{children:"An ACL without a user list and just one or more groups must be quoted to find the starting space:"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Correctly quoted ACL example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n'})}),"\n",(0,i.jsx)(s.h2,{id:"access-check",children:"Access check"}),"\n",(0,i.jsx)(s.p,{children:"The access check follows the pattern:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"check if the ACL is the wildcard"}),"\n",(0,i.jsx)(s.li,{children:"check if the user is in the user list"}),"\n",(0,i.jsx)(s.li,{children:"check if any of the groups the user is a member of is part of the group list"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."}),"\n",(0,i.jsx)(s.h2,{id:"user-and-group-information",children:"User and Group information"}),"\n",(0,i.jsxs)(s.p,{children:["For User & Group resolution, please follow instructions defined ",(0,i.jsx)(s.a,{href:"usergroup_resolution",children:"here"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1780:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(79474);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);