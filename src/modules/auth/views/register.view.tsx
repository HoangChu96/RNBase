import * as React from 'react';

import {
  Animated,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '@app/theme';
import images from '@app/utils/images';
import {commonStyles} from '@app/utils/styles';

import useRegisterController from '../view-controllers/useRegisterController';

interface LoginViewProps {}

const Input = ({title}: {title: string}) => {
  return (
    <View>
      <Text style={styles.description}>{title}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const RegisterView = (props: LoginViewProps) => {
  const {onDismissKeyboard, goToLoginAccount} = useRegisterController();

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      resizeMode="cover">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onDismissKeyboard}
        style={styles.flex}>
        <Animated.View style={styles.content}>
          <KeyboardAvoidingView behavior="padding">
            <Text style={styles.title}>Register</Text>
            <View>
              <Input title="Full Name" />
              <Input title="Email" />
              <Input title="Password" />
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
        <SafeAreaView style={styles.bottom}>
          <Text style={styles.newHere}>
            Already Member?
            <Text style={styles.register} onPress={goToLoginAccount}>
              {' '}
              Login
            </Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Register</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default RegisterView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  icon: {
    width: 60,
    height: 70,
  },
  content: {
    marginLeft: 20,
    flex: 3,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 36,
    color: colors.primary,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: colors.primary,
    marginVertical: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  button: {
    ...commonStyles.shadow,
    borderRadius: 7,
    borderColor: colors.white,
    borderWidth: 1,
    height: 60,
    width: 144,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 24,
    color: colors.white,
  },
  newHere: {
    fontSize: 16,
    color: colors.white,
    ...commonStyles.shadow,
  },
  register: {
    fontWeight: 'bold',
  },

  // input
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 12,
    borderColor: colors.primary,
    width: '80%',
    marginBottom: 10,
  },
});
