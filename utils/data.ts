import { PostType } from './Types'

export const users = [
  {
    name: 'Expedita Caldeira',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
  {
    name: 'Crystal Caldeira',
    image: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
  {
    name: 'Alice ',
    image: 'https://randomuser.me/api/portraits/women/62.jpg',
  },
  {
    name: 'Expedita J',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Jean Caldeira',
    image: 'https://randomuser.me/api/portraits/women/69.jpg',
  },
]

export const posts: PostType[] = [
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
    user: users[0].name,
    likes: 1232,
    caption: 'THis is a caption',
    profilePic: users[0].image,
    comments: [
      {
        user: 'thebostonguy',
        comment: 'Wow! this looks good',
      },
      {
        user: 'notThatGuy',
        comment: 'My 1st comment',
      },
    ],
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
    user: users[0].name,
    likes: 1232,
    caption: 'THis is a caption',
    profilePic: users[0].image,
    comments: [
      {
        user: 'thebostonguy',
        comment: 'Wow! this looks good',
      },
      {
        user: 'notThatGuy',
        comment: 'My 1st comment',
      },
    ],
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
    user: users[0].name,
    likes: 1232,
    caption: 'THis is a caption',
    profilePic: users[0].image,
    comments: [
      {
        user: 'thebostonguy',
        comment: 'Wow! this looks good',
      },
      {
        user: 'notThatGuy',
        comment: 'My 1st comment',
      },
    ],
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/81.jpg',
    user: users[0].name,
    likes: 1232,
    caption: 'THis is a caption',
    profilePic: users[0].image,
    comments: [],
  },
]
