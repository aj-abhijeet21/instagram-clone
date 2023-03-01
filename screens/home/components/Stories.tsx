import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { users } from '../../../utils/data'

const Stories = () => {
  return (
    <View style={{ marginBottom: 16 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user, index) => (
          <View key={index} style={styles.storyContainer}>
            <Image style={styles.storyImage} source={{ uri: user.image }} />
            <Text style={{ color: 'white' }}>
              {user.name.length > 11 ? user.name.slice(0, 10) + '...' : user.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  storyImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FF3250',
    marginBottom: 4,
  },
  storyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
})

export default Stories
