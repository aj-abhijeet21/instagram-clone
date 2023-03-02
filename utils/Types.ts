import { ImageSourcePropType } from 'react-native'

export type PostType = {
  id: string
  imageUrl: string
  profile_picture: string
  user: string
  profilePic: string
  likes_by_user: string[]
  caption: string
  comments: Comment[]
}

export type Comment = {
  user: string
  comment: string
}

export type BottomNavIconType = {
  name: string
  active: ImageSourcePropType
  inActive: ImageSourcePropType
}
