import * as React from 'react';

import {
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

interface CenterProps extends ViewProps {}

const Center = (props: CenterProps) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
