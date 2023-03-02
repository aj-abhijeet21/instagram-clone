import { View, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { BottomNavIconType } from '../../../utils/Types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-elements'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Navigation'

const BottomNavBar = ({
  icons,
  navigator,
}: {
  icons: BottomNavIconType[]
  navigator: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>
}) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({ icon }: { icon: BottomNavIconType }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveTab(icon.name)
          if (icon.name === 'Add') {
            navigator.navigation.navigate('NewPostScreen')
          }
        }}
      >
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
