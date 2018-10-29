import { StyleSheet } from 'react-native'
import { colors, spacings } from '@stylesheets'

export default StyleSheet.create({
  background: {
    backgroundColor: colors.VIOLET,
    flex: 1,
    padding: spacings.MEDIUM,
  },
  container: {
    backgroundColor: colors.LIGHTEN_GRAY,
    borderRadius: 5,
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: spacings.LARGE,
  },
})
