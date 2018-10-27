import Toast from 'react-native-root-toast'

import { colors, spacings, fontSizes } from '@stylesheets'

export default {
  show: message => Toast.show(message, {
    backgroundColor: colors.BLACK,
    containerStyle: {
      paddingHorizontal: spacings.MEDIUM,
      paddingVertical: spacings.SMALL,
    },
    textStyle: {
      fontSize: fontSizes.STANDARD,
    },
  }),
}
