import { StyleSheet } from 'react-native'
import { fontSizes, colors, spacings, others } from '@stylesheets'

export default StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderRadius: others.BIG_BORDER_RADIUS,
    borderColor: colors.GRAY,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOptionContainer: {
    borderWidth: 3,
    borderColor: colors.GREEN,
  },
  optionName: {
    letterSpacing: others.LETTER_SPACING,
    fontWeight: '600',
    fontSize: fontSizes.SMALL,
    color: colors.GRAY,
  },
  selectedOptionName: {
    color: colors.GREEN,
  },
  optionSubtitleContainer: {
    position: 'absolute',
    right: spacings.XSMALL,
    bottom: spacings.XSMALL,
  },
  optionSubtitle: {
    fontSize: fontSizes.XXSMALL,
    fontWeight: '600',
    color: colors.GRAY,
  },
  selectedOptionSubtitle: {
    color: colors.GREEN,
  },
})
