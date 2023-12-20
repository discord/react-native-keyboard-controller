# API

TODO: The `KeyboardProvider` should set `adjustResize`, store the existing value and set it back on unmount.
We should set statusBar / navigationBar initial color using theme to avoid the initial blink on the splash screen

## KeyboardAvoidingView

**[reference](https://reactnative.dev/docs/keyboardavoidingview)**

- 100% similar props to the react native one:

```tsx
<KeyboardAvoidingView
  behavior="height" // | "position" | "padding"
  contentContainerStyle={{}} // ViewProps["style"]
  enabled={true}
  keyboardVerticalOffset={0}
  // …viewProps
/>
```

## InputAccessoryView

TODO: Define API using https://kirillzyusko.github.io/react-native-keyboard-controller/docs/api/components/keyboard-sticky-view

## Keyboard

**[reference](https://reactnative.dev/docs/keyboard)**

- `scheduleLayoutAnimation` is not available, as using focused input reanimated hook seems a better option

```ts
type KeyboardEventName =
  | 'keyboardWillShow'
  | 'keyboardDidShow'
  | 'keyboardWillHide'
  | 'keyboardDidHide';

const addListener: (
  eventType: KeyboardEventName,
  listener: KeyboardEventListener
) => EmitterSubscription;

const dismiss: () => void;
const isVisible: () => boolean;
const metrics: () => KeyboardMetrics | undefined;
```

## StatusBar

**[reference](https://reactnative.dev/docs/statusbar)**

- `currentHeight` is not available as we should consume insets from `react-native-safe-area-insets`
- `backgroundColor` is not available
- `networkActivityIndicatorVisible` is not available (?)
- `translucent` is not available
- static API is identical to [react-native-bars](https://github.com/zoontek/react-native-bars#api)

```tsx
<StatusBar
  animated={true}
  barStyle="dark-content" // "light-content" | "dark-content" (should "default" be available? https://reactnative.dev/docs/statusbar#statusbarstyle)
  hidden={true} // use https://developer.android.com/develop/ui/views/layout/immersive
  showHideTransition="fade" // https://reactnative.dev/docs/statusbar#statusbaranimation
  // …viewProps
/>
```

## NavigationBar

New API, similar to [react-native-bars](https://github.com/zoontek/react-native-bars#navigationbar-), but with the support for `hidden`
