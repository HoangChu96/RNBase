import * as React from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

import {colors} from '@app/theme';

interface IProps {
  size?: number | 'small' | 'large' | undefined;
  color?: string;
}

const Loading = (props: IProps) => {
  const {size = 'large'} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={props.color ?? colors.primary[400]}
        testID="Loading"
        size={size}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
