import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { addIcon, likeIcon, messageIcon } from '../../../utils/Constants'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('./../../../assets/logo-Instagram.png')} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image style={styles.icon} source={addIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={likeIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.badgeCount}>21</Text>
          </View>
          <Image style={styles.icon} source={messageIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    backgroundColor: '#FF3250',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  badgeCount: {
    color: 'white',
    fontWeight: '600',
  },
})

export default Header
