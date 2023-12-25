"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,h=u["".concat(s,".").concat(b)]||u[b]||c[b]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={slug:"set-enabled",title:"New setEnabled method",authors:["kirill"],tags:["react-native","keyboard","setEnabled"],keywords:["react-native-keyboard-controller","keyboard","setEnabled"]},i=void 0,l={permalink:"/react-native-keyboard-controller/pr-preview/pr-310/blog/set-enabled",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-09-28-set-enabled/index.md",source:"@site/blog/2023-09-28-set-enabled/index.md",title:"New setEnabled method",description:"I'm thrilled to announce the release of react-native-keyboard-controller version 1.8.0. With this latest release, I introduce the useKeyboardController hook and setEnabled method, which allows for a gradual integration of the library into your project, enabling you to disable the module on specific screens as needed. This flexible feature ensures that your app's keyboard behavior remains seamless and user-friendly.",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-310/blog/tags/react-native"},{label:"keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-310/blog/tags/keyboard"},{label:"setEnabled",permalink:"/react-native-keyboard-controller/pr-preview/pr-310/blog/tags/set-enabled"}],readingTime:2.27,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"set-enabled",title:"New setEnabled method",authors:["kirill"],tags:["react-native","keyboard","setEnabled"],keywords:["react-native-keyboard-controller","keyboard","setEnabled"]},prevItem:{title:"New release, new features, achieved milestones",permalink:"/react-native-keyboard-controller/pr-preview/pr-310/blog/new-features-achieved-milestones"},nextItem:{title:"Introducing KeyboardAvoidingView - Elevating Your React Native UI Experience",permalink:"/react-native-keyboard-controller/pr-preview/pr-310/blog/components"}},s={authorsImageUrls:[void 0]},d=[{value:"What&#39;s New in Version 1.8.0: The <code>setEnabled</code> Hook",id:"whats-new-in-version-180-the-setenabled-hook",level:2},{value:"How to Use <code>setEnabled</code>",id:"how-to-use-setenabled",level:3},{value:"Use Cases for <code>setEnabled</code>",id:"use-cases-for-setenabled",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I'm thrilled to announce the release of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.8.0"),". With this latest release, I introduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"useKeyboardController")," hook and ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method, which allows for a gradual integration of the library into your project, enabling you to disable the module on specific screens as needed. This flexible feature ensures that your app's keyboard behavior remains seamless and user-friendly."),(0,a.kt)("h2",{id:"whats-new-in-version-180-the-setenabled-hook"},"What's New in Version 1.8.0: The ",(0,a.kt)("inlineCode",{parentName:"h2"},"setEnabled")," Hook"),(0,a.kt)("p",null,"The star feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.8.0")," is the introduction of the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method. This method provides developers with granular control over when and where the library's keyboard management should be active."),(0,a.kt)("h3",{id:"how-to-use-setenabled"},"How to Use ",(0,a.kt)("inlineCode",{parentName:"h3"},"setEnabled")),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method is incredibly straightforward. Here's a quick example of how to integrate it into your React Native project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useKeyboardController } from 'react-native-keyboard-controller';\n\nconst { enabled, setEnabled } = useKeyboardController();\n\n// if you want to know whether is module active at the moment\nconsole.log(enabled);\n\n// disable keyboard controller on a specific screen\nsetEnabled(false);\n")),(0,a.kt)("p",null,"In this example, we're importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"useKeyboardController")," hook from the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," library. This hook returns ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method (which you can use to disable keyboard management for a specific screen) and ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," variable (indicating whether the module is active now or not)."),(0,a.kt)("p",null,"When you disable the module using ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled(false)"),", the screen will fallback to the default ",(0,a.kt)("inlineCode",{parentName:"p"},"Android")," behavior, automatically resizing based on ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest")," preferences (",(0,a.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode"),"). This level of control allows you to tailor the keyboard experience to your app's unique needs on a per-screen basis."),(0,a.kt)("h3",{id:"use-cases-for-setenabled"},"Use Cases for ",(0,a.kt)("inlineCode",{parentName:"h3"},"setEnabled")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method is incredibly versatile and can be employed in various scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Forms"),": Disable keyboard management on screens with simple forms that don't require custom keyboard management.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Chat Interfaces"),": Keep keyboard management enabled for chat screens, ensuring smooth and consistent user experiences during messaging interactions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Gradual Integration"),": Tailor keyboard functionality on specific pages where you require precise control over how the keyboard behaves, while leaving other screens unaffected by these adjustments."))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," continues to evolve, making it an essential tool for React Native developers who want to provide exceptional user experiences in their mobile apps."),(0,a.kt)("p",null,"With the introduction of the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method in version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.8.0"),", you now have even more control over keyboard behavior, ensuring that your app feels polished and responsive \ud83d\ude0e"),(0,a.kt)("p",null,"To get started with the latest version, check out the ",(0,a.kt)("a",{parentName:"p",href:"../"},"official documentation")," and explore the new possibilities that the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEnabled")," method offers."),(0,a.kt)("p",null,"Upgrade your React Native project today and take your keyboard management to the next level with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.8.0"),"!"),(0,a.kt)("p",null,"Stay tuned for future updates and releases as I continue to enhance the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," library. Follow me on ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ziusko"},"Twitter")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko"},"GitHub")," for updates. Thank you for your support! \ud83d\ude0a"))}c.isMDXComponent=!0}}]);