import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacings.XSMALL,
    marginTop: spacings.TINY,
    marginBottom: spacings.TINY,
  },
  bullet: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: colors.GRAY,
    marginRight: spacings.SMALL,
  },
  title: {
    fontWeight: '500',
    fontSize: fontSizes.SMALL,
    color: colors.DARK_GRAY,
  },
  content: {
    fontSize: fontSizes.SMALL,
    color: colors.DARK_GRAY,
  },
})