import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/Home'


const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
}, {
  initialRouteName:'Login'
})

const AppStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const Navigate = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
},{
  initialRouteName: 'Auth' 
})

const AppContainer = createAppContainer(Navigate);

class App extends React.Component {
  render() {
    return <AppContainer />
  }
};

export default App
