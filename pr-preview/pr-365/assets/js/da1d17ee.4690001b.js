"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?i.createElement(y,o(o({ref:t},c),{},{components:r})):i.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4,description:"Compatibility of library with different react-native versions and architectures",keywords:["react-native-keyboard-controller","compatibility","react-native versions"]},o="Compatibility",l={unversionedId:"guides/compatibility",id:"version-1.5.0/guides/compatibility",title:"Compatibility",description:"Compatibility of library with different react-native versions and architectures",source:"@site/versioned_docs/version-1.5.0/guides/compatibility.md",sourceDirName:"guides",slug:"/guides/compatibility",permalink:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.5.0/guides/compatibility",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.5.0/guides/compatibility.md",tags:[],version:"1.5.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Compatibility of library with different react-native versions and architectures",keywords:["react-native-keyboard-controller","compatibility","react-native versions"]},sidebar:"tutorialSidebar",previous:{title:"Interactive Keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.5.0/guides/interactive-keyboard"},next:{title:"Recipes",permalink:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.5.0/category/recipes"}},p={},s=[{value:"React Native",id:"react-native",level:2},{value:"Third-party libraries compatibility",id:"third-party-libraries-compatibility",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"compatibility"},"Compatibility"),(0,n.kt)("h2",{id:"react-native"},"React Native"),(0,n.kt)("p",null,"Starting from ",(0,n.kt)("inlineCode",{parentName:"p"},"1.2.0")," this library adds support for a new architecture called ",(0,n.kt)("inlineCode",{parentName:"p"},"Fabric"),". Since a new architecture is still in adoption stage and it changes some APIs over time - it's highly recommended to use versions which are compatible and were intensively tested against specific ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," versions."),(0,n.kt)("p",null,"Below you can find a table with supported versions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"library version"),(0,n.kt)("th",{parentName:"tr",align:null},"react-native version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.3.0+"),(0,n.kt)("td",{parentName:"tr",align:null},"0.70.0+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.2.0+"),(0,n.kt)("td",{parentName:"tr",align:null},"0.69.0+")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For ",(0,n.kt)("inlineCode",{parentName:"p"},"Paper")," (old) architecture there is no any restrictions. If you found an incompatibility - don't hesitate to open an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/issues/new?assignees=kirillzyusko&labels=bug&template=bug_report.md&title="},"issue"),". It will help the project \ud83d\ude4f")),(0,n.kt)("h2",{id:"third-party-libraries-compatibility"},"Third-party libraries compatibility"),(0,n.kt)("p",null,"Since this library uses ",(0,n.kt)("inlineCode",{parentName:"p"},"WindowInsetsCompat")," API on Android it may conflict with other libraries if they are using deprecated API (if they are changing ",(0,n.kt)("inlineCode",{parentName:"p"},"window")," flags directly)."),(0,n.kt)("p",null,"For example ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-screens")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-screens/pull/1451"},"were")," using old API, so if you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"StatusBar")," management from ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-screens")," you'll need to use at least ",(0,n.kt)("inlineCode",{parentName:"p"},"3.14+")," version. Otherwise it will ",(0,n.kt)("strong",{parentName:"p"},"break")," keyboard animations."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"StatusBar")," component from ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," is also using deprecated API. In order to allow better compatibility - ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/pull/30"},"monkey-patches")," this component (hopefully soon they will change an approach and will rewrite this component to new API)."),(0,n.kt)("p",null,"If you know other 3rd party libraries that may be using deprecated API, please open an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/issues/new?assignees=kirillzyusko&labels=bug&template=bug_report.md&title="},"issue")," and we'll try to fix it."))}d.isMDXComponent=!0}}]);