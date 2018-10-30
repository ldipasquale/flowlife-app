import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    paddingLeft: spacings.MEDIUM,
    paddingRight: spacings.LARGE,
    paddingVertical: spacings.STANDARD,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.DARKEN_GRAY,
    letterSpacing: 0.2,
    fontSize: fontSizes.LARGE,
  },
  leftIcon: {
    marginRight: spacings.MEDIUM,
    width: spacings.HUGE,
    height: spacings.HUGE,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
