import { StyleSheet } from 'react-native'

import { spacings, colors, others } from '@stylesheets'

export default StyleSheet.create({
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: spacings.SMALL,
  },
  limit: {
    paddingLeft: spacings.XSMALL,
    paddingBottom: spacings.XSMALL,
    color: colors.DARK_GRAY,
    letterSpacing: others.LETTER_SPACING,
  },
  plusLimitContainer: {
    marginLeft: spacings.SMALL,
    paddingBottom: spacings.SMALL,
  },
})
