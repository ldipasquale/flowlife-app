import { StyleSheet } from 'react-native'
import { colors, spacings, others } from '@stylesheets'

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
    flexDirection: 'row',
  },
  contentContainerWrapper: {
    flex: 1,
    padding: spacings.LARGE,
    paddingTop: 0,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 0,
    right: spacings.LARGE,
    zIndex: 999,
    backgroundColor: colors.DARK_GREEN,
    padding: spacings.STANDARD,
    borderRadius: spacings.LARGER,
  },
  content: {
    backgroundColor: colors.WHITE,
    borderRadius: others.BORDER_RADIUS,
    margin: spacings.STANDARD,
    padding: spacings.LARGE,
  },
})
