import React from 'react';
import { View } from 'react-native';

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

export const InfoInput = styled.Text`
  padding: 10px;
  margin-left: 25;
  color: #CB6CE6;
  font-size: 16px;
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
  margin-left: 55px;
  margin-top: 20px;
  flex-direction: row;
`;

export const RGFrente = styled.TouchableOpacity`
  width: 123px;
  height: 190px;
  border-color: #ACACAC;
  border-width: 1px; 
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const RGVerso = styled.TouchableOpacity`
  width: 123px;
  height: 190px;
  border-color: #ACACAC;
  border-width: 1px; 
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-left: 30px;
`;

export const Label = styled.Text`
  color: #ACACAC
`;
/**
* 
* @endregion 
* 
*/

// Global constants
const kTypeHere = "Digite aqui";
const kPlaceholderColor = "#ACACAC";


export const DocumentsForm = () => (
  <View>
    <FirstContainer>
      <InfoInput>Qual é o seu CPF?</InfoInput>
      <Input
        placeholder={kTypeHere}
        placeholderTextColor={kPlaceholderColor}
      />
    </FirstContainer>
    <ContainerGenerals>
      <InfoInput>Por favor me envie uma foto do seu RG</InfoInput>
      <ContainerButtons>
        <RGFrente>
          <Label>FRENTE</Label>
        </RGFrente>
        <RGVerso>
          <Label>VERSO</Label>
        </RGVerso>
      </ContainerButtons>
    </ContainerGenerals>
  </View>
);