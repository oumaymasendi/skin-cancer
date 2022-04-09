import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';
import 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/app/Login';
import Register from './src/app/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cam from './src/app/Cam';
import OpenCamera from './src/app/OpenCamera';
const Stack = createStackNavigator();
import Result from './src/app/Result';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={OpenCamera} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Camera" component={Cam} />
      </Stack.Navigator>
    </NavigationContainer>
    //<OpenCamera />
  );
};
const styles = StyleSheet.create({});

export default App;

{
  /*import React, {Component} from 'react';
import {useSelector} from 'react-redux';
import {assignTokenHeader, initializeAxios} from './src/config/axios-config';

import {MainStack} from './src/navigation';

const App = () => {
  // Use this to initialize everything regarding app services
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    // This runs only once on app open
    initializeAxios();
    if (!token) {
      // Auth user by your provider
    }
  }, []);

  useEffect(() => {
    // This runs on token change
    if (token) {
      assignTokenHeader(token);
    }
  }, [token]);

  return <MainStack />;
};

export default App;*/
}
