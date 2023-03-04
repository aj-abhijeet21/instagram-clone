import { View, StyleSheet, Image } from 'react-native'

const ImageViewer = ({ selectedImage }: { selectedImage?: string }) => {
  const imageSource =
    selectedImage !== undefined
      ? { uri: selectedImage }
      : require('../../../assets/placeholder.jpg')

  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 220,
    borderRadius: 4,
  },
})
export default ImageViewer
