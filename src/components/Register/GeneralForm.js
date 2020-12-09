import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import { firstForm } from '../../store/actions/registerActions'

import PubSub from 'pubsub-js';

import { useInterval } from '../../utilities/useInterval'

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

export const InputAddress1 = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 60%;
  margin-left: 35px;
  padding-left: 15px;
  background-color: white;
`;

export const InputAddress2 = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 20%;
  margin-left: 10px;
  padding-left: 15px;
  background-color: white;
`;

export const InputAddress3 = styled.TextInput`
  height: 47px;
  border-color: #ACACAC;
  border-width: 1.5px;
  border-radius: 25px;
  width: 40%;
  margin-left: 20;
  padding-left: 15px;
  background-color: white;
`;

/**
* 
* @endregion 
* 
*/

// Global constants
const kTypeHere = "Digite aqui";
const kPlaceholderColor = "#ACACAC";


export const GeneralForm = ({ onChange }) => {

  // STATE
  const [name, setName] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  const dispatch = useDispatch();

  useEffect(() => {
    PubSub.subscribe('GENERAL_FORM', () => {
      //  dispatch(firstForm(name, dataNasc, logradouro, numero, bairro, cep, cidade, uf, email, password))
    });
  }, [])

  return (
    <View>
      <FirstContainer>
        <InfoInput>Qual é o seu nome completo?</InfoInput>
        <Input
          placeholder={kTypeHere}
          placeholderTextColor={kPlaceholderColor}
          onChangeText={value => setName(value)}
          value={name}
        />
      </FirstContainer>
      <ContainerGenerals>
        <InfoInput>Qual é a data do seu nascimento?</InfoInput>
        <Input
          placeholder={kTypeHere}
          placeholderTextColor={kPlaceholderColor}
          onChangeText={(value) => setDataNasc(value)}
          value={dataNasc}
        />
      </ContainerGenerals>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ContainerGenerals>
          <InfoInput>Qual é o seu endereço?</InfoInput>
          <View style={{ flexDirection: 'row' }}>
            <InputAddress1
              placeholder={'Logradouro'}
              placeholderTextColor={kPlaceholderColor}
              onChangeText={(value) => setLogradouro(value)}
              value={logradouro}
            />
            <InputAddress2
              placeholder={'Nº'}
              placeholderTextColor={kPlaceholderColor}
              onChangeText={(value) => setNumero(value)}
              value={numero}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
            <InputAddress3
              placeholder={'Bairro'}
              placeholderTextColor={kPlaceholderColor}
              onChangeText={(value) => setBairro(value)}
              value={bairro}
            />
            <InputAddress3
              placeholder={'CEP'}
              placeholderTextColor={kPlaceholderColor}
              onChangeText={(value) => setCep(value)}
              value={cep}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <InputAddress1
              placeholder={'Cidade'}
              placeholderTextColor={kPlaceholderColor}
              onChangeText={(value) => setCidade(value)}
              value={cidade}
            />
            <InputAddress2
              placeholder={'UF'}
              placeholderTextColor={kPlaceholderColor}
              onChangeText={(value) => setUf(value)}
              value={uf}
            />
          </View>
        </ContainerGenerals>

        <ContainerGenerals>
          <InfoInput>Qual é o seu email?</InfoInput>
          <Input
            placeholder={kTypeHere}
            placeholderTextColor={kPlaceholderColor}
            type={'mail'}
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
        </ContainerGenerals>
        <ContainerGenerals>
          <InfoInput>Crie uma senha de 6 digitos?</InfoInput>
          <Input
            placeholder={kTypeHere}
            placeholderTextColor={kPlaceholderColor}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
            value={password}
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

}