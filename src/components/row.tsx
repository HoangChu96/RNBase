import * as React from 'react';

import {
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

interface RowProps extends ViewProps {}

const Row = (props: RowProps) => {
  const {style, ...otherProps} = props;
  return (
    <View style={[styles.container, style]} {...otherProps}>
      {props.children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
