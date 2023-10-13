//
//  KeyboardControllerView.mm
//  KeyboardController
//
//  Created by Kiryl Ziusko on 2.08.22.
//  Copyright © 2022 Facebook. All rights reserved.
//

// This guard prevent the code from being compiled in the old architecture
#ifdef RCT_NEW_ARCH_ENABLED
#import "KeyboardControllerView.h"
#import "FocusedInputLayoutChangedEvent.h"
#import "KeyboardMoveEvent.h"
#import "react_native_keyboard_controller-Swift.h"

#import <react/renderer/components/reactnativekeyboardcontroller/ComponentDescriptors.h>
#import <react/renderer/components/reactnativekeyboardcontroller/EventEmitters.h>
#import <react/renderer/components/reactnativekeyboardcontroller/Props.h>
#import <react/renderer/components/reactnativekeyboardcontroller/RCTComponentViewHelpers.h>

#import <React/RCTBridge+Private.h>

#import "KeyboardControllerModule-Header.h"
#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface KeyboardControllerView () <RCTKeyboardControllerViewViewProtocol>

@end

@implementation KeyboardControllerView {
  KeyboardMovementObserver *keyboardObserver;
  FocusedInputLayoutObserver *inputObserver;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<KeyboardControllerViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const KeyboardControllerViewProps>();
    _props = defaultProps;

    inputObserver = [[FocusedInputLayoutObserver alloc] initWithHandler:^(NSDictionary *event) {
      if (self->_eventEmitter) {
        int target = [event[@"target"] integerValue];
        int absoluteY = [event[@"layout"][@"absoluteY"] integerValue];
        int absoulteX = [event[@"layout"][@"absoluteX"] integerValue];
        int y = [event[@"layout"][@"y"] integerValue];
        int x = [event[@"layout"][@"x"] integerValue];
        int width = [event[@"layout"][@"width"] integerValue];
        int height = [event[@"layout"][@"height"] integerValue];

        std::dynamic_pointer_cast<const facebook::react::KeyboardControllerViewEventEmitter>(
            self->_eventEmitter)
            ->onFocusedInputLayoutChanged(
                facebook::react::KeyboardControllerViewEventEmitter::OnFocusedInputLayoutChanged{
                    .target = target,
                    .layout = facebook::react::KeyboardControllerViewEventEmitter::
                        OnFocusedInputLayoutChangedLayout{
                            .absoluteY = absoluteY,
                            .absoluteX = absoulteX,
                            .height = height,
                            .width = width,
                            .x = x,
                            .y = y}});
        // TODO: use built-in _eventEmitter once NativeAnimated module will use ModernEventemitter
        RCTBridge *bridge = [RCTBridge currentBridge];
        if (bridge && [bridge valueForKey:@"_jsThread"]) {
          FocusedInputLayoutChangedEvent *inputChangedEvent =
              [[FocusedInputLayoutChangedEvent alloc] initWithReactTag:@(self.tag) event:event];
          [bridge.eventDispatcher sendEvent:inputChangedEvent];
        }
      }
    }];
    keyboardObserver = [[KeyboardMovementObserver alloc]
        initWithHandler:^(
            NSString *event,
            NSNumber *height,
            NSNumber *progress,
            NSNumber *duration,
            NSNumber *target) {
          if (self->_eventEmitter) {
            // TODO: use reflection to reduce code duplication?
            if ([event isEqualToString:@"onKeyboardMoveStart"]) {
              std::dynamic_pointer_cast<const facebook::react::KeyboardControllerViewEventEmitter>(
                  self->_eventEmitter)
                  ->onKeyboardMoveStart(
                      facebook::react::KeyboardControllerViewEventEmitter::OnKeyboardMoveStart{
                          .height = [height doubleValue],
                          .progress = [progress doubleValue],
                          .duration = [duration intValue],
                          .target = [target intValue]});
            }
            if ([event isEqualToString:@"onKeyboardMove"]) {
              std::dynamic_pointer_cast<const facebook::react::KeyboardControllerViewEventEmitter>(
                  self->_eventEmitter)
                  ->onKeyboardMove(
                      facebook::react::KeyboardControllerViewEventEmitter::OnKeyboardMove{
                          .height = [height doubleValue],
                          .progress = [progress doubleValue],
                          .duration = [duration intValue],
                          .target = [target intValue]});
            }
            if ([event isEqualToString:@"onKeyboardMoveEnd"]) {
              std::dynamic_pointer_cast<const facebook::react::KeyboardControllerViewEventEmitter>(
                  self->_eventEmitter)
                  ->onKeyboardMoveEnd(
                      facebook::react::KeyboardControllerViewEventEmitter::OnKeyboardMoveEnd{
                          .height = [height doubleValue],
                          .progress = [progress doubleValue],
                          .duration = [duration intValue],
                          .target = [target intValue]});
            }
          }
          if ([event isEqualToString:@"onKeyboardMoveInteractive"]) {
            std::dynamic_pointer_cast<const facebook::react::KeyboardControllerViewEventEmitter>(
                self->_eventEmitter)
                ->onKeyboardMoveInteractive(
                    facebook::react::KeyboardControllerViewEventEmitter::OnKeyboardMoveInteractive{
                        .height = [height doubleValue],
                        .progress = [progress doubleValue],
                        .duration = [duration intValue],
                        .target = [target intValue]});
          }

          // TODO: use built-in _eventEmitter once NativeAnimated module will use ModernEventemitter
          RCTBridge *bridge = [RCTBridge currentBridge];
          if (bridge && [bridge valueForKey:@"_jsThread"]) {
            KeyboardMoveEvent *keyboardMoveEvent =
                [[KeyboardMoveEvent alloc] initWithReactTag:@(self.tag)
                                                      event:event
                                                     height:height
                                                   progress:progress
                                                   duration:duration
                                                     target:target];
            [bridge.eventDispatcher sendEvent:keyboardMoveEvent];
          }
        }
        onNotify:^(NSString *event, NSDictionary *data) {
          [KeyboardController.shared sendEvent:event body:data];
        }];
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<const KeyboardControllerViewProps>(_props);
  const auto &newViewProps = *std::static_pointer_cast<const KeyboardControllerViewProps>(props);

  if (newViewProps.enabled != oldViewProps.enabled) {
    if (newViewProps.enabled) {
      [inputObserver mount];
      [keyboardObserver mount];
    } else {
      [inputObserver unmount];
      [keyboardObserver unmount];
    }
  }

  [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> KeyboardControllerViewCls(void)
{
  return KeyboardControllerView.class;
}

@end
#endif
