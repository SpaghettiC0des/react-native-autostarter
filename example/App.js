
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Autostarter from 'react-native-autostarter';

const App = () => {
  const [autostartPermissionAvailable, setAutostartPermission] = useState(
    false,
  );

  useLayoutEffect(() => {
    Autostarter.isAutoStartPermissionAvailable().then(available =>
      setAutostartPermission(available),
    );
  }, []);

  const goToSettings = useCallback(() => {
    Autostarter.getAutoStartPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        Autostart Permission Available: {String(autostartPermissionAvailable)}
      </Text>
      <Button
        title="Go to settings"
        onPress={goToSettings}
        disabled={!autostartPermissionAvailable}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
