import { StyleSheet } from 'react-native'
import {
  colors, spacings, fontSizes, others,
} from '@stylesheets'

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.BLACK,
    borderRadius: spacings.LARGER,
    marginTop: spacings.MEDIUM,
    paddingVertical: spacings.SMALL,
    paddingHorizontal: spacings.HUGE,
  },
  text: {
    color: colors.WHITE,
    letterSpacing: others.LETTER_SPACING,
    fontWeight: '600',
    fontSize: fontSizes.STANDARD,
    textAlign: 'center',
  },
})
