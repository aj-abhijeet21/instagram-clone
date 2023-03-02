import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation'
import Header from './components/Header'
import Stories from './components/Stories'
import Post from './components/Post'
import { posts } from '../../utils/data'
import BottomNavBar from './components/BottomNavBar'
import { BottomNavIcons } from '../../utils/Constants'
import { query, collectionGroup, where, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../../utils/FirebaseConfig'

export type HomeWrapperProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const HomeWrapper = (props: HomeWrapperProps) => {
  const [posts, setPosts] = useState<any[]>([])
  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const posts = query(collectionGroup(db, 'posts'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(posts)
    const data: any[] = []
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() })
    })
    setPosts(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={props.navigation} route={props.route} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <BottomNavBar icons={BottomNavIcons} navigator={props} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
})

export default HomeWrapper
