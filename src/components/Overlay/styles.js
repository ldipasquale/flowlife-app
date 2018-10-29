import { StyleSheet } from 'react-native'
import { colors, spacings } from '@stylesheets'

export default StyleSheet.create({
  fullScreenContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: colors.BLACK,
    zIndex: 2,
  },
  contentContainer: {
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    top: spacings.XLARGE,
    right: spacings.XLARGE,
    zIndex: 999,
    backgroundColor: colors.WHITE,
    padding: spacings.MEDIUM,
    borderRadius: spacings.LARGER,
  },
})
