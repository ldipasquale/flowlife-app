import { StyleSheet } from 'react-native'
import {
  colors, spacings, fontSizes, others,
} from '@stylesheets'

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.BLACK,
    borderRadius: spacings.LARGER,
    marginTop: spacings.STANDARD,
    padding: spacings.STANDARD,
    paddingLeft: spacings.HUGE,
    paddingRight: spacings.HUGE,
  },
  text: {
    color: colors.WHITE,
    letterSpacing: others.LETTER_SPACING,
    fontWeight: '600',
    fontSize: fontSizes.STANDARD,
    textAlign: 'center',
  },
})
