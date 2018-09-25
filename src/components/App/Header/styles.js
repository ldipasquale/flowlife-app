import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    padding: spacings.LARGE,
    paddingTop: spacings.MEDIUM,
    paddingBottom: spacings.MEDIUM,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5,
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.DARK_GRAY,
    letterSpacing: 0.2,
    fontSize: fontSizes.LARGE,
  },
  leftIcon: {
    marginRight: spacings.MEDIUM,
  },
  avatarIcon: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
})
