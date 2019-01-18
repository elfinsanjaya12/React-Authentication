import React from 'react';
import { StyleSheet,Alert, View, FlasList, Text, Button, TextInput } from 'react-native';
import * as firebase from 'firebase'

  class Home extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
        title: 'Home',
        headerRight: (
            <Button
                title="SigOut"    
                color="black"
                onPress={navigation.getParam('signOut')}
            />
        )
    }
}

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            user: ''
        }
    }

    componentDidMount(){
        this.props.navigation.setParams({signOut: this.signOut});
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.state
                console.log(user)
                this.setState({user: user.email})
            }
        })
    }

    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login')
        })
    }
    render(){
        return(
            <View>
                <Text>
                    oke pake eko {this.state.user}
                </Text>
            </View>
        )
    }
}

export default Home
