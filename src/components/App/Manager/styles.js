import { StyleSheet } from 'react-native'
import { spacings } from '@stylesheets'

export default StyleSheet.create({
  button: {
    position: 'absolute',
    right: spacings.STANDARD,
    bottom: spacings.STANDARD,
    zIndex: 1,
    elevation: 3,
    borderRadius: 100,
  },
})
