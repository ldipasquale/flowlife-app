import { StyleSheet } from 'react-native'
import { spacings, others } from '@stylesheets'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: spacings.LARGE,
  },
  image: {
    width: 95,
    height: 150,
    borderRadius: others.BIG_BORDER_RADIUS,
  },
  arrows: {
    position: 'absolute',
    left: -20,
    right: -20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  capArrows: {
    top: 6,
  },
  shoesArrows: {
    top: 130,
  },
})
