import { StyleSheet } from 'react-native'
import { colors, spacings , others} from '@stylesheets'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: others.BORDER_RADIUS,
    padding: spacings.MEDIUM,
    marginBottom: spacings.LARGE,
    elevation: 3,
    shadowColor: colors.BLACK,
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: {
      height: 8,
      width: 0,
    },
  },
})
