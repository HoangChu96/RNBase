import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface LoginViewProps {}

const LoginView = (props: LoginViewProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginView</Text>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {},
});
