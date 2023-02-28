import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { logo } from '../../../utils/Constants'
import SignUpForm from './SignUpForm'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Navigation'

export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

const SignUpScreen = ({ navigation, route }: SignUpScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logo, height: 100, width: 100 }} />
      </View>
      <SignUpForm navigation={navigation} route={route} />
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
