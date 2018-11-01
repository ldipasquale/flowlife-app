import { StyleSheet } from 'react-native'
import { spacings } from '@stylesheets'

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  firstRow: {
    marginBottom: spacings.LARGE,
  },
  firstColumn: {
    flex: 2,
  },
  secondColumn: {
    flex: 1,
  },
})
