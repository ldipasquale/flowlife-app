import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes, others } from '@stylesheets'

export default StyleSheet.create({
  container: {
    marginBottom: spacings.XXHUGE,
  },
  cardContainer: {
    paddingVertical: spacings.STANDARD,
    paddingHorizontal: spacings.XHUGE,
    borderRadius: spacings.LARGER,
    backgroundColor: colors.WHITE,
  },
  highlightedCardContainer: {
    backgroundColor: colors.ORANGE,
  },
  word: {
    color: colors.GRAY,
    letterSpacing: others.BIG_LETTER_SPACING,
    fontWeight: '600',
    fontSize: fontSizes.STANDARD,
    textAlign: 'center',
  },
  highlightedWord: {
    color: colors.WHITE,
  },
})
