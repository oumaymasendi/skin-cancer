import React, {Component} from 'react';

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
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './Register';
import {Link} from '@react-navigation/native';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  go = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      alert('valid');
    } else {
      alert();
    }
  };

  onLogin() {
    const {email, password} = this.state;

    Alert.alert('Credentials', `${email} + ${password}`);
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.subtitle}>start session</Text>
          <Text style={styles.title}> Enter your email and password</Text>
          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput}
              textContentType="username"
              placeholder="Your email"
              value={this.state.email}
              onChangeText={email => emailtState({email})}
            />
          </View>

          <View style={styles.form}>
            <TextInput
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              returnKeyType="done"
              style={styles.textInput}
              textContentType="password"
              placeholder="password"
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity>
            <View style={styles.button}>
              <Button
                title="Login"
                /* onPress={this.onLogin.bind()} />*/
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Link
          to={{screen: 'Register'}}
          style={styles.link}
          onPress={() => this.props.navigation.navigate('Register')}>
          I did not create an account
        </Link>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subtitle: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 0,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title: {
    color: '#20232a',
    textAlign: 'center',
    marginTop: 20,
  },
  form: {
    backgroundColor: 'white',
    marginTop: 24,
  },
  button: {
    marginTop: 28,
    width: 600,
    alignItems: 'center',
  },
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Login;
