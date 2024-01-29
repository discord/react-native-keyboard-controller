"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1926],{9881:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,onEndCode:()=>m,onMoveCode:()=>c,onStartCode:()=>p,toc:()=>k});var t=o(7462),a=(o(7294),o(3905)),i=o(814);const r={},d="useKeyboardHandler",l={unversionedId:"api/hooks/use-keyboard-handler/index",id:"version-1.4.0/api/hooks/use-keyboard-handler/index",title:"useKeyboardHandler",description:"useKeyboardHandler is a hook that offers low-level but more powerful API in comparison to useKeyboardAnimation. Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation.",source:"@site/versioned_docs/version-1.4.0/api/hooks/use-keyboard-handler/index.mdx",sourceDirName:"api/hooks/use-keyboard-handler",slug:"/api/hooks/use-keyboard-handler/",permalink:"/react-native-keyboard-controller/pr-preview/pr-346/docs/1.4.0/api/hooks/use-keyboard-handler/",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.4.0/api/hooks/use-keyboard-handler/index.mdx",tags:[],version:"1.4.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-346/docs/1.4.0/api/hooks/use-keyboard-animation"},next:{title:"useReanimatedKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-346/docs/1.4.0/api/hooks/use-reanimated-keyboard-animation"}},s={},k=[{value:"Example",id:"example",level:2},{value:"Event structure",id:"event-structure",level:3},{value:"Handlers",id:"handlers",level:3},{value:"<code>onStart</code>",id:"onstart",level:4},{value:"<code>onMove</code>",id:"onmove",level:4},{value:"<code>onEnd</code>",id:"onend",level:4}],p=(0,a.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onStart: (e) => {\n      'worklet';\n      const willKeyboardAppear = e.progress === 1;\n    }\n  },\n  []\n);"),c=(0,a.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onMove: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"),m=(0,a.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onEnd: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"),u={toc:k,onStartCode:p,onMoveCode:c,onEndCode:m};function h(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usekeyboardhandler"},"useKeyboardHandler"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useKeyboardHandler")," is a hook that offers low-level but more powerful API in comparison to ",(0,a.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation"),". Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useKeyboardHandler(\n  {\n    onStart: (e) => {\n      "worklet";\n    },\n    onMove: (e) => {\n      "worklet";\n    },\n    onEnd: (e) => {\n      "worklet";\n    },\n  },\n  [],\n);\n')),(0,a.kt)("admonition",{title:"Worklet directives",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to add ",(0,a.kt)("inlineCode",{parentName:"p"},"worklet")," directive to all ",(0,a.kt)("inlineCode",{parentName:"p"},"onStart"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"onMove"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"onEnd")," handlers. Otherwise your code will throw exception."),(0,a.kt)("p",{parentName:"admonition"},"These handlers are not workletized by default, since it's not a part of ",(0,a.kt)("inlineCode",{parentName:"p"},"reanimated")," package.")),(0,a.kt)("admonition",{title:"Unlock 120 FPS on iOS",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"onMove")," handler on iOS is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"CADisplayLink")," usage - you may need to add following content in ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," if you want to have your animations running at 120 FPS on devices with ProMotion displays:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"+   <key>CADisableMinimumFrameDurationOnPhone</key>\n+   <true/>\n"))),(0,a.kt)("h3",{id:"event-structure"},"Event structure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," - height of the keyboard;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," - a value between ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," (closed) and ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," (opened) indicating relative keyboard position.")),(0,a.kt)("h3",{id:"handlers"},"Handlers"),(0,a.kt)("h4",{id:"onstart"},(0,a.kt)("inlineCode",{parentName:"h4"},"onStart")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"description-block"},"This function is called before the keyboard movement starts."," ",(0,a.kt)("code",null,"height")," and ",(0,a.kt)("code",null,"progress")," values will have"," ",(0,a.kt)("b",null,"destination"),' values, i. e. if keyboard was closed but will appear - these values will have a values like "keyboard is already opened" (',(0,a.kt)("code",null,"progress")," will be equal to ",(0,a.kt)("code",null,"1")," and"," ",(0,a.kt)("code",null,"height")," will have non-zero value).",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",{className:"desktop"},p)),(0,a.kt)("div",null,(0,a.kt)("img",{src:o(7858).Z}))),(0,a.kt)("div",{className:"mobile"},p),(0,a.kt)("h4",{id:"onmove"},(0,a.kt)("inlineCode",{parentName:"h4"},"onMove")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"description-block"},"This function will be called every frame when the keyboard changes its position.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",{className:"desktop"},c)),(0,a.kt)("div",null,(0,a.kt)("img",{src:o(2369).Z}))),(0,a.kt)("div",{className:"mobile"},c),(0,a.kt)("admonition",{title:"Not precise values",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is no corresponding events in iOS for this hook. So values will not be perfectly synchronized with the keyboard."),(0,a.kt)("p",{parentName:"admonition"},"The same is applied to Android < 11 - these OS versions don't have API for getting keyboard positions during an animation.")),(0,a.kt)("h4",{id:"onend"},(0,a.kt)("inlineCode",{parentName:"h4"},"onEnd")),(0,a.kt)("div",{className:"grid"},(0,a.kt)("div",{className:"description-block"},"This function will be called when the keyboard has completed its movement. The event will contain ",(0,a.kt)("b",null,"current")," keyboard metrics.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",{className:"desktop"},m)),(0,a.kt)("div",null,(0,a.kt)("img",{src:o(2957).Z}))),(0,a.kt)("div",{className:"mobile"},m))}h.isMDXComponent=!0},2957:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/end-51c1da133c9105d1711f5472ef02f7dc.png"},2369:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/move-67a142f62e5e7286e45c5e964d03b862.png"},7858:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/start-43926ae4afe7279da4f2fdd3d25603c6.png"}}]);