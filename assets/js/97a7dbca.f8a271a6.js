"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7746],{4274:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(5893),n=i(1151);const o={sidebar_position:4,description:"Compatibility of library with different react-native versions and architectures",keywords:["react-native-keyboard-controller","compatibility","react-native versions"]},s="Compatibility",a={id:"guides/compatibility",title:"Compatibility",description:"Compatibility of library with different react-native versions and architectures",source:"@site/versioned_docs/version-1.6.0/guides/compatibility.md",sourceDirName:"guides",slug:"/guides/compatibility",permalink:"/react-native-keyboard-controller/docs/1.6.0/guides/compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.6.0/guides/compatibility.md",tags:[],version:"1.6.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Compatibility of library with different react-native versions and architectures",keywords:["react-native-keyboard-controller","compatibility","react-native versions"]},sidebar:"tutorialSidebar",previous:{title:"Interactive Keyboard",permalink:"/react-native-keyboard-controller/docs/1.6.0/guides/interactive-keyboard"},next:{title:"Recipes",permalink:"/react-native-keyboard-controller/docs/1.6.0/category/recipes"}},c={},l=[{value:"React Native",id:"react-native",level:2},{value:"Third-party libraries compatibility",id:"third-party-libraries-compatibility",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsx)(t.h2,{id:"react-native",children:"React Native"}),"\n",(0,r.jsxs)(t.p,{children:["Starting from ",(0,r.jsx)(t.code,{children:"1.2.0"})," this library adds support for a new architecture called ",(0,r.jsx)(t.code,{children:"Fabric"}),". Since a new architecture is still in adoption stage and it changes some APIs over time - it's highly recommended to use versions which are compatible and were intensively tested against specific ",(0,r.jsx)(t.code,{children:"react-native"})," versions."]}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a table with supported versions:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"library version"}),(0,r.jsx)(t.th,{children:"react-native version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.3.0+"}),(0,r.jsx)(t.td,{children:"0.70.0+"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1.2.0+"}),(0,r.jsx)(t.td,{children:"0.69.0+"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.code,{children:"Paper"})," (old) architecture there is no any restrictions. If you found an incompatibility - don't hesitate to open an ",(0,r.jsx)(t.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/issues/new?assignees=kirillzyusko&labels=bug&template=bug_report.md&title=",children:"issue"}),". It will help the project \ud83d\ude4f"]})}),"\n",(0,r.jsx)(t.h2,{id:"third-party-libraries-compatibility",children:"Third-party libraries compatibility"}),"\n",(0,r.jsxs)(t.p,{children:["Since this library uses ",(0,r.jsx)(t.code,{children:"WindowInsetsCompat"})," API on Android it may conflict with other libraries if they are using deprecated API (if they are changing ",(0,r.jsx)(t.code,{children:"window"})," flags directly)."]}),"\n",(0,r.jsxs)(t.p,{children:["For example ",(0,r.jsx)(t.code,{children:"react-native-screens"})," ",(0,r.jsx)(t.a,{href:"https://github.com/software-mansion/react-native-screens/pull/1451",children:"were"})," using old API, so if you are using ",(0,r.jsx)(t.code,{children:"StatusBar"})," management from ",(0,r.jsx)(t.code,{children:"react-native-screens"})," you'll need to use at least ",(0,r.jsx)(t.code,{children:"3.14+"})," version. Otherwise it will ",(0,r.jsx)(t.strong,{children:"break"})," keyboard animations."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"StatusBar"})," component from ",(0,r.jsx)(t.code,{children:"react-native"})," is also using deprecated API. In order to allow better compatibility - ",(0,r.jsx)(t.code,{children:"react-native-keyboard-controller"})," ",(0,r.jsx)(t.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/pull/30",children:"monkey-patches"})," this component (hopefully soon they will change an approach and will rewrite this component to new API)."]}),"\n",(0,r.jsxs)(t.p,{children:["If you know other 3rd party libraries that may be using deprecated API, please open an ",(0,r.jsx)(t.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/issues/new?assignees=kirillzyusko&labels=bug&template=bug_report.md&title=",children:"issue"})," and we'll try to fix it."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var r=i(7294);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);