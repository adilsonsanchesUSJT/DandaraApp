import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components';

/**
 * 
 * @description region styles
 * 
 */
export const FirstContainer = styled.View`
  margin-top: 30px;
`;

export const ContainerGenerals = styled.View`
  margin-top: 20px
`;

export const TextInformation = styled.Text`
  text-align: center;
  padding-left: 20px;
  margin-right: 20px;
  color: #6F6F6F;
  font-size: 16px;
`;

export const InfoInput = styled.Text`
  padding: 10px;
  margin-left: 25;
  color: #CB6CE6;
  font-size: 16px;
  font-weight: bold;
`;

export const AngelText = styled.Text`
  padding: 10px;
  margin-left: 25;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 83%;
  align-self: center;
  padding-left: 15px;
  background-color: white;
`;

export const ContainerButtons = styled.View`
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: row;
  margin-left: 50;
  justify-content: space-between;
`;

export const TouchableBack = styled.TouchableOpacity`
  width: 100px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
`;

export const BackText = styled.Text`
  color: #ACACAC;
  margin-left: 5px;
`;

export const TouchableNext = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 15px;
  background-color: #CB6CE6;
  border-radius: 30px;
  right: 30;
  width: 25%;
  align-items: center;
  shadow-opacity: 0.2;
`;

export const TextTouchableNext = styled.Text`
  font-size: 17px;
  color: white;
`;

export const ContainerInfo = styled.View`
  marginLeft: 30px;
  padding-top: 20px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const ContainerName = styled.View`
  margin-left: 10px;
`;

export const TextItens = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #6F6F6F
`;
/**
* 
* @endregion 
* 
*/

// Global constants
const kTypeHere = "Digite aqui";
const kPlaceholderColor = "#ACACAC";


export const AngelForm = () => {

  // STATE
  const [angel, setAngel] = useState({
    angelName: "",
    angelNumber: "",
    angelMail: "",
  });
  const [angelName, setAngelName] = useState("");
  const [angelNumber, setAngelNumber] = useState("");
  const [angelMail, setAngelMail] = useState("");

  /**
   * @returns {[]} angels
   */
  function saveAngel() {
    setAngel({
      angelName: angelName,
      angelNumber: angelNumber,
      angelMail: angelMail,
    });
  };

  /**
   * @returns {[]} limpa o state de anjos 
   */
  function editAngel() {
    setAngel({
      angelName: "",
      angelNumber: "",
      angelMail: "",
    });
  };

  /**
   * @returns {[]} limpa todos os states de anjos
   */
  function removeAngel() {
    editAngel();
    setAngelName("");
    setAngelNumber("");
    setAngelMail("");
  };

  return (
    <View style={{ flex: 1 }}>
      <FirstContainer>
        <TextInformation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercício ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </TextInformation>
      </FirstContainer>
      <ContainerGenerals>
        <AngelText>Anjo da guarda</AngelText>
        {angel.angelName !== "" ? (
          <View style={{ flexDirection: 'row' }}>
            <ContainerInfo>
              <Avatar source={require('../../assets/angel.png')} />
              <ContainerName>
                <TextItens>{angel.angelName}</TextItens>
                <TextItens>{angel.angelNumber}</TextItens>
                <TextItens>{angel.angelMail}</TextItens>
              </ContainerName>
            </ContainerInfo>
            <View style={{ marginLeft: 'auto', paddingRight: 30, flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => editAngel()}>
                <Image source={require('../../assets/edit.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => removeAngel()}>
                <Image source={require('../../assets/trash.png')} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <ContainerGenerals>
                <InfoInput>Qual é o nome dele(a)</InfoInput>
                <Input
                  placeholder={kTypeHere}
                  placeholderTextColor={kPlaceholderColor}
                  onChangeText={(value) => setAngelName(value)}
                  value={angelName}
                />
              </ContainerGenerals>
              <ContainerGenerals>
                <InfoInput>Qual é o numero de celular dele(a)?</InfoInput>
                <Input
                  placeholder={kTypeHere}
                  placeholderTextColor={kPlaceholderColor}
                  onChangeText={(value) => setAngelNumber(value)}
                  value={angelNumber}
                  keyboardType='numeric'
                />
              </ContainerGenerals>
              <ContainerGenerals>
                <InfoInput>Qual é o email dele(a)?</InfoInput>
                <Input
                  placeholder={kTypeHere}
                  placeholderTextColor={kPlaceholderColor}
                  onChangeText={(value) => setAngelMail(value)}
                  value={angelMail}
                  keyboardType="email-address"
                />
              </ContainerGenerals>
              <ContainerButtons>
                <TouchableBack onPress={() => ""}>
                  <BackText>Cancelar</BackText>
                </TouchableBack>
                <TouchableNext onPress={() => saveAngel()}>
                  <TextTouchableNext>OK</TextTouchableNext>
                </TouchableNext>
              </ContainerButtons>
            </KeyboardAvoidingView>
          )}
      </ContainerGenerals>
    </View>
  )
}