import React from 'react';

import {
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  Linking
} from 'react-native';

import { Container, Header, Left, Right, Button } from 'native-base';

import styled from 'styled-components';

/**
 * 
 * @description region styles
 * 
 */
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

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

export const ContainerName = styled.View`
  flex: 1;
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
  margin-top: 50;
  width: 80%;
  border-color: #C4C4C4;
  border-width: 1;
  align-self: center;
  justify-content: center;
`;

export const ContainerTelephoneText = styled.View`
  flex-direction: row;
  margin-left: 50px;
  align-items: center;
`;

export const TelephoneText = styled.Text`
  margin-left: 15;
  font-weight: bold;
  font-size: 25px;
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


/**
* 
* @endregion 
* 
*/

const Home = ({ navigation }) => {


  /**
   * @param {String} description 
   * @param {Integer} phone 
   * @returns {Component}
   */
  const returnContacts = (description, phone) => (
    <TouchableContainerContact onPress={() => Linking.openURL(`tel:${phone}`)}>
      <ContainerContacts>
        <TextDescriptionContacts>{description}</TextDescriptionContacts>
        <TextPhone>{phone}</TextPhone>
      </ContainerContacts>
    </TouchableContainerContact>
  )

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container style={{ flex: 1 }}>
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
          <TouchableEmergency>
            <TextEmergency>Botão de Emergência</TextEmergency>
          </TouchableEmergency>

          <ClickMeContainer>
            <ClickTextUnderline>Clique aqui</ClickTextUnderline>
            <ClickTextMore>para configurá-lo</ClickTextMore>
          </ClickMeContainer>

          <Separator />

          <View style={{ marginTop: 15 }}>
            <ContainerTelephoneText>
              <Image source={require('../assets/phone.png')} />
              <TelephoneText>Telefones</TelephoneText>
            </ContainerTelephoneText>
            {returnContacts("Rede de Atendimento à Mulher", 188)}
            {returnContacts("Polícia Militar", 190)}
            {returnContacts("Corpo de Bombeiros", 193)}
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
