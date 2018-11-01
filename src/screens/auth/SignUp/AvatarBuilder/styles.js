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
    left: spacings.HUGE * -1,
    right: spacings.HUGE * -1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  arrowContainer: {
    width: spacings.HUGE,
    height: spacings.HUGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: spacings.HUGE,
  },
  capArrows: {
    top: 0,
  },
  shoesArrows: {
    top: 120,
  },
})
