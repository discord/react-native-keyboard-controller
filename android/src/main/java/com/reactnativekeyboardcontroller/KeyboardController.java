package com.reactnativekeyboardcontroller;

import android.app.Activity;

import androidx.annotation.NonNull;

import com.reactnativekeyboardcontroller.modules.KeyboardControllerModuleImpl;

public class KeyboardController {
  public static void init(@NonNull final Activity activity, @NonNull final String styles) {
    KeyboardControllerModuleImpl.Companion.init(activity, styles);
  }
}
