import React from 'react';

import {
  View,
  StatusBar,
  Dimensions,
  TextInput,
  Text
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
  bottom: 100px;
  right: 25px;
`;

export const TouchableStart = styled.TouchableOpacity`
  align-self: flex-end;
  position: absolute;
  bottom: 100px;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 30px;
  right: 30;
  shadow-opacity: 0.3
`;

export const TextStart = styled.Text`
  font-size: 18;
`

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <ContainerImage source={require('../assets/login.png')}>
        <Logo source={require('../assets/logo.png')} />
        <Text style={{ paddingLeft: 45, fontWeight: 'bold', fontSize: 40}}>Login</Text>
        <TextInput
          style={{ marginTop: 20, height: 47, borderColor: '#ACACAC', borderWidth: 1.5, borderRadius: 25, width: 340, alignSelf: 'center', paddingLeft: 15 }}
          placeholder={'Email'}
          placeholderTextColor={'#ACACAC'}
        />
        <TextInput
          style={{ marginTop: 20, height: 47, borderColor: '#ACACAC', borderWidth: 1.5, borderRadius: 25, width: 340, alignSelf: 'center', paddingLeft: 15 }}
          placeholder={'Senha'}
          placeholderTextColor={'#ACACAC'}
        />
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ marginTop: 10, paddingLeft: 45, fontSize: 14}}>Esqueceu a senha?</Text>
          <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, color: '#CB6CE6', fontWeight: 'bold', textDecorationLine: 'underline'}}>Clique aqui</Text>
          <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14}}>para recuperá-la</Text>
        </View>
        </ContainerImage>
      </View>
    </>
  );
};

export default Home;
