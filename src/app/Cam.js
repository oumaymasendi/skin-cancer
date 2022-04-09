{
  /*import React, {useState, Component} from 'react';

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
  ToastAndroid,
  Image,
} from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './Register';
import {Link} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import {Assets} from 'react-navigation-stack';

export default class App extends React.Component {
  state = {
    photo: null,
  };

  hamdleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      //console.log('yessssss');
      console.log('response', response);
      //console.log('my urijj', response.assets[0].uri);
      if (response.assets[0].uri) {
        this.setState({photo: response.assets[0].uri});
        //console.log('tetsss');
      }
    });
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {photo && (
          <Image source={{uri: photo}} style={{width: 300, height: 300}} />
        )}
        <Button
          mode="contained"
          onPress={this.hamdleChoosePhoto}
          title=" Upload Image"
          style={{marginTop: 10}}
        />
      </View>
    );
  }
}
*/
}
{
  /*import React, {useState, Component} from 'react';

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
  ToastAndroid,
} from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './Register';
import {Link} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {ImagePicker} from 'react-native-image-picker';
function Camera() {
  const [Pic, setPic] = React.useState('');
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else {
        const source = {uri: res.uri};

        console.log('response', JSON.stringify(res));

        this.setState({
          filePath: res,

          fileData: res.data,

          fileUri: res.uri,
        });
      }
    });
  };

  const uploadImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMsg('cancelled image selection');
      } else if (response.errorCode == 'permission') {
        setToastMsg('permission not satisfied');
      } else if (response.errorCode == 'others') {
        setToastMsg(response.errorMessage);
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert(
          'Maximum image size exceeded',
          'please choose image under 2 MB',
          [{text: 'OK'}],
        );
      } else {
        setPic(response.assets[0].base64);
      }
    });
  };
  return (
    <View>
      <View style={styles.centerContent}>
        <TouchableHighlight
          onPress={() => uploadImage()}
          underlayColor="rgba(0,0,0,0)">
          <Avatar.Image
            rounded
            size={300}
            source={{uri: 'data:image/jpg:base64,' + Pic}}
            // source={require('./image.jpg')}
          />
        </TouchableHighlight>
      </View>
      <View
        style={[
          styles.centerContent,
          {
            backgroung: 'rgba(0, 0, 0, 0)',
            marginTop: 25,
            flexDirection: 'row',
            height: 100,
          },
        ]}>
        <Button
          mode="contained"
          onPress={() => uploadImage()}
          title=" Upload Image"
        />
        <Button
          mode="contained"
          onPress={() => cameraLaunch()}
          title=" Open Camera"
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default Camera;*/
}
import React, {useState, Component} from 'react';

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
  ToastAndroid,
} from 'react-native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './Register';
import {Link} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {ImagePicker} from 'react-native-image-picker';
class Camera extends React.Component {
  state = {
    photo: null,
  };
  cameraLaunch = () => {};

  hamdleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      //console.log('yessssss');
      console.log('response', response);
      //console.log('my urijj', response.assets[0].uri);
      if (response.assets[0].uri) {
        this.setState({photo: response.assets[0].uri});
        //console.log('tetsss');
      }
    });
  };
  render() {
    const {photo} = this.state;
    return (
      <View>
        <View style={styles.centerContent}>
          <TouchableHighlight
            onPress={() => uploadImage()}
            underlayColor="rgba(0,0,0,0)">
            {photo && (
              <Avatar.Image
                rounded
                size={300}
                source={{uri: photo}}
                //source={{uri: 'data:image/jpg:base64,' + Pic}}
                // source={require('./image.jpg')}
              />
            )}
          </TouchableHighlight>
        </View>
        <View
          style={[
            styles.centerContent,
            {
              backgroung: 'rgba(0, 0, 0, 0)',
              marginTop: 25,
              flexDirection: 'row',
              height: 100,
            },
          ]}>
          <Button
            mode="contained"
            onPress={this.hamdleChoosePhoto}
            //onPress={() => uploadImage()}
            title=" Upload Image"
          />
          <Button
            mode="contained"
            onPress={this.cameraLaunch()}
            title=" Open Camera"
            style={{marginLeft: 20}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});

export default Camera;
