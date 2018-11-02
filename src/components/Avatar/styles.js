import { StyleSheet } from 'react-native'
import { colors } from '@stylesheets'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'contain',
  },
})
