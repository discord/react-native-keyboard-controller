"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="Platforms capabilities and limitations",l={unversionedId:"recipes/platform-differences",id:"version-1.0.0/recipes/platform-differences",title:"Platforms capabilities and limitations",description:"This library relies on WindowInsetsCompat API on Android and keyboard listeners (NotificationCenter) on iOS.",source:"@site/versioned_docs/version-1.0.0/recipes/platform-differences.md",sourceDirName:"recipes",slug:"/recipes/platform-differences",permalink:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.0.0/recipes/platform-differences",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.0.0/recipes/platform-differences.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.0.0/recipes/architecture"},next:{title:"API Reference",permalink:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.0.0/category/api-reference"}},s={},d=[{value:"Android",id:"android",level:2},{value:"iOS",id:"ios",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"platforms-capabilities-and-limitations"},"Platforms capabilities and limitations"),(0,o.kt)("p",null,"This library relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"WindowInsetsCompat")," API on ",(0,o.kt)("inlineCode",{parentName:"p"},"Android")," and keyboard listeners (",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationCenter"),") on iOS."),(0,o.kt)("p",null,"Since two platforms are totally different (see below for more details) the purpose of this API is to provide a common API for both platforms, which will work in the same way on both platforms, but at the same time give an access to all power of the platform features."),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"To track each keyboard frame in Android you need to perform 3 steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enter ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/training/gestures/edge-to-edge"},"edge-to-edge")," mode (",(0,o.kt)("inlineCode",{parentName:"li"},"KeyboardControllerView")," already does it for you, and ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyboardProvider")," uses ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyboardControllerView"),", so once you've wrapped your app in ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyboardProvider")," - you've completed this step \ud83c\udf89)."),(0,o.kt)("li",{parentName:"ul"},"change ",(0,o.kt)("inlineCode",{parentName:"li"},"android:windowSoftInputMode")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"adjustResize")," (this library exposes ",(0,o.kt)("a",{parentName:"li",href:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.0.0/api/keyboard-controller"},"KeyboardController")," and you can change it in runtime - default hooks changes soft input mode on mount and restore default behavior on unmount, but you can control it as you ",(0,o.kt)("a",{parentName:"li",href:"/react-native-keyboard-controller/pr-preview/pr-365/docs/1.0.0/guides/building-own-hook"},"wish")," (change mode on focus/unfocus screen etc.)) - this is needed to deliver the best ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/develop/ui/views/layout/sw-keyboard#check-visibility"},"backward")," compatibility;"),(0,o.kt)("li",{parentName:"ul"},"setup ",(0,o.kt)("inlineCode",{parentName:"li"},"WindowInsetsAnimationCallback")," and track keyboard frames. ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyboardControllerView")," maps events from this callback and forward them in ",(0,o.kt)("inlineCode",{parentName:"li"},"onKeyboardMove")," callback on JS side (",(0,o.kt)("inlineCode",{parentName:"li"},"KeyboardProvider")," handles it and maps these events to ",(0,o.kt)("inlineCode",{parentName:"li"},"Animated")," values + stores it in ",(0,o.kt)("inlineCode",{parentName:"li"},"context"),").")),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"iOS doesn't give an API to track each keyboard frame. But it gives an information when keyboard will appear and when it appeared (i.e. the start and the end of the keyboard movement) and also it schedules layout animation."),(0,o.kt)("admonition",{title:"Non discrete values",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Unlike Android, ",(0,o.kt)("inlineCode",{parentName:"p"},"progress")," value on iOS will have only two values (",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),") - i.e. it will not have an intermediate values, like 0.07, 0.12, 0.27 etc (same is applied to ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," property - it doesn't have an intermediate values). It's not a big problem, but some interpolations (which are relying on intermediate values) may not work properly."),(0,o.kt)("p",{parentName:"admonition"},"It's a known limitation and I'm looking for a solution to overcome this problem \ud83d\udc40")))}c.isMDXComponent=!0}}]);