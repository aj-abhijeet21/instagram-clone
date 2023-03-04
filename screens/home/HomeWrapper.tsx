import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation'
import Header from './components/Header'
import Stories from './components/Stories'
import Post from './components/Post'
import BottomNavBar from './components/BottomNavBar'
import { BottomNavIcons } from '../../utils/Constants'
import { query, collectionGroup, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../../utils/FirebaseConfig'

export type HomeWrapperProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const HomeWrapper = (props: HomeWrapperProps) => {
  const [posts, setPosts] = useState<any[]>([])
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collectionGroup(db, 'posts'), orderBy('createdAt', 'desc')),
      (posts) => {
        let result: any[] = []
        posts.forEach((post) => result.push({ id: post.id, ...post.data() }))
        setPosts(result)
      }
    )

    return () => unsubscribe()
  }, [db])

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
