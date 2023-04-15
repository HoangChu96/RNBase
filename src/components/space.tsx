import * as React from 'react';

import {View} from 'react-native';

interface SpaceProps {
  space?: number;
  variant?: 'vertical' | 'horizontal';
}

const Space = (props: SpaceProps) => {
  let space = props.space ?? 12;
  const variant = props.variant || 'horizontal';
  const styleVariant =
    variant === 'horizontal'
      ? {
          width: space,
        }
      : {
          height: space,
        };

  return <View style={styleVariant} />;
};

export default Space;
