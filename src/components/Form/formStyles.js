import { StyleSheet } from 'react-native'
import { colors, spacings, fontSizes, others } from '@stylesheets'

var LABEL_COLOR = colors.BLACK
var LABEL_FONT_SIZE = fontSizes.STANDARD
var INPUT_COLOR = colors.DARK_GRAY
var ERROR_COLOR = colors.RED
var HELP_COLOR = "#999999"
var BORDER_COLOR = "#cccccc"
var DISABLED_COLOR = "#777777"
var DISABLED_BACKGROUND_COLOR = "#eeeeee"
var FONT_SIZE = 13
var FONT_WEIGHT = "300"
var LETTER_SPACING = 0.25

export default Object.freeze({
  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: LABEL_FONT_SIZE,
      marginBottom: 0,
      fontWeight: FONT_WEIGHT,
      letterSpacing: LETTER_SPACING
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: LABEL_FONT_SIZE,
      marginBottom: 0,
      fontWeight: FONT_WEIGHT,
      letterSpacing: LETTER_SPACING
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: LABEL_FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: LABEL_FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: LABEL_FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textboxView: {
    normal: {},
    error: {},
    notEditable: {}
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      paddingVertical: spacings.MEDIUM,
      paddingTop: spacings.STANDARD,
      paddingHorizontal: spacings.STANDARD,
      letterSpacing: LETTER_SPACING,
      marginBottom: 5,
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      paddingVertical: spacings.MEDIUM,
      paddingTop: spacings.STANDARD,
      paddingHorizontal: spacings.STANDARD,
      letterSpacing: LETTER_SPACING,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      paddingVertical: spacings.MEDIUM,
      paddingTop: spacings.STANDARD,
      paddingHorizontal: 7,
      marginBottom: 5,
      color: DISABLED_COLOR,
      letterSpacing: LETTER_SPACING,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerContainer: {
    normal: {
      marginBottom: 4,
    },
    error: {
      marginBottom: 4,
    },
    open: {
      // Alter styles when select container is open
    }
  },
  select: {
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    error: {
      height: 44,
      flexDirection: "row",
      alignItems: "center"
    },
    active: {
      borderBottomWidth: 1,
      borderColor: BORDER_COLOR
    },
    notEditable: {
      height: 44,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4,
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {},
    notEditable: {
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
})