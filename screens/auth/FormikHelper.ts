import * as Yup from 'yup'

export type LoginValues = {
  email: string
  password: string
}
export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have at least 6 characters'),
})

export const loginInitValues: LoginValues = { email: '', password: '' }

export type SignUpValues = {
  email: string
  password: string
  username: string
}

export const signUpFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  username: Yup.string().required().min(6, 'Username must have at least 6 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have at least 6 characters'),
})

export const signUpInitValues: SignUpValues = { email: '', password: '', username: '' }
