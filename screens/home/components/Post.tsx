import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { PostType } from '../../../utils/Types'
import BottomNavBar from './BottomNavBar'

const Post = ({ post }: { post: PostType }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  )
}

const PostHeader = ({ post }: { post: PostType }) => {
  return (
    <View style={styles.spaceBetweenContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.postHeaderImage} source={{ uri: post.imageUrl }} />
        <Text style={styles.postHeaderText}> {post.user}</Text>
      </View>
      <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
  )
}

const PostImage = ({ post }: { post: PostType }) => {
  return (
    <View style={styles.postImageContainer}>
      <Image style={styles.postImage} source={{ uri: post.imageUrl }} />
    </View>
  )
}

const PostFooter = ({ post }: { post: PostType }) => {
  return (
    <View style={styles.spaceBetweenContainer}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image style={styles.postFooterIcon} source={require('../../../assets/heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.postFooterIcon} source={require('../../../assets/comment.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.postFooterIcon, styles.shareIcon]}
            source={require('../../../assets/send.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image style={styles.postFooterIcon} source={require('../../../assets/save.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Likes = ({ post }: { post: PostType }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      <Text style={{ color: 'white', fontWeight: '600' }}>
        {post.likes.toLocaleString('en')} likes
      </Text>
    </View>
  )
}

const Caption = ({ post }: { post: PostType }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ color: 'white' }}>
        <Text style={{ fontWeight: '600' }}>{post.user}</Text>
        <Text>{' ' + post.caption}</Text>
      </Text>
    </View>
  )
}

const CommentSection = ({ post }: { post: PostType }) => {
  let totalComments = post.comments.length
  return (
    <View style={{ marginTop: 5 }}>
      {!!totalComments && (
        <Text style={{ color: 'gray' }}>
          View {totalComments > 1 ? `all ${totalComments} comments` : `${totalComments} comment`}
        </Text>
      )}
    </View>
  )
}

const Comments = ({ post }: { post: PostType }) => {
  return (
    <>
      {post.comments.map((comment, index) => {
        return (
          <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ color: 'white' }}>
              <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
              <Text> {comment.comment}</Text>
            </Text>
          </View>
        )
      })}
    </>
  )
}
// const Icon = ({ source }: { source: string }) => {
//   return (
//     <TouchableOpacity>
//       <Image style={styles.postFooterIcon} source={require(source)} />
//     </TouchableOpacity>
//   )
// }

const styles = StyleSheet.create({
  spaceBetweenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  postHeaderImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#FF3250',
    marginLeft: 4,
  },
  postHeaderText: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 4,
  },
  postImage: {
    height: '100%',
    resizeMode: 'cover',
  },
  postImageContainer: {
    width: '100%',
    height: 450,
  },
  postFooterIcon: {
    height: 30,
    width: 30,
    marginRight: 10,
    // marginTop: 10,
    resizeMode: 'contain',
  },
  shareIcon: {
    transform: [{ rotate: '320deg' }],
    width: 25,
    height: 25,
  },
  iconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
})
export default Post
