import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, TextInput as RawTextInput } from 'react-native'

import styles from './styles'

class TextInput extends React.PureComponent {
  render() {
    const { value, onChange, widthPerCharacter, style } = this.props

    const processedValue = value.toString()

    return (
      <RawTextInput
        style={[
          styles.container,
          style !== -1 && style,
          { width: processedValue.length * widthPerCharacter },
        ]}
        underlineColorAndroid="transparent"
        value={processedValue}
        onChangeText={onChange}
      />
    )
  }
}

TextInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func.isRequired,
  widthPerCharacter: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

TextInput.defaultProps = {
  value: null,
  widthPerCharacter: 15,
  style: -1,
}

export default TextInput
