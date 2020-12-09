import React from 'react';

import {
  View,
  StatusBar,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native';

import { Header, Left, Right, Button } from 'native-base';

import styled from 'styled-components';

/**
 * 
 * @description region styles
 * 
 */

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  resizeMode: contain;
`;

export const Menu = styled.Image`
  width: 50px;
  height: 50px;
  resizeMode: contain;
`;

export const ContainerInfo = styled.View`
  marginLeft: 50px;
  padding-top: 50px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 3px;
  border-color: #CB6CE6;
`;

export const Location = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  resize-mode: contain;
`;

export const ContainerName = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ContainerNameDelegacia = styled.View`
  margin-left: 10px;
`;

export const TextName = styled.Text`
margin-top: 10px;
font-size: 25px;
font-weight: 500;
`;

export const TextDescription = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
`;

export const TouchableEmergency = styled.TouchableOpacity`
  margin-top: 50px;
  width: 80%;
  padding: 30px;
  background-color: #CB6CE6;
  align-items: center;
  align-self: center;
  border-radius: 40px;
`;

export const TextEmergency = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const ClickMeContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 15;
`;

export const ClickTextUnderline = styled.Text`
  font-size: 16;
  color: #CB6CE6;
  textDecorationLine: underline;
`;

export const ClickTextMore = styled.Text`
  margin-left: 5;
  font-size: 16;
`;

export const Separator = styled.View`
  margin-top: 30;
  width: 80%;
  border-color: #C4C4C4;
  border-width: 1;
  align-self: center;
  justify-content: center;
`;

export const ContainerDelegaciaText = styled.View`
  margin-left: 30px;
  margin-top: 20px;
`;

export const DelegaciaText = styled.Text`
  margin-left: 15;
  font-weight: bold;
  font-size: 25px;
`;

export const DelegaciaDescription = styled.Text`
  margin-left: 15;
  font-size: 16px;
  width: 300px
`;

export const TouchableContainerContact = styled.TouchableOpacity`
  margin-top: 20;
  width: 80%;
  padding: 20px;
  background-color: white;
  align-self: center;
  border-radius: 40;
  border-color: #6F6F6F;
  border-width: 1;
`;

export const ContainerContacts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextDescriptionContacts = styled.Text`
  font-size: 18;
  width: 200;
  color: #6F6F6F;
`;

export const TextPhone = styled.Text`
  font-size: 27;
  color: #F0C819;
  font-weight: bold;
`;

export const ContainerInfoDelegacias = styled.View`
  margin-left: 30px;
  padding-top: 15px;
  flex-direction: row;
`;

export const TextItens = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #6F6F6F
  width: 200px;
`;

export const TouchableNext = styled.TouchableOpacity`
  margin-left: 30px;
  margin-top: 45px;
  padding: 15px;
  background-color: #CB6CE6;
  border-radius: 30px;
  width: 40%;
  align-items: center;
  shadow-opacity: 0.2;
`;

export const TextTouchableNext = styled.Text`
  font-size: 17px;
  color: white;
`;

/**
* 
* @endregion 
* 
*/

const PoliceStation = ({ navigation }) => {


  /**
   * @param {String} description 
   * @param {Integer} phone 
   * @returns {Component}
   */
  const returnDelegacias = (title, description) => (
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 30 }}>{title}</Text>

      <View style={{ flexDirection: 'row' }}>
        <ContainerInfoDelegacias>
          <Location source={require('../assets/location.png')} />
          <ContainerNameDelegacia>
            <TextItens>{description}</TextItens>
          </ContainerNameDelegacia>
        </ContainerInfoDelegacias>
        <View style={{ marginLeft: 'auto', paddingRight: 30, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/telephone.png')} />
          <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => ""}>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <Header>
          <Left>
            <Button transparent>
              <Logo source={require('../assets/logo.png')} />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Menu source={require('../assets/menu.png')} />
            </Button>
          </Right>
        </Header>
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
          <ContainerInfo>
            <Avatar source={require('../assets/profile-default.png')} />
            <ContainerName>
              <TextName>Olá, Mariana</TextName>
              <TextDescription>Estamos aqui para ajuda-la!</TextDescription>
            </ContainerName>
          </ContainerInfo>

          <Separator />

          <View style={{ marginTop: 15 }}>
            <ContainerDelegaciaText>
              <DelegaciaText>Delegacias</DelegaciaText>
              <DelegaciaDescription>Encontramos as delegacias mais próximas de você</DelegaciaDescription>
            </ContainerDelegaciaText>
            <View style={{ alignSelf: 'center', marginTop: 20 }}><Image source={require('../assets/delegacia.png')}></Image></View>

            <View style={{ marginTop: 15 }}>
              {returnDelegacias('Delegacia Geral de Polícia', 'Delegacia de Polícia Rua São Bento, 380 (11) 3112 2163')}
              {returnDelegacias('Delegacia Geral de Polícia', 'Delegacia de Polícia Av. Cásper Líbero, 370 (11) 3221 3498')}
              {returnDelegacias('Delegacia Geral de Polícia', 'Delegacia de Polícia Praça Alfredo Issa, 57 (11) 3337-6020')}
              {returnDelegacias('Deatur Delegacia Especializada em Atendimento ao Turista', 'Delegacia de Polícia R. Cantareira, 390 (11) 3120 4417')}
            </View>
            <TouchableNext onPress={() => navigation.goBack()}>
              <TextTouchableNext>Voltar</TextTouchableNext>
            </TouchableNext>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PoliceStation;
