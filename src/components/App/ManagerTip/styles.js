import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes, others } from '@stylesheets'

export default StyleSheet.create({
  closeIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: colors.DARK_GREEN,
    padding: spacings.STANDARD,
    borderRadius: spacings.LARGER,
  },
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: others.BORDER_RADIUS,
    margin: spacings.STANDARD,
    padding: spacings.LARGE,
    alignItems: 'center',
  },
  managerIcon: {
    marginBottom: spacings.STANDARD,
  },
  managerTitle: {
    marginBottom: spacings.LARGE,
  },
  tip: {
    color: colors.DARK_GREEN,
    marginBottom: spacings.XLARGE,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: fontSizes.LARGE,
    lineHeight: fontSizes.LARGE * 1.35,
    paddingLeft: spacings.LARGE,
    paddingRight: spacings.LARGE,
  },
})
