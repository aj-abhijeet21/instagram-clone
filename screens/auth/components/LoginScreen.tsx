import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from './LoginForm'
import { logo } from '../../../utils/constants'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Navigation'

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo, height: 100, width: 100 }} />
      </View>
      <LoginForm navigation={navigation} route={route} />
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

export default LoginScreen
