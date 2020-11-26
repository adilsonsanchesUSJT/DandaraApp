import React from 'react';

import {
  View,
  StatusBar,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styled from 'styled-components';

/**
 * 
 * @description region styles
 * 
 */
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export const ContainerImage = styled.ImageBackground`
  flex: 1;
  resizeMode: cover;
  height: ${height};
  width: ${width};
  justify-content: center;
  align-self: center;
`;

export const Logo = styled.Image`
  justify-content: center;
  align-self: center;
  right: 25px;
`;


export const TextLogin = styled.Text`
  font-size: 40;
  padding-left: 45;
  font-weight: 500;
`

export const EmailInput = styled.TextInput`
  margin-top: 20px;
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 83%;
  align-self: center;
  padding-left: 15px;
`

export const PasswordInput = styled.TextInput`
  margin-top: 20px;
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 83%;
  align-self: center;
  padding-left: 15px;
`

export const TextRecoveryPassword = styled.Text`
  margin-top: 10px;
  padding-left: 45px;
  font-size: 14px;
`
export const TextRecoveryPasswordClick = styled.Text`
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
  color: #CB6CE6;
  font-weight: 500;
  text-decoration: underline;
`
export const TextRecoveryPasswordFinally = styled.Text`
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
`

export const ContainerTouchable = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-left: 45px;
`;


export const TouchableGoogle = styled.TouchableOpacity`
  width: 55px;
  height: 45px;
  border-width: 1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-color: #ACACAC;
`;

export const TouchableFacebook = styled.TouchableOpacity`
  margin-left: 10px;
  width: 55px;
  height: 45px;
  border-width: 1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-color: #ACACAC;
`;

export const TouchableLogin = styled.TouchableOpacity`
  align-self: flex-end;
  position: absolute;
  padding: 15px;
  background-color: #CB6CE6;
  border-radius: 30px;
  right: 30;
  width: 55%;
  align-items: center;
  shadow-opacity: 0.2;
`;

export const TextLoginTouchable = styled.Text`
  font-size: 17px;
  color: white;
`

export const ContainerRegister = styled.Text`
  flex-direction: row;
  bottom: 75px;
  position: absolute;
  align-self: center;
`

export const TextRegister = styled.Text`
  margin-top: 10px;
  font-size: 14px;
`
export const TextRegisterClick = styled.Text`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  color: #CB6CE6;
  font-weight: 500;
  text-decoration: underline;
  `

/**
* 
* @endregion 
* 
*/

const Login = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <ContainerImage source={require('../assets/login.png')}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <Logo source={require('../assets/logo.png')} />
              <TextLogin>Login</TextLogin>
              <EmailInput
                placeholder={'Email'}
                placeholderTextColor={'#ACACAC'}
              />
              <PasswordInput
                placeholder={'Senha'}
                placeholderTextColor={'#ACACAC'}
              />
              <View style={{ flexDirection: 'row' }}>
                <TextRecoveryPassword>Esqueceu a senha?</TextRecoveryPassword>
                <TextRecoveryPasswordClick>Clique aqui</TextRecoveryPasswordClick>
                <TextRecoveryPasswordFinally>para recuperá-la</TextRecoveryPasswordFinally>
              </View>
              <ContainerTouchable>
                <TouchableGoogle>
                  <Image source={require('../assets/logo-google.png')}></Image>
                </TouchableGoogle>
                <TouchableFacebook>
                  <Image source={require('../assets/logo-facebook.png')}></Image>
                </TouchableFacebook>
                <TouchableLogin onPress={() => navigation.navigate("Home")}>
                  <TextLoginTouchable>Entrar</TextLoginTouchable>
                </TouchableLogin>
              </ContainerTouchable>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
          <ContainerRegister>
            <TextRegister>Não tem uma conta?</TextRegister>
            <TextRegisterClick>Cadastre-se</TextRegisterClick>
          </ContainerRegister>
        </ContainerImage>
      </View>
    </>
  );
};

export default Login;
