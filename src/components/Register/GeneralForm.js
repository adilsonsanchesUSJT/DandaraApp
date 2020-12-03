import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

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
`;

export const InputAddress1 = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 60%;
  margin-left: 35px;
  padding-left: 15px;
`;

export const InputAddress2 = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 20%;
  margin-left: 10px;
  padding-left: 15px;
`;

export const InputAddress3 = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 40%;
  margin-left: 20;
  padding-left: 15px;
`;

/**
* 
* @endregion 
* 
*/

// Global constants
const kTypeHere = "Digite aqui";
const kPlaceholderColor = "#ACACAC";


export const GeneralForm = () => (
  <View>
    <FirstContainer>
      <InfoInput>Qual é o seu nome completo?</InfoInput>
      <Input
        placeholder={kTypeHere}
        placeholderTextColor={kPlaceholderColor}
      />
    </FirstContainer>
    <ContainerGenerals>
      <InfoInput>Qual é a data do seu nascimento?</InfoInput>
      <Input
        placeholder={kTypeHere}
        placeholderTextColor={kPlaceholderColor}
      />
    </ContainerGenerals>

    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ContainerGenerals>
        <InfoInput>Qual é o seu endereço?</InfoInput>
        <View style={{ flexDirection: 'row' }}>
          <InputAddress1
            placeholder={'Logradouro'}
            placeholderTextColor={kPlaceholderColor}
          />
          <InputAddress2
            placeholder={'Nº'}
            placeholderTextColor={kPlaceholderColor}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
          <InputAddress3
            placeholder={'Bairro'}
            placeholderTextColor={kPlaceholderColor}
          />
          <InputAddress3
            placeholder={'CEP'}
            placeholderTextColor={kPlaceholderColor}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <InputAddress1
            placeholder={'Cidade'}
            placeholderTextColor={kPlaceholderColor}
          />
          <InputAddress2
            placeholder={'UF'}
            placeholderTextColor={kPlaceholderColor}
          />
        </View>
      </ContainerGenerals>

      <ContainerGenerals>
        <InfoInput>Qual é o seu email?</InfoInput>
        <Input
          placeholder={kTypeHere}
          placeholderTextColor={kPlaceholderColor}
          type={'mail'}
        />
      </ContainerGenerals>
      <ContainerGenerals>
        <InfoInput>Crie uma senha de 6 digitos?</InfoInput>
        <Input
          placeholder={kTypeHere}
          placeholderTextColor={kPlaceholderColor}
          secureTextEntry={true}
        />
      </ContainerGenerals>
      <ContainerGenerals>
        <InfoInput>Por favor, repita a senha</InfoInput>
        <Input
          placeholder={kTypeHere}
          placeholderTextColor={kPlaceholderColor}
          secureTextEntry={true}
        />
      </ContainerGenerals>
    </KeyboardAvoidingView>
  </View>
);