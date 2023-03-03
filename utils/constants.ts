import { BottomNavIconType } from './Types'

export const logo = 'https://cdn-icons-png.flaticon.com/512/174/174855.png'

export const addIcon = {
  uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
}
export const likeIcon = {
  uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
}
export const messageIcon = {
  uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
}

export const logoutIcon = require('../assets/logout.png')

export const PlaceholderImage = require('./../assets/placeholder.jpg')

export const BottomNavIcons: BottomNavIconType[] = [
  {
    name: 'Home',
    inActive: require('../assets/home.png'),
    active: require('../assets/home-filled.png'),
  },
  {
    name: 'Search',
    inActive: require('../assets/search.png'),
    active: require('../assets/search-filled.png'),
  },
  {
    name: 'Add',
    inActive: require('../assets/add.png'),
    active: require('../assets/add-filled.png'),
  },
  {
    name: 'Reels',
    inActive: require('../assets/reels.png'),
    active: require('../assets/reels-filled.png'),
  },
  {
    name: 'Logout',
    inActive: require('../assets/logout.png'),
    active: require('../assets/logout.png'),
  },
]
