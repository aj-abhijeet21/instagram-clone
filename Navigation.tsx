import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeWrapper from './screens/home/HomeWrapper'
import LoginScreen from './screens/auth/components/LoginScreen'
import SignUpScreen from './screens/auth/components/SignUpScreen'
import NewPostWrapper from './screens/newPost/NewPostWrapper'

export type RootStackParamList = {
  HomeScreen: undefined
  NewPostScreen: undefined
  LoginScreen: undefined
  SignUpScreen: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const screenOptions = {
  headerShown: false,
}

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeWrapper} />
        <Stack.Screen name='NewPostScreen' component={NewPostWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const SignedOutStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { SignedInStack, SignedOutStack }
