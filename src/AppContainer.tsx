import * as React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

const AppContainer = (props: any) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
