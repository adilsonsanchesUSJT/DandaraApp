import React from 'react';

import {
  View,
  StatusBar,
  Dimensions,
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

/**
* 
* @endregion 
* 
*/

const Main = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <ContainerImage source={require('../assets/home.png')}>
          <Logo source={require('../assets/logo.png')} />
          <TouchableStart onPress={() => navigation.navigate("Login")}>
            <TextStart>Vamos começar?</TextStart>
          </TouchableStart>
        </ContainerImage>
      </View>
    </>
  );
};

export default Main;
