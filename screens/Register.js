import React from 'react';
import { StyleSheet, View, FlasList, Text, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';


  class Register extends React.Component {
    static navigationOptions = {
        title: 'Register'
    }

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    register = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.props.navigation.navigate("Home")
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
                title="Register"
                onPress={() => this.register()}
            />
            <Button
                title="Sudah punya akun ? Klik disini"
                onPress={() => this.props.navigation.navigate('Login')}
            />
        </View>
        )
    }
}

export default Register
