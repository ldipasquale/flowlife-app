import { StyleSheet } from 'react-native'
import { spacings } from '@stylesheets'

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  firstRow: {
    marginBottom: spacings.LARGE,
  },
  moneyContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  levelContainer: {
    flex: 1,
    flexDirection: 'column',
  },
})
