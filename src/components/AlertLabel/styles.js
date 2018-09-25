import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes, others } from '@stylesheets'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    borderRadius: 100,
    width: spacings.LARGE,
    height: spacings.LARGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.WHITE,
    fontSize: fontSizes.XXSMALL,
  },
})
