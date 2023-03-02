import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { Formik } from 'formik'
import Validator from 'email-validator'
import { loginFormSchema, loginInitValues } from '../FormikHelper'
import { LoginScreenProps } from './LoginScreen'
import { login } from '../../../services/AuthService'

const LoginForm = ({ navigation, route }: LoginScreenProps) => {
  const formikRef = useRef<any>()
  const submitForm = () => {
    formikRef?.current?.submitForm()
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        innerRef={formikRef}
        initialValues={loginInitValues}
        onSubmit={({ email, password }) => login({ email, password, navigation })}
        validationSchema={loginFormSchema}
        validateOnMount
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length > 1 || Validator.validate(values.email) ? '#ccc' : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username or Email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length >= 6 ? '#ccc' : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={() => console.log('Login Pressed!')}>
                <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              style={[styles.button, { backgroundColor: isValid ? '#0096F6' : '#9ACAF7' }]}
              onPress={submitForm}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signUpText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
  signUpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
  signUpText: {
    color: '#0096F6',
  },
})

export default LoginForm
