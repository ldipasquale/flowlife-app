import { StyleSheet } from 'react-native'
import { spacings } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 0.3,
    position: 'relative',
  },
  alert: {
    position: 'absolute',
    top: spacings.SMALL * -1,
    right: spacings.SMALL * -1,
    elevation: 4,
    zIndex: 1,
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
