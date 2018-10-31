import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes, others } from '@stylesheets'

export default StyleSheet.create({
  container: {
  },
  tagContainer: {
  },
  stickyTagContainer: {
    position: 'absolute',
    right: spacings.MEDIUM * -1,
    top: spacings.MEDIUM * -1,
    borderBottomLeftRadius: others.BORDER_RADIUS,
    paddingVertical: 1,
    paddingHorizontal: spacings.TINY,
  },
  centeredTagContainer: {
    borderBottomLeftRadius: others.BORDER_RADIUS,
    borderBottomRightRadius: others.BORDER_RADIUS,
    alignSelf: 'center',
    marginBottom: spacings.SMALL,
    paddingHorizontal: spacings.XSMALL,
    paddingVertical: spacings.TINY,
  },
  image: {
    alignSelf: 'center',
    marginTop: spacings.STANDARD,
    marginBottom: spacings.MEDIUM,
    height: spacings.XXHUGE,
    width: spacings.XXHUGE,
  },
  tag: {
    color: colors.WHITE,
    fontSize: fontSizes.TINY,
    fontWeight: '500',
    letterSpacing: others.LETTER_SPACING,
  },
  bigTag: {
    fontSize: fontSizes.XXSMALL,
  },
  title: {
    marginBottom: spacings.TINY,
    fontSize: fontSizes.XSMALL,
    letterSpacing: others.LETTER_SPACING,
    color: colors.GRAY,
    fontWeight: '600',
    textAlign: 'center',
  },
  bigTitle: {
    fontSize: fontSizes.SMALL,
  },
  price: {
    letterSpacing: others.LETTER_SPACING,
    fontSize: fontSizes.SMALL,
    color: colors.GREEN,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: spacings.TINY,
  },
  bigPrice: {
    fontSize: fontSizes.STANDARD,
  },
  flowPrice: {
    letterSpacing: others.LETTER_SPACING,
    fontSize: fontSizes.XSMALL,
    color: colors.ORANGE,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: spacings.TINY,
  },
  bigFlowPrice: {
    marginTop: spacings.XSMALL,
    fontSize: fontSizes.SMALL,
  },
})
