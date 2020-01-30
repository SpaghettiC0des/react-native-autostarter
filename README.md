# react-native-autostarter

This is a wrapper of [Autostarter](https://github.com/judemanutd/AutoStarter)

## Getting started

`$ npm install react-native-autostarter --save`

or

`$ yarn add react-native-autostarter`

### Mostly automatic installation

`$ react-native link react-native-autostarter`

## Usage

Basic usage

```javascript
import Autostarter from "react-native-autostarter";

// check if the device model is available on the autostart permissions
Autostarter.isAutoStartPermissionAvailable().then(isAvailable => {
  Autostarter.getAutoStartPermission();
});
```

Or, you can display a fallback screen or overlay if auto-start permission is not available.

```jsx
import React, { useCallback, useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import Autostarter from "react-native-autostarter";

const AutoStarterOverlay = () => {
  const onPress = useCallback(() => {
    Autostarter.getAutoStartPermission();
  }, []);

  return (
    <View>
      <Text>
        To receive push notification, please remove it from battery optimization
      </Text>
      <Button onPress={onPress}>Enable</Button>
    </View>
  );
};

const MyApp = () => {
  const [autoStartPermission, setAutoStartPermission] = useState(false);

  useEffect(() => {
    Autostarter.isAutoStartPermissionAvailable().then(isAvailable => {
      setAutoStartPermission(isAvailable);
    });
  }, []);

  return (
      <View>
        {autoStartPermission ? <AutoStarterOverlay /> : null}

        <Text>Lorem Ipsum</Text>
      </View>
  );
};
```

## Running the example
1. `cd example`
2. `yarn`
3. `react-native run-android`

# License
`react-native-autostarter` is MIT licensed, as found in the [LICENSE](https://github.com/karlmarxlopez/react-native-autostarter/blob/master/LICENSE) file.
