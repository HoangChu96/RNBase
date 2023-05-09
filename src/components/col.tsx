import * as React from 'react';

import {
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

interface ColProps extends ViewProps {}

const Col = (props: ColProps) => {
  const {style, ...otherProps} = props;
  return (
    <View style={[styles.container, style]} {...otherProps}>
      {props.children}
    </View>
  );
};

export default Col;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
