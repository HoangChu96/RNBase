import React from 'react';

import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {colors} from '@app/theme';
import size from '@app/utils/fontsize';

import Text from '../text';

const SIZE = 25;
const WIDTH = SIZE * 2.1;
const CIRCLE_PADDING = SIZE / 10;

export interface AnimatedSwitchProps {
  activeColor?: string;
  active: boolean;
  inactiveColor?: string;
  circleColor?: string;
  onChangedValue?: (value: boolean) => void;
  activeText?: string;
  inactiveText?: string;
}
interface State {
  active: boolean;
}

class AnimatedSwitch extends React.Component<AnimatedSwitchProps, State> {
  static defaultProps = {
    activeColor: colors.palette.primary200,
    inactiveColor: colors.palette.secondary200,
    circleColor: colors.white,
    inactiveText: '',
    activeText: '',
  };

  tranformRight: Animated.Value;

  bgTranfrom: Animated.Value;

  constructor(props: AnimatedSwitchProps) {
    super(props);
    this.tranformRight = new Animated.Value(
      props.active ? WIDTH - SIZE + CIRCLE_PADDING : CIRCLE_PADDING,
    );
    this.bgTranfrom = new Animated.Value(props.active ? 0 : -WIDTH);
    this.state = {
      active: this.props.active,
    };
  }

  onChange = () => {
    this.props.onChangedValue?.(!this.state.active);
    this.setState(prv => ({...prv, active: !prv.active}), this.startAnimation);
  };

  startAnimation = () => {
    const {active} = this.state;
    const translateXValue = active
      ? WIDTH - SIZE + CIRCLE_PADDING
      : CIRCLE_PADDING;
    const translateXBg = active ? 0 : -WIDTH;
    Animated.parallel([
      Animated.timing(this.bgTranfrom, {
        toValue: translateXBg,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease),
        duration: 200,
      }),
      Animated.timing(this.tranformRight, {
        easing: Easing.inOut(Easing.ease),
        duration: 200,
        toValue: translateXValue,
        useNativeDriver: false,
      }),
    ]).start();
  };
  checkPropsActive = () => {
    this.startAnimation();
  };
  componentDidUpdate = (prevProps: AnimatedSwitchProps, prevState: any) => {
    if (prevProps.active != this.props.active) {
      this.setState({
        active: this.props.active,
      });
    }
    this.checkPropsActive();
  };
  render() {
    const {activeColor, inactiveColor, circleColor, inactiveText, activeText} =
      this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onChange}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.bgColorContainer,
              {
                transform: [{translateX: this.bgTranfrom}],
              },
            ]}>
            <View
              style={[
                styles.bgColor,
                {
                  backgroundColor: activeColor,
                  flexDirection: 'row',
                },
              ]}>
              <Text style={styles.activeTextCenter}>{activeText}</Text>
              <View style={styles.activeTextSpacer} />
            </View>
            <View style={[styles.bgColor, {backgroundColor: inactiveColor}]}>
              <Text style={styles.text}>{inactiveText}</Text>
            </View>
          </Animated.View>

          <Animated.View
            style={{
              transform: [
                {
                  translateX: this.tranformRight,
                },
              ],
            }}>
            <View
              style={[styles.innerCircle, {backgroundColor: circleColor}]}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AnimatedSwitch;
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: SIZE,
    overflow: 'hidden',
    borderRadius: SIZE / 2,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    left: 25,
    // marginVertical: 2,
    fontWeight: 'bold',
    fontSize: size.size_13,
  },
  activeTextCenter: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: size.size_13,
  },
  activeTextSpacer: {
    width: SIZE - CIRCLE_PADDING,
  },
  bgColorContainer: {flexDirection: 'row', position: 'absolute'},
  bgColor: {
    width: WIDTH,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
  },
  innerCircle: {
    zIndex: 10,
    width: SIZE - CIRCLE_PADDING * 2,
    height: SIZE - CIRCLE_PADDING * 2,
    borderRadius: SIZE / 2,
    elevation: 2,
  },
});
