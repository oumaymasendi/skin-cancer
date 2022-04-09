/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './package.json';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent('X', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('X');
  AppRegistry.runApplication('X', {rootTag});
}
{
  /*import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';

import {store, persistor} from './src/state/store';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const render = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};*/
}

//AppRegistry.registerComponent(APPLL, () => render);
