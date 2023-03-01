import { ImageSourcePropType } from 'react-native'

export type PostType = {
  imageUrl: string
  user: string
  profilePic: string
  likes: number
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
