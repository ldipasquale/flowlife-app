import { StyleSheet } from 'react-native'
import { colors, spacings } from '@stylesheets'

export default StyleSheet.create({
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.BLACK,
    zIndex: 2,
  },
  button: {
    position: 'absolute',
    right: spacings.STANDARD,
    zIndex: 1,
    elevation: 3,
    borderRadius: 100,
  },
  tipContainer: {
    position: 'absolute',
    left: spacings.LARGE,
    right: spacings.LARGE,
    bottom: spacings.LARGE,
    zIndex: 3,
  },
})
