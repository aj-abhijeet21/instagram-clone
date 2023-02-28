import * as Yup from 'yup'

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must have at least 8 characters'),
})

export const loginInitValues = { email: '', password: '' }

export const signUpFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  username: Yup.string().required().min(6, 'Username must have at least 8 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must have at least 8 characters'),
})

export const signUpInitValues = { email: '', password: '', username: '' }
