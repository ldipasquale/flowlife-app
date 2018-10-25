import { StyleSheet } from 'react-native'
import {
  colors, spacings, fontSizes, others,
} from '@stylesheets'

export default StyleSheet.create({
  managerIcon: {
    marginBottom: spacings.STANDARD,
  },
  managerTitle: {
    marginBottom: spacings.LARGE,
  },
  tip: {
    color: colors.DARK_GREEN,
    marginBottom: spacings.XLARGE,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: fontSizes.LARGE,
    lineHeight: fontSizes.LARGE * 1.35,
    paddingLeft: spacings.LARGE,
    paddingRight: spacings.LARGE,
  },
})
