import React from 'react';
import { StyleSheet, View,Alert, FlasList, Text, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyAw9BebLAefQI2UyGI0J3CkZGwOnUh-I6o",
    authDomain: "coba-firebase-2db1f.firebaseapp.com",
    databaseURL: "https://coba-firebase-2db1f.firebaseio.com",
  };
  firebase.initializeApp(config);

  class Login extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            console.log(this.state.email)
            console.log(this.state.password)
            this.props.navigation.navigate('Home')
            Alert.alert("pencet");
        })
        .catch(function(error){
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', margin: 32}}>
                <TextInput 
                    placeholder="email ..."
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoCapitalize="none"
                    style={StyleSheet.TextInput}
                    onChangeText={(text) => this.setState({email: text})}
                />

                <TextInput 
                    placeholder="Password ..."
                    secureTextEntry={true}
                    style={StyleSheet.TextInput}
                    onChangeText={(text) => this.setState({password: text})}
                />

                <Button
                    title="Login"
                    onPress={() => this.login()}
                />
                <Button
                    title="Tidak punya akun ? Klik disini"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </View>
        )
    }
}





export default Login
