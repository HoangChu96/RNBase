import React, {
  forwardRef,
  memo,
} from 'react';

import {View} from 'react-native';

import {IBoxProps} from './types';

const Box = ({children, ...props}: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);

  return (
    <View ref={ref} {...props}>
      {/* {React.Children.map(children, (child) => {
        return typeof child === 'string' ||
          typeof child === 'number' ||
          (child?.type === React.Fragment &&
            (typeof child.props?.children === 'string' ||
              typeof child.props?.children === 'number')) ? (
          <Text {..._text}>{child}</Text>
        ) : (
          child
        );
      })} */}
    </View>
  );
};

export default memo(forwardRef(Box));
