package com.reactnativekeyboardcontroller.modules

import android.content.Context
import android.view.View
import android.app.Activity
import android.graphics.Color
import android.os.Build
import android.view.WindowManager
import android.view.inputmethod.InputMethodManager
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.UiThreadUtil
import com.reactnativekeyboardcontroller.traversal.FocusedInputHolder
import com.reactnativekeyboardcontroller.traversal.ViewHierarchyNavigator

class KeyboardControllerModuleImpl(private val mReactContext: ReactApplicationContext) {
  private val mDefaultMode: Int = getCurrentMode()

  fun setInputMode(mode: Int) {
    setSoftInputMode(mode)
  }

  fun setDefaultMode() {
    setSoftInputMode(mDefaultMode)
  }

  fun dismiss() {
    val activity = mReactContext.currentActivity
    val view: View? = activity?.currentFocus

    if (view != null) {
      val imm = activity.getSystemService(Context.INPUT_METHOD_SERVICE) as? InputMethodManager
      imm?.hideSoftInputFromWindow(view.windowToken, 0)
    }
  }

  fun setFocusTo(direction: String) {
    if (direction == "current") {
      return FocusedInputHolder.focus()
    }

    val activity = mReactContext.currentActivity
    val view: View? = activity?.currentFocus

    if (view != null) {
      ViewHierarchyNavigator.setFocusTo(direction, view)
    }
  }

  private fun setSoftInputMode(mode: Int) {
    UiThreadUtil.runOnUiThread {
      if (getCurrentMode() != mode) {
        mReactContext.currentActivity?.window?.setSoftInputMode(mode)
      }
    }
  }

  private fun getCurrentMode(): Int {
    return mReactContext
      .currentActivity
      ?.window
      ?.attributes
      ?.softInputMode
      ?: WindowManager.LayoutParams.SOFT_INPUT_STATE_UNSPECIFIED
  }

  companion object {
    const val NAME = "KeyboardController"

    fun init(activity: Activity, styles: String) {
      val haveDarkContent = "dark-content" == styles
      val window = activity.window
      val insetsController = WindowInsetsControllerCompat(window, window.decorView)

      WindowCompat.setDecorFitsSystemWindows(window, false)

      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
        window.clearFlags(
          WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS or
            WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
        )

        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT

        insetsController.isAppearanceLightStatusBars = haveDarkContent
        insetsController.isAppearanceLightNavigationBars = haveDarkContent

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
          window.isStatusBarContrastEnforced = false
          window.isNavigationBarContrastEnforced = false
        }
      } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
        window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)

        window.statusBarColor = Color.TRANSPARENT

        insetsController.isAppearanceLightStatusBars = haveDarkContent
      } else {
        window.addFlags(
          WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS or
            WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION
        )
      }
    }
  }
}
