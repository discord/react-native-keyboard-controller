"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4080],{1885:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"components","metadata":{"permalink":"/react-native-keyboard-controller/blog/components","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-09-08-components/index.mdx","source":"@site/blog/2023-09-08-components/index.mdx","title":"Introducing KeyboardAvoidingView - Elevating Your React Native UI Experience","description":"I\'m glad to announce the upcoming release of react-native-keyboard-controller, a library designed to enhance your React Native app\'s user experience. This release marks a significant milestone as I introduce a powerful new feature: the KeyboardAvoidingView. But that\'s not all \u2013 I have exciting plans to expand the collection of pre-built components to simplify handling keyboard insets even further.","date":"2023-09-08T00:00:00.000Z","formattedDate":"September 8, 2023","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/blog/tags/react-native"},{"label":"keyboard","permalink":"/react-native-keyboard-controller/blog/tags/keyboard"},{"label":"avoiding view","permalink":"/react-native-keyboard-controller/blog/tags/avoiding-view"}],"readingTime":3.215,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"components","title":"Introducing KeyboardAvoidingView - Elevating Your React Native UI Experience","authors":["kirill"],"tags":["react-native","keyboard","avoiding view"],"keywords":["react-native-keyboard-controller","keyboard","keyboard avoiding view","avoiding view","KeyboardAvoidingView"]},"nextItem":{"title":"Enhanced events metadata - say goodbye to guesswork and hello to precision!","permalink":"/react-native-keyboard-controller/blog/enhanced-metadata"}},"content":"I\'m glad to announce the upcoming release of `react-native-keyboard-controller`, a library designed to enhance your React Native app\'s user experience. This release marks a significant milestone as I introduce a powerful new feature: the `KeyboardAvoidingView`. But that\'s not all \u2013 I have exciting plans to expand the collection of pre-built components to simplify handling keyboard insets even further.\\n\\nimport KeyboardAvoidingViewComparison from \'../../src/components/KeyboardAvoidingViewComparison\';\\n\\n<KeyboardAvoidingViewComparison />\\n\\n\x3c!-- truncate --\x3e\\n\\n## A Better Way to Handle Keyboard Insets\\n\\nOne of the common challenges React Native developers face is handling the keyboard\'s appearance and disappearance gracefully. It\'s especially important when you want your app to look and feel polished on both `iOS` and `Android` devices. While the built-in `KeyboardAvoidingView` component in React Native works well for `iOS`, it doesn\'t provide the same level of smoothness and consistency on `Android`.\\n\\nI have been hard at work, and in this upcoming release, I\'m thrilled to unveil the enhanced `KeyboardAvoidingView`. With this component, you can achieve a seamless keyboard animation experience across both major platforms \u2013 `iOS` and `Android`.\\n\\n## Features of `KeyboardAvoidingView`\\n\\n### Platform-agnostic Animation\\n\\nWith the new `KeyboardAvoidingView`, you can say goodbye to platform-specific workarounds. This component is designed to work harmoniously on both `iOS` and `Android`, ensuring a consistent user experience throughout your app.\\n\\n### Smoother Animations\\n\\nThe enhanced `KeyboardAvoidingView` offers smoother and more natural animations when the keyboard appears or disappears. This means your UI elements will gracefully adjust to accommodate the keyboard, preventing awkward overlaps and ensuring your users can interact with your app seamlessly.\\n\\n### Backward Compatible and Seamless Integration\\n\\nI understand the importance of maintaining compatibility with existing codebases and providing a smooth transition for React Native developers. With enhanced `KeyboardAvoidingView`, I\'ve put compatibility at the forefront of design principles.\\n\\nThe `KeyboardAvoidingView` is crafted to seamlessly integrate with your existing React Native projects. It\'s a **drop-in** replacement for the default React Native `KeyboardAvoidingView` component. This means that you can start using an enhanced version without the need for extensive code modifications or rewrites.\\n\\nWhether you\'re working on a brand-new project or updating an existing app, making the switch to re-implemented `KeyboardAvoidingView` is as simple as updating your import statements. Your existing codebase remains intact, and the benefits of smoother animations and cross-platform compatibility come without the hassle \ud83d\ude0e\\n\\n### Customizable\\n\\nI believe that the best tools are those that adapt to your unique project requirements. That\'s why I\'m excited to introduce a dedicated avenue for customization. If you find that the default behavior of `KeyboardAvoidingView` doesn\'t precisely align with your app\'s needs, I encourage you to explore the possibilities of customization \ud83e\udd13\\n\\n#### Share Your Ideas and Report Bugs \ud83d\udca1\\n\\nYour feedback is invaluable to me. If you have ideas for new features, improvements, or you encounter any issues while using `KeyboardAvoidingView`, I invite you to get involved. Feel free to submit your suggestions, feature requests, or bug reports through my [GitHub](https://github.com/kirillzyusko/react-native-keyboard-controller) repository.\\n\\nThe community is built on collaboration, and together, I believe we can make this library even better. By actively participating and sharing your insights, you contribute to the growth and enhancement of `react-native-keyboard-controller` and `KeyboardAvoidingView` in a particular.\\n\\n## What\'s Coming Next\\n\\nWhile I\'m excited to introduce the `KeyboardAvoidingView` in this release, my commitment to making your React Native development experience smoother doesn\'t stop here. I have big plans to expand the library with more pre-built components designed to simplify complex tasks related to keyboard handling.\\n\\nIn the pipeline, you can look forward to components like `KeyboardAwareScrollView` for effortlessly managing scroll views, `StickyFooter` for keeping crucial UI elements in view, and much more. My goal is to provide you with a comprehensive toolkit for creating exceptional user interfaces in React Native.\\n\\nStay tuned for future updates and releases as I continue to enhance the `react-native-keyboard-controller` library. Follow me on [Twitter](https://twitter.com/ziusko) and [GitHub](https://github.com/kirillzyusko) for updates. Thank you for your support! \ud83d\ude0a"},{"id":"enhanced-metadata","metadata":{"permalink":"/react-native-keyboard-controller/blog/enhanced-metadata","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-08-25-enhanced-metadata/index.mdx","source":"@site/blog/2023-08-25-enhanced-metadata/index.mdx","title":"Enhanced events metadata - say goodbye to guesswork and hello to precision!","description":"I\'m thrilled to unveil the latest upgrade to the react-native-keyboard-controller library - version 1.6.0! This release is all about empowering developers like you with enhanced event metadata, providing you with advanced techniques to take your keyboard handling to the next level.","date":"2023-08-25T00:00:00.000Z","formattedDate":"August 25, 2023","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/blog/tags/react-native"},{"label":"keyboard","permalink":"/react-native-keyboard-controller/blog/tags/keyboard"},{"label":"focused text input","permalink":"/react-native-keyboard-controller/blog/tags/focused-text-input"},{"label":"duration","permalink":"/react-native-keyboard-controller/blog/tags/duration"}],"readingTime":2.14,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"enhanced-metadata","title":"Enhanced events metadata - say goodbye to guesswork and hello to precision!","authors":["kirill"],"tags":["react-native","keyboard","focused text input","duration"],"keywords":["react-native-keyboard-controller","keyboard","duration","focused text input","focused textinput"]},"prevItem":{"title":"Introducing KeyboardAvoidingView - Elevating Your React Native UI Experience","permalink":"/react-native-keyboard-controller/blog/components"},"nextItem":{"title":"Interactive keyboard support","permalink":"/react-native-keyboard-controller/blog/interactive-keyboard"}},"content":"I\'m thrilled to unveil the latest upgrade to the `react-native-keyboard-controller` library - version `1.6.0`! This release is all about empowering developers like you with enhanced event metadata, providing you with advanced techniques to take your keyboard handling to the next level.\\n\\nimport Lottie from \'lottie-react\';\\nimport lottie from \'../../src/components/HomepageFeatures/text-inputs.lottie.json\';\\n\\n<div style={{ display: \'flex\', justifyContent: \'center\', marginBottom: 20 }}>\\n<Lottie animationData={lottie} style={{ width: 400, height: 400 }} loop />\\n</div>\\n\\n**Say goodbye to guesswork and hello to precision!** React Native Keyboard Controller `1.6.0` introduces a trio of new fields in the event metadata that will revolutionize the way you manage keyboard interactions in your React Native applications \ud83d\ude0e\\n\\n\x3c!--truncate--\x3e\\n\\n## Key features\\n\\nBelow you can find a list of key features added in this release \ud83d\ude0a\\n\\n### Timestamp: Sync your animations seamlessly\\n\\nThe addition of the `timestamp` field in the event metadata marks a breakthrough in keyboard handling. Now, you can precisely calculate the delay between an event occurring in the native thread and its propagation to JavaScript. This level of accuracy enables you to orchestrate keyboard handling with finesse, ensuring a seamless and visually pleasing user experience.\\n\\n### Target: Layout mastery at your fingertips\\n\\nUnlock the potential of enhanced layout handling with the `target` field in event metadata. By accessing the view tag of the focused field, you can synchronously retrieve layout information. This newfound capability empowers you to make real-time adjustments to your UI elements based on the active input, creating a fluid and context-aware user interface.\\n\\n### Duration: Elevate animation fluidity\\n\\nExperience the art of animation depth with the `duration` field in event metadata. If you\'re aiming for parallax-like effects without the intricacies of frame-in-frame keyboard animations, this feature is your key! Define the `duration` of the keyboard animation to achieve a captivating parallax effect that adds a touch of elegance to your app\'s visual appeal.\\n\\n## What\'s next?\\n\\nI\'m also excited to share a sneak peek into what\'s on the horizon \ud83d\ude0e\\n\\nDuring the `1.6.0` development cycle, I\'ve delved even deeper into keyboard handling, uncovering insights that will shape the way you interact with keyboards in your React Native apps. So my investigation has inspired a new API that will make keyboard interactions more intuitive and seamless. Whether you\'re a seasoned developer or just starting out, managing keyboards will become a breeze.\\n\\nAlso I will be actively addressing GitHub issues and ensuring compatibility with the latest React Native version. My commitment to excellence means you can rely on a stable and up-to-date library \ud83d\ude0a\\n\\nFollow me on [Twitter](https://twitter.com/ziusko) for updates. Thank you for your support!"},{"id":"interactive-keyboard","metadata":{"permalink":"/react-native-keyboard-controller/blog/interactive-keyboard","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-04-10-interactive-keyboard/index.mdx","source":"@site/blog/2023-04-10-interactive-keyboard/index.mdx","title":"Interactive keyboard support","description":"I\'m excited to announce that the upcoming release of react-native-keyboard-controller, version 1.5.0, will include a new feature that allows users to control the position of the keyboard on the screen via gestures. This new interactive keyboard feature will make it easier for users to interact with the keyboard in a more natural and intuitive way, improving the overall user experience of your React Native app.","date":"2023-04-10T00:00:00.000Z","formattedDate":"April 10, 2023","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/blog/tags/react-native"},{"label":"keyboard","permalink":"/react-native-keyboard-controller/blog/tags/keyboard"},{"label":"interactive","permalink":"/react-native-keyboard-controller/blog/tags/interactive"},{"label":"android","permalink":"/react-native-keyboard-controller/blog/tags/android"},{"label":"ios","permalink":"/react-native-keyboard-controller/blog/tags/ios"}],"readingTime":1.02,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"interactive-keyboard","title":"Interactive keyboard support","authors":["kirill"],"tags":["react-native","keyboard","interactive","android","ios"],"keywords":["react-native-keyboard-controller","interactive keyboard","swipe to dismiss keyboard","control keyboard position via gesture"]},"prevItem":{"title":"Enhanced events metadata - say goodbye to guesswork and hello to precision!","permalink":"/react-native-keyboard-controller/blog/enhanced-metadata"},"nextItem":{"title":"Version 1.4.0 with new hook","permalink":"/react-native-keyboard-controller/blog/new-hook"}},"content":"I\'m excited to announce that the upcoming release of `react-native-keyboard-controller`, version `1.5.0`, will include a new feature that allows users to control the position of the keyboard on the screen via gestures. This new interactive keyboard feature will make it easier for users to interact with the keyboard in a more natural and intuitive way, improving the overall user experience of your React Native app.\\n\\nimport Lottie from \'lottie-react\';\\nimport lottie from \'../../src/components/HomepageFeatures/interactive.lottie.json\';\\n\\n<div style={{ display: \'flex\', justifyContent: \'center\', marginBottom: 20 }}>\\n<Lottie animationData={lottie} style={{ width: 400, height: 400 }} loop />\\n</div>\\n\\n\x3c!--truncate--\x3e\\n\\nThe interactive keyboard feature is customizable on Android \ud83e\udd16, allowing developers to define how the gesture controls the keyboard position and how the view should be animated when the keyboard is moved. This new feature is particularly useful for chat and other apps that require precise control over the position of the keyboard. The addition of this new interactive keyboard feature will further enhance the library\'s capabilities and provide a more natural and intuitive user experience.\\n\\nStay tuned for more updates and be sure to check out our documentation for more information on how to use this new feature in your React Native app.\\n\\nThank you for choosing `react-native-keyboard-controller`! \ud83d\ude0a"},{"id":"new-hook","metadata":{"permalink":"/react-native-keyboard-controller/blog/new-hook","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-10-15-new-hook/index.md","source":"@site/blog/2022-10-15-new-hook/index.md","title":"Version 1.4.0 with new hook","description":"New 1.4.0 release enhance API and adds new useKeyboardHandler hook. While keeping no breaking changes this release (via new hook) adds an ability to have intermediate values on iOS for height and progress values (before it was not possible and it was a restriction of the library).","date":"2022-10-15T00:00:00.000Z","formattedDate":"October 15, 2022","tags":[{"label":"new hook","permalink":"/react-native-keyboard-controller/blog/tags/new-hook"},{"label":"iOS","permalink":"/react-native-keyboard-controller/blog/tags/i-os"},{"label":"intermediate values","permalink":"/react-native-keyboard-controller/blog/tags/intermediate-values"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"new-hook","title":"Version 1.4.0 with new hook","authors":["kirill"],"tags":["new hook","iOS","intermediate values"],"keyword":["react-native-keyboard-controller","new hook","useKeyboardHandler","low-level","keyboard lifecycle"]},"prevItem":{"title":"Interactive keyboard support","permalink":"/react-native-keyboard-controller/blog/interactive-keyboard"},"nextItem":{"title":"Version 1.2.0 with new architecture support","permalink":"/react-native-keyboard-controller/blog/fabric"}},"content":"New 1.4.0 release enhance API and adds new `useKeyboardHandler` hook. While keeping no breaking changes this release (via new hook) adds an ability to have intermediate values on iOS for `height` and `progress` values (before it was not possible and it was a restriction of the library).\\n\\nAlso this hooks allow to track keyboard lifecycle and it\'s better suit for complex animations \ud83d\ude0e\\n\\nCheck out the new documentation for this hook, upgrade library version to `1.4.0` and start using it today!"},{"id":"fabric","metadata":{"permalink":"/react-native-keyboard-controller/blog/fabric","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-09-22-fabric/index.md","source":"@site/blog/2022-09-22-fabric/index.md","title":"Version 1.2.0 with new architecture support","description":"I\'m glad to announce, that new upcoming release 1.2.0 brings a support for new react native architecture \ud83d\ude0e","date":"2022-09-22T00:00:00.000Z","formattedDate":"September 22, 2022","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/blog/tags/react-native"},{"label":"release","permalink":"/react-native-keyboard-controller/blog/tags/release"},{"label":"new architecture","permalink":"/react-native-keyboard-controller/blog/tags/new-architecture"},{"label":"fabric","permalink":"/react-native-keyboard-controller/blog/tags/fabric"},{"label":"turbo modules","permalink":"/react-native-keyboard-controller/blog/tags/turbo-modules"}],"readingTime":0.86,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"fabric","title":"Version 1.2.0 with new architecture support","authors":["kirill"],"tags":["react-native","release","new architecture","fabric","turbo modules"],"keywords":["react-native-keyboard-controller","react-native","fabric","new architecture","support"]},"prevItem":{"title":"Version 1.4.0 with new hook","permalink":"/react-native-keyboard-controller/blog/new-hook"},"nextItem":{"title":"React Native meets smooth keyboard animations","permalink":"/react-native-keyboard-controller/blog/welcome"}},"content":"I\'m glad to announce, that new upcoming release `1.2.0` brings a support for new react native architecture \ud83d\ude0e\\n\\nFortunately this library is backward compatible with old architecture and will be compiled conditionally depending on which architecture you are using. So don\'t be afraid of updating it to the latest version - it doesn\'t have any breaking changes!\\n\\n![react native logo](./react-native.png)\\n\\n\x3c!--truncate--\x3e\\n\\nThe decision to add support for a new architecture (to prioritize a new architecture adoption over other features) was made in order to understand all peculiarities of the new architecture and to discover its possibilities. Hopefully such knowledge can help add new features for the library in the future.\\n\\nObviously, the migration process will take some time for other libraries, so future versions of this library will still support two architectures. When most other open source libraries will be migrated to the new architecture and the new architecture becomes the standard in the react native ecosystem, then support for the old architecture will be removed.\\n\\nStay tuned for future updates! \ud83d\ude0a"},{"id":"welcome","metadata":{"permalink":"/react-native-keyboard-controller/blog/welcome","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-06-22-welcome/index.mdx","source":"@site/blog/2022-06-22-welcome/index.mdx","title":"React Native meets smooth keyboard animations","description":"Many flagship applications that are written natively (such as Telegram, Instagram, etc.) use the full power of platform-specific native APIs (iOS, Android) to make transitions between opening/closing the keyboard animated and smooth.","date":"2022-06-22T00:00:00.000Z","formattedDate":"June 22, 2022","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/blog/tags/react-native"},{"label":"keyboard","permalink":"/react-native-keyboard-controller/blog/tags/keyboard"},{"label":"animation","permalink":"/react-native-keyboard-controller/blog/tags/animation"}],"readingTime":1.19,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"welcome","title":"React Native meets smooth keyboard animations","authors":["kirill"],"tags":["react-native","keyboard","animation"],"keywords":["react-native-keyboard-controller","react-native","keyboard","animation"]},"prevItem":{"title":"Version 1.2.0 with new architecture support","permalink":"/react-native-keyboard-controller/blog/fabric"}},"content":"Many flagship applications that are written natively (such as `Telegram`, `Instagram`, etc.) use the full power of platform-specific native APIs (`iOS`, `Android`) to make transitions between opening/closing the keyboard animated and smooth.\\n\\nUnfortunately, in `react-native` this aspect was given little attention and all `react-native` applications were suffering because of that - animations were rough, you couldn\'t write cross-platform code because some keyboard events were not available, etc. But with the advent of this library, everything changes... \ud83d\ude0e\\n\\nimport Lottie from \'lottie-react\';\\nimport lottie from \'../../src/components/HomepageFeatures/transform.lottie.json\';\\n\\n<div style={{ display: \'flex\', justifyContent: \'center\', marginBottom: 20 }}>\\n<Lottie animationData={lottie} style={{ width: 400, height: 400 }} loop />\\n</div>\\n\\n\x3c!--truncate--\x3e\\n\\nThe purpose of this library was utilizing all power of native API and at the same time provide a universal way in `react-native` to deal with it (allowing to use some platforms advanced technics if needed). Thus this library allows you to track each keyboard frame movement, and create corresponding reactions (move elements accordingly).\\n\\nThe first release of this library brings missing `keyboardWillShow`/`keyboardWillHide` events on `Android` making `events` module fully cross-platform as well as adding a way to use `Animated.Value` for managing keyboard frames.\\n\\nIn further releases the API will be enhanced:\\n- support will be added for interactive keyboard dismissing (on Android)\\n- the library will be rewritten to new `Fabric` architecture\\n- maybe some components, such as `KeyboardAvoidingView`/`KeyboardAwareScrollView` will be available here with better performance and animations.\\n\\nStay tuned! \ud83d\ude0a"}]}')}}]);