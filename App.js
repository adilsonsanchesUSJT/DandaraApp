import 'react-native-gesture-handler';

import React from 'react';

import { View } from 'react-native';

// redux library 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux scope
import index from './src/store/reducers/index';

// navigation
import useNavigation from './src/navigation/useNavigation';

// utils
console.disableYellowBox = true


/**
 * @global 
 * @return {redux creation}
 */
const middlewares = [];
middlewares.push(thunk);
if (__DEV__) {
  middlewares.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  index,
  composeEnhancers(applyMiddleware(...middlewares)),
);

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {useNavigation()}
    </View>
  );
};

export default App;
