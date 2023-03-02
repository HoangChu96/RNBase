import * as React from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const AppContainer = (props: any) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
