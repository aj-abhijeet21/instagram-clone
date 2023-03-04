import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PostUploader from './PostUploader'
import { useNavigation } from '@react-navigation/native'

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <PostUploader />
    </View>
  )
}

const Header = () => {
  const navigator = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigator.goBack()}>
        <Image style={styles.icon} source={require('../../../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
})
export default AddNewPost
