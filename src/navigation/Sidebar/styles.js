import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes } from '@stylesheets'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.VIOLET,
    alignItems: 'center',
    padding: spacings.XLARGE,
    marginBottom: spacings.XLARGE,
  },
  avatarIcon: {
    marginBottom: spacings.MEDIUM,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: colors.WHITE,
    fontSize: fontSizes.STANDARD,
    marginRight: spacings.STANDARD,
  },
  item: {
    paddingHorizontal: spacings.LARGER,
    paddingVertical: 0,
    borderBottomColor: colors.LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  itemIconContainer: {
    marginHorizontal: 0,
    marginRight: spacings.MEDIUM,
  },
  itemLabel: {
    fontSize: fontSizes.STANDARD,
    marginHorizontal: 0,
    letterSpacing: 0.25,
    fontWeight: '400',
  },
})
