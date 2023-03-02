import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from './components/AddNewPost'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation'

export type NewPostWrapperProps = NativeStackScreenProps<RootStackParamList, 'NewPostScreen'>

const NewPostWrapper = (props: NewPostWrapperProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})

export default NewPostWrapper
