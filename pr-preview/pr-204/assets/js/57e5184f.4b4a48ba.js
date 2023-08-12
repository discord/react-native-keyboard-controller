"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7051:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){let{style:t,src:r}=e;return a.createElement("dotlottie-player",{autoplay:!0,loop:!0,mode:"normal",src:r,style:t})}r(412).Z.canUseDOM&&r(4410)},7068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(7051);const i={slug:"welcome",title:"React Native meets smooth keyboard animations",authors:["kirill"],tags:["react-native","keyboard","animation"],keywords:["react-native-keyboard-controller","react-native","keyboard","animation"]},l=void 0,c={permalink:"/react-native-keyboard-controller/pr-preview/pr-204/blog/welcome",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-06-22-welcome/index.mdx",source:"@site/blog/2022-06-22-welcome/index.mdx",title:"React Native meets smooth keyboard animations",description:"Many flagship applications that are written natively (such as Telegram, Instagram, etc.) use the full power of platform-specific native APIs (iOS, Android) to make transitions between opening/closing the keyboard animated and smooth.",date:"2022-06-22T00:00:00.000Z",formattedDate:"June 22, 2022",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-204/blog/tags/react-native"},{label:"keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-204/blog/tags/keyboard"},{label:"animation",permalink:"/react-native-keyboard-controller/pr-preview/pr-204/blog/tags/animation"}],readingTime:1.165,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"welcome",title:"React Native meets smooth keyboard animations",authors:["kirill"],tags:["react-native","keyboard","animation"],keywords:["react-native-keyboard-controller","react-native","keyboard","animation"]},prevItem:{title:"Version 1.2.0 with new architecture support",permalink:"/react-native-keyboard-controller/pr-preview/pr-204/blog/fabric"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Many flagship applications that are written natively (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"Telegram"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Instagram"),", etc.) use the full power of platform-specific native APIs (",(0,n.kt)("inlineCode",{parentName:"p"},"iOS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Android"),") to make transitions between opening/closing the keyboard animated and smooth."),(0,n.kt)("p",null,"Unfortunately, in ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," this aspect was given little attention and all ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native")," applications were suffering because of that - animations were rough, you couldn't write cross-platform code because some keyboard events were not available, etc. But with the advent of this library, everything changes... \ud83d\ude0e"),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",marginBottom:20}},(0,n.kt)(o.Z,{src:"img/transform.lottie",style:{width:400,height:400},mdxType:"Lottie"})))}u.isMDXComponent=!0}}]);