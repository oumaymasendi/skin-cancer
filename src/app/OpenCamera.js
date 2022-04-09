import React, {Component, useEffect} from 'react';
import {Provider, useSelector} from 'react-redux';
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
  Image,
} from 'react-native';
//import {assignTokenHeader, initializeAxios} from './src/config/axios-config';

//import {MainStack} from './src/navigation';

class OpenCamera extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./image.jpg')}
          style={{height: 200, width: 300}}
        />
        {/* <MainStack />*/}
        <Text style={styles.text}>
          Skin cancer -- abnormal cell changes in the outer layer of skin -- is
          by far the most common cancer in the world. It can usually be cured,
          but the disease is a major health concern because it affects so many
          people. About half of fair-skinned people who live to age 65 will have
          at least one skin cancer. Most can be prevented by protecting your
          skin from the sun and ultraviolet rays. Every malignant skin tumor
          will, over time, show up on the skin's surface. That makes this the
          only type of cancer that is almost always found in its early, curable
          stages.
        </Text>
        <View style={{marginTop: 100, flexDirection: 'row'}}>
          <Button
            title="Open camera"
            color="#0080ff"
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Camera')}
          />
          <Button
            title="Result"
            color="#0080ff"
            //style={styles.btnn}
            onPress={() => this.props.navigation.navigate('Result')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    marginTop: 28,
    width: 600,
    alignItems: 'center',
  },
  btnn: {
    marginTop: 12000,
    width: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
});

export default OpenCamera;

/*import React, {Component} from 'react';

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
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class OpenCamera extends Component {
  render() {
    return <View>
      
    </View>;
  }
}
const styles = StyleSheet.create({});

export default OpenCamera;*/
