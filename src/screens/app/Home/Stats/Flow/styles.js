import { StyleSheet } from 'react-native'
import { colors, spacings } from '@stylesheets'

const flowBarHeight = spacings.STANDARD
const color = colors.ORANGE

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flowBar: {
    marginTop: spacings.SMALL,
    backgroundColor: colors.LIGHT_GRAY,
    height: flowBarHeight,
    borderRadius: flowBarHeight,
    flexDirection: 'row',
  },
  flowValue: {
    backgroundColor: color,
    borderTopLeftRadius: flowBarHeight,
    borderBottomLeftRadius: flowBarHeight,
    height: flowBarHeight,
  },
})
