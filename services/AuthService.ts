import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Alert } from 'react-native'
import { RootStackParamList } from '../Navigation'
import { auth, db } from '../utils/FirebaseConfig'
import { setDoc, doc } from 'firebase/firestore'
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

export const signUp = async ({
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
    const user = await createUserWithEmailAndPassword(auth, email, password)
    const userRef = await setDoc(doc(db, 'users', auth.currentUser!.email!), {
      uid: user.user.uid,
      username: username,
      email: user.user.email,
      profile_picture: await getRandomProfilePicture(),
    })
  } catch (err: any) {
    Alert.alert(err.message)
  }
}

export const getRandomProfilePicture = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  return data.results[0].picture.large
}
