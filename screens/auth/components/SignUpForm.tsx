import { View, Text, Pressable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { signUpFormSchema, signUpInitValues } from '../FormikHelper'
import Validator from 'email-validator'
import { SignUpScreenProps } from './SignUpScreen'

const SignUpForm = ({ navigation, route }: SignUpScreenProps) => {
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={signUpInitValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={signUpFormSchema}
        validateOnMount
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='#444'
                placeholder='Email'
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
                    values.username.length < 1 || values.username.length > 6 ? '#ccc' : 'red',
                },
              ]}
            >
              <TextInput
                placeholderTextColor='#444'
                placeholder='Username'
                autoCapitalize='none'
                keyboardType='default'
                textContentType='username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length >= 8 ? '#ccc' : 'red',
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

            <Pressable
              style={[
                styles.button,
                { backgroundColor: isValid ? '#0096F6' : '#9ACAF7', marginTop: 30 },
              ]}
              onPress={(e) => handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.signUpText}> Log In</Text>
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

export default SignUpForm
