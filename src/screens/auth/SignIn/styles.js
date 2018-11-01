import { StyleSheet } from 'react-native'
import { spacings, colors, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  logoImage: {
    marginTop: spacings.XHUGE,
    marginBottom: spacings.XXHUGE * 2,
    width: 197,
    height: 116,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  createNewUser: {
    marginTop: spacings.MEDIUM,
    textAlign: 'center',
    color: colors.BLUE,
    fontSize: fontSizes.STANDARD,
  },
})
