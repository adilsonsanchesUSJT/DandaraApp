import React, { useState, useEffect } from 'react';

import { ScrollView, SafeAreaView, Image } from 'react-native';
import { Header, Left, Button } from 'native-base';

import styled from 'styled-components';
import StepIndicator from 'react-native-step-indicator';

import PubSub from 'pubsub-js';

// Forms componentes
import { GeneralForm } from './GeneralForm'
import { DocumentsForm } from './DocumentsForm'
import { AngelForm } from './AngelForm'

// Step Settings
import { labels, customStyles } from './StepSettings'

/**
 * 
 * @description region styles
 * 
 */
export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  resizeMode: contain;
`;

export const ContainerHeader = styled.View`
  margin-top: 50px;
`;

export const CreateAccountText = styled.Text`
  align-self: center;
  font-size: 32px;
  font-weight: bold;
`;

export const ContainerSpinner = styled.View`
  margin-top: 50px;
`;

export const InfoText = styled.Text`
  margin-top: 25px;
  align-self: center;
  font-size: 15px;
  font-weight: bold;
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
  width: 55%;
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

const Register = ({ navigation }) => {

  // STATE
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    if (currentPosition === 1) PubSub.publish('GENERAL_FORM');
    if (currentPosition === 2) PubSub.publish('DOCUMENTS_FORM');
    if (currentPosition === 3) PubSub.publish('ANGEL_FORM');
  }, [currentPosition]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header transparent style={{ backgroundColor: '#F5F5F5' }}>
          <Left>
            <Button transparent>
              <Logo source={require('../../assets/logo.png')} />
            </Button>
          </Left>
        </Header>
        <ContainerHeader>
          <CreateAccountText>Criar uma conta</CreateAccountText>
          <ContainerSpinner>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={labels}
              stepCount={3}
            />
            <InfoText>Conte-nos um pouco mais sobre você</InfoText>
          </ContainerSpinner>
        </ContainerHeader>

        {/* CHANGE FORM */}
        {currentPosition === 0 && <GeneralForm />}
        {currentPosition === 1 && <DocumentsForm />}
        {currentPosition === 2 && <AngelForm />}
        {currentPosition === 3 && navigation.navigate("Home")}

        <ContainerButtons>
          <TouchableBack onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/arrow.png')} />
            <BackText>Voltar</BackText>
          </TouchableBack>
          <TouchableNext onPress={() => setCurrentPosition(currentPosition + 1)}>
            <TextTouchableNext>Próxima etapa</TextTouchableNext>
          </TouchableNext>
        </ContainerButtons>
      </ScrollView>
    </SafeAreaView>
  )

}

export default Register;