package com.karlmarxlopez;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.judemanutd.autostarter.AutoStartPermissionHelper;

import javax.annotation.Nonnull;


public class AutostarterModule extends ReactContextBaseJavaModule {
    public static ReactApplicationContext reactContext;

    AutostarterModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Nonnull
    @Override
    public String getName() {
        return "AutoStarter";
    }

    @ReactMethod
    public void getAutoStartPermission(Promise promise) {
        promise.resolve(AutoStartPermissionHelper.getInstance().getAutoStartPermission(getCurrentActivity()));
    }

    @ReactMethod
    public void isAutoStartPermissionAvailable(Promise promise) {
        promise.resolve((AutoStartPermissionHelper.getInstance().isAutoStartPermissionAvailable(getCurrentActivity())));
    }
}
