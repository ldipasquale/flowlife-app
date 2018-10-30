import { StyleSheet } from 'react-native'
import { spacings, colors, fontSizes, others } from '@stylesheets'

export default StyleSheet.create({
  inputsContainer: {
    marginTop: spacings.STANDARD,
    marginBottom: spacings.LARGE,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  firstInputsContainer: {
    marginBottom: 0,
  },
  money: {
    color: colors.GREEN,
    fontSize: fontSizes.XLARGE,
    fontWeight: '600',
    letterSpacing: others.LETTER_SPACING,
  },
  moneyCurrency: {
    paddingBottom: spacings.STANDARD,
  },
  textInput: {
    height: spacings.XHUGE,
    borderBottomWidth: 2,
    borderBottomColor: colors.GREEN,
  },
  limit: {
    paddingHorizontal: spacings.XSMALL,
    paddingBottom: spacings.STANDARD,
    color: colors.DARK_GRAY,
    letterSpacing: others.LETTER_SPACING,
  },
  description: {
    paddingHorizontal: spacings.XSMALL,
    paddingBottom: spacings.STANDARD,
    color: colors.DARK_GRAY,
    fontSize: fontSizes.STANDARD,
    letterSpacing: others.LETTER_SPACING,
  },
})
