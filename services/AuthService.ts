import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Alert } from 'react-native'
import { RootStackParamList } from '../Navigation'
import { auth } from '../utils/FirebaseConfig'

export const login = async ({
  email,
  password,
  navigation,
}: {
  email: string
  password: string
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginScreen', undefined>
}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    console.log('Login Success...')
  } catch (err: any) {
    Alert.alert('Error', 'Account does not exist', [
      {
        text: 'OK',
        onPress: () => {
          console.log('OK')
        },
        style: 'cancel',
      },
      {
        text: 'Sign Up',
        onPress: () => {
          navigation.navigate('SignUpScreen')
        },
      },
    ])
  }
}

export const signUp = ({
  email,
  password,
  username,
  navigation,
}: {
  email: string
  password: string
  username: string
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUpScreen', undefined>
}) => {
  try {
    createUserWithEmailAndPassword(auth, email, password)
    console.log('created successfully')
  } catch (err: any) {
    Alert.alert(err.message)
  }
}
