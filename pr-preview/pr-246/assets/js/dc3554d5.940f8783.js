"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={slug:"fabric",title:"Version 1.2.0 with new architecture support",authors:["kirill"],tags:["react-native","release","new architecture","fabric","turbo modules"],keywords:["react-native-keyboard-controller","react-native","fabric","new architecture","support"]},i=void 0,l={permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/fabric",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-09-22-fabric/index.md",source:"@site/blog/2022-09-22-fabric/index.md",title:"Version 1.2.0 with new architecture support",description:"I'm glad to announce, that new upcoming release 1.2.0 brings a support for new react native architecture \ud83d\ude0e",date:"2022-09-22T00:00:00.000Z",formattedDate:"September 22, 2022",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/tags/react-native"},{label:"release",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/tags/release"},{label:"new architecture",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/tags/new-architecture"},{label:"fabric",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/tags/fabric"},{label:"turbo modules",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/tags/turbo-modules"}],readingTime:.86,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"fabric",title:"Version 1.2.0 with new architecture support",authors:["kirill"],tags:["react-native","release","new architecture","fabric","turbo modules"],keywords:["react-native-keyboard-controller","react-native","fabric","new architecture","support"]},prevItem:{title:"Version 1.4.0 with new hook",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/new-hook"},nextItem:{title:"React Native meets smooth keyboard animations",permalink:"/react-native-keyboard-controller/pr-preview/pr-246/blog/welcome"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I'm glad to announce, that new upcoming release ",(0,n.kt)("inlineCode",{parentName:"p"},"1.2.0")," brings a support for new react native architecture \ud83d\ude0e"),(0,n.kt)("p",null,"Fortunately this library is backward compatible with old architecture and will be compiled conditionally depending on which architecture you are using. So don't be afraid of updating it to the latest version - it doesn't have any breaking changes!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"react native logo",src:r(495).Z,width:"1160",height:"560"})),(0,n.kt)("p",null,"The decision to add support for a new architecture (to prioritize a new architecture adoption over other features) was made in order to understand all peculiarities of the new architecture and to discover its possibilities. Hopefully such knowledge can help add new features for the library in the future."),(0,n.kt)("p",null,"Obviously, the migration process will take some time for other libraries, so future versions of this library will still support two architectures. When most other open source libraries will be migrated to the new architecture and the new architecture becomes the standard in the react native ecosystem, then support for the old architecture will be removed."),(0,n.kt)("p",null,"Stay tuned for future updates! \ud83d\ude0a"))}u.isMDXComponent=!0},495:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/react-native-53fe9c4e0ebe3c3ff285c169eaaff011.png"}}]);