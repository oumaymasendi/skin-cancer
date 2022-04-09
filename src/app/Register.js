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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      prenom: '',
      prenomError: '',
      nom: '',
      nomError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
    };
  }
  submit(navigation) {
    let rjx = /^[a-zA-Z]/;
    let rj = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = rjx.test(this.state.nom);
    let isValide = rj.test(this.state.email);
    if (!isValid) {
      this.setState({nomError: 'name field must be alphabatic'});
      this.setState({prenomError: 'first name field must be alphabatic'});
    } else {
      this.setState({nomError: ''});
      this.setState({prenomError: ''});
    }
    if (!isValide) {
      this.setState({emailError: 'Please enter a valid email address'});
    } else {
      this.setState({emailError: ''});
    }
    this.props.navigation.navigate('Login');
  }
  /*nomValidator() {
    if (this.state.nom == '') {
      this.setState({nomError: 'name field can not be empty'});
    } else {
      this.setState({nomError: ''});
    }
  }
  prenomValidator() {
    if (this.state.email == '') {
      this.setState({prenomError: 'first name field can not be empty'});
    } else {
      this.setState({prenomError: ''});
    }
  }*/
  emailValidator() {
    if (this.state.email == '') {
      this.setState({emailError: 'email field can not be empty'});
    } else {
      this.setState({emailError: ''});
    }
  }
  passwordValidator() {
    if (this.state.password == '') {
      this.setState({passwordError: 'password field can not be empty'});
    } else {
      this.setState({passwordError: ''});
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.subtitle}>Sign up</Text>

        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="prenom"
            autoCorrect={false}
            keyboardType="prenom"
            returnKeyType="next"
            style={styles.textInput}
            textContentType="prenom"
            placeholder="Your first name"
            onChangeText={text => {
              this.setState({prenom: text});
            }}
          />
        </View>
        <Text style={{color: 'red', marginTop: 8}}>
          {this.state.prenomError}
        </Text>

        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="nom"
            autoCorrect={false}
            keyboardType="nom"
            returnKeyType="next"
            style={styles.textInput}
            textContentType="nom"
            placeholder="Your name"
            /*onBlur={() => this.nomValidator()}*/
            onChangeText={text => {
              this.setState({nom: text});
            }}
          />
        </View>
        <Text style={{color: 'red', marginTop: 8}}>{this.state.nomError}</Text>

        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            keyboardType="email"
            returnKeyType="done"
            style={styles.textInput}
            textContentType="email"
            placeholder="Your email"
            /*onBlur={() => this.emailValidator()}*/
            onChangeText={text => {
              this.setState({nom: text});
            }}
          />
        </View>
        <Text style={{color: 'red', marginTop: 8}}>
          {this.state.emailError}
        </Text>
        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            returnKeyType="done"
            secureTextEntry
            style={styles.textInput}
            textContentType="password"
            placeholder="password"
            onBlur={() => this.passwordValidator()}
          />
        </View>
        <Text style={{color: 'red', marginTop: 8}}>
          {this.state.passwordError}
        </Text>
        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="confirm-mot de passe"
            autoCorrect={false}
            returnKeyType="done"
            secureTextEntry
            style={styles.textInput}
            placeholder="confirm your password"
          />
        </View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Button
              title="Save"
              onPress={() => {
                this.submit();
              }}
            />
          </View>
        </TouchableOpacity>
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
});

export default Register;
