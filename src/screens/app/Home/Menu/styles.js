import { StyleSheet } from 'react-native'
import { spacings } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 0.3,
  },
  card: {
    padding: 0,
    paddingTop: spacings.MEDIUM,
    paddingBottom: spacings.MEDIUM,
    alignItems: 'center',
  },
  itemIcon: {
    height: spacings.XHUGE,
    resizeMode: 'contain',
    marginBottom: spacings.MEDIUM,
  },
})
