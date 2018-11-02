import { StyleSheet } from 'react-native'
import { spacings, colors, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: spacings.STANDARD,
    alignItems: 'center',
  },
  relaxIcon: {
    marginLeft: spacings.STANDARD,
    marginRight: spacings.LARGE,
  },
  textContainer: {
    paddingRight: spacings.XXXHUGE,
  },
  text: {
    color: colors.LILAC,
    fontSize: fontSizes.SMALL,
  },
})
