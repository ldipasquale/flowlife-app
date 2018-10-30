import { StyleSheet } from 'react-native'

import { spacings, colors, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    margin: spacings.LARGE,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankingNumber: {
    width: spacings.XLARGE,
    height: spacings.XLARGE,
    borderRadius: spacings.XLARGE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacings.MEDIUM,
  },
  rankingNumberOne: {
    backgroundColor: colors.GOLDEN,
  },
  rankingNumberTwo: {
    backgroundColor: colors.SILVER,
  },
  rankingNumberThree: {
    backgroundColor: colors.BRONZE,
  },
  rankingNumberText: {
    color: colors.WHITE,
    fontSize: fontSizes.SMALL,
  },
  userName: {
  },
})
