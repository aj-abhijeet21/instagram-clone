import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from './LoginForm'
import { logo } from '../../../utils/constants'
import SignUpForm from './SignUpForm'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo, height: 100, width: 100 }} />
      </View>
      <SignUpForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})
export default SignUpScreen
