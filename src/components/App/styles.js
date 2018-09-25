import { StyleSheet } from 'react-native'
import { colors, spacings } from '@stylesheets'

export default StyleSheet.create({
  background: {
    backgroundColor: colors.VIOLET,
    flex: 1,
    flexDirection: 'column',
    padding: spacings.MEDIUM,
  },
  container: {
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    padding: spacings.LARGE,
    flex: 1,
  },
  managerButton: {
    position: 'absolute',
    right: spacings.STANDARD,
    zIndex: 1,
    elevation: 3,
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.BLACK,
    zIndex: 2,
  },
  managerTipContainer: {
    position: 'absolute',
    left: spacings.LARGE,
    right: spacings.LARGE,
    bottom: spacings.LARGE,
    zIndex: 3,
  },
})
