import { StyleSheet } from 'react-native'
import {
  colors, spacings, fontSizes, others,
} from '@stylesheets'

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  standardContainer: {
    marginTop: spacings.MEDIUM,
    paddingVertical: spacings.SMALL,
    paddingHorizontal: spacings.HUGE,
    backgroundColor: colors.BLACK,
    borderRadius: spacings.LARGER,
  },
  smallContainer: {
    paddingVertical: spacings.XSMALL,
    paddingHorizontal: spacings.LARGE,
    borderColor: colors.BLACK,
    borderWidth: 2,
    borderRadius: spacings.SMALL,
  },
  text: {
    letterSpacing: others.LETTER_SPACING,
    fontWeight: '600',
    textAlign: 'center',
  },
  standardText: {
    color: colors.WHITE,
    fontSize: fontSizes.STANDARD,
  },
  smallText: {
    fontSize: fontSizes.XXSMALL,
  },
})
