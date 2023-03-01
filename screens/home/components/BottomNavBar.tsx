import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { BottomNavIconType } from '../../../utils/Types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-elements'

const BottomNavBar = ({ icons }: { icons: BottomNavIconType[] }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({ icon }: { icon: BottomNavIconType }) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          style={[styles.icon, icon.name === 'Profile' ? styles.profilePic : null]}
          source={activeTab === icon.name ? icon.active : icon.inActive}
        />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation={'vertical'} />
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#000',
  },
  profilePic: {
    borderRadius: 50,
    borderColor: '#FFF',
    borderWidth: 2,
  },
})

export default BottomNavBar
