import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import ImageViewer from './ImageViewer'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { auth, db, storage } from '../../../utils/FirebaseConfig'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'

type User = {
  username: string
  profilePicture: string
  collectionId: string
}

const PostUploader = () => {
  const navigator = useNavigation()
  const [selectedImage, setSelectedImage] = useState<any>()
  const [caption, setCaption] = useState<string>('')
  const [currentLoggedInUser, setCurrentUser] = useState<User>()

  useEffect(() => {
    getUserName()
  }, [])

  const getUserName = async () => {
    console.log('inside')
    const user = auth.currentUser
    const userRef = collection(db, 'users')
    const q = query(userRef, where('uid', '==', user?.uid), limit(1))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      setCurrentUser({
        username: doc.data().username,
        profilePicture: doc.data().profile_picture,
        collectionId: doc.id,
      })
    })
  }

  const uploadImage = async () => {
    if (caption === '') {
      Alert.alert('Please enter a caption')
      return
    }
    if (selectedImage) {
      try {
        const filename = selectedImage.substring(selectedImage.lastIndexOf('/') + 1)
        const imagesRef = ref(storage, 'images/' + filename)
        const response = await fetch(selectedImage)
        const blob = await response.blob()
        const task = await uploadBytesResumable(imagesRef, blob)
        const url = await getDownloadURL(ref(storage, task.ref.fullPath))
        const userRef = collection(db, `users/${currentLoggedInUser?.collectionId}/posts`)
        const getDoc = doc(userRef, auth.currentUser?.uid)

        const result = await addDoc(userRef, {
          imageUrl: url,
          user: currentLoggedInUser?.username,
          profile_picture: currentLoggedInUser?.profilePicture,
          owner_uid: auth.currentUser?.uid,
          caption: caption,
          createdAt: new Date(),
          likes: 0,
          likes_by_user: [],
          comments: [],
        })

        navigator.goBack()
      } catch (err) {
        Alert.alert('Upload Failed')
      }
    }
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      aspect: [3, 4],
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      Alert.alert('You did not select any image.')
    }
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <View collapsable={false}>
          <ImageViewer selectedImage={selectedImage} />
        </View>
        <View style={[styles.inputField]}>
          <TextInput
            placeholderTextColor='#444'
            placeholder='Enter a caption...'
            autoCapitalize='sentences'
            autoCorrect={false}
            onChangeText={(text) => setCaption(text)}
            maxLength={200}
            value={caption}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Pressable
          style={[
            styles.button,
            {
              borderColor: '#0096F6',
              borderWidth: 2,
            },
          ]}
          onPress={pickImageAsync}
        >
          <Text style={styles.buttonText}>Choose Image</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Pressable style={[styles.button, { backgroundColor: '#0096F6' }]} onPress={uploadImage}>
          <Text style={styles.buttonText}>Create Post</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  inputFieldContainer: {
    backgroundColor: 'red',
    flex: 1,
    marginLeft: 10,
  },
  inputField: {
    height: '100%',
    flex: 1,
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'gray',
    marginLeft: 10,
    borderWidth: 1,
    fontSize: 16,
  },
  footerContainer: {
    // flex: 1 / 3,
    // alignItems: 'center',
  },
})

export default PostUploader
