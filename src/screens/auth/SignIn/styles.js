import { StyleSheet } from 'react-native'
import { spacings, colors, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: '50%',
    alignItems: 'center',
  },
  headerImage: {
    position: 'absolute',
    bottom: 0,
  },
  logoImage: {
    marginTop: spacings.XHUGE,
    width: 197,
    height: 116,
  },
  container: {
    flex: 1,
  },
  contentSpacing: {
    flex: 8,
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
