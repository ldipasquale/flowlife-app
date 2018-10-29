import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes, others } from '@stylesheets'

export default StyleSheet.create({
  timerContainer: {
    position: 'absolute',
    top: spacings.XLARGE,
    left: spacings.XLARGE,
    zIndex: 5,
  },
  timer: {
    fontSize: fontSizes.XLARGE,
    color: colors.RED,
    letterSpacing: others.LETTER_SPACING,
    fontWeight: '600',
  },
  wordsContainer: {
    marginTop: spacings.XXHUGE,
  },
})
