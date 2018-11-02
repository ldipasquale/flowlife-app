import { StyleSheet } from 'react-native'
import { colors, spacings, others } from '@stylesheets'

export default StyleSheet.create({
  appContainer: {
    backgroundColor: colors.VIOLET,
    flex: 1,
  },
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
    paddingBottom: spacings.LARGE,
  },
  content: {
    flex: 1,
    top: others.BORDER_RADIUS * -1,
  },
  contentWithPadding: {
    padding: spacings.LARGE,
    top: 0,
  },
})
