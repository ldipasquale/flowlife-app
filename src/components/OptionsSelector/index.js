import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, View, Text } from 'react-native'
import { ItemList } from '@components'

import styles from './styles'

class OptionsSelector extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.renderOption = this.renderOption.bind(this)
  }

  handleChange(optionId) {
    const { onChange } = this.props

    return this.setState({
      selectedId: optionId,
    }, () => onChange(optionId))
  }

  renderOption(option) {
    const { selectedId } = this.state

    const { id, name, subtitle } = option

    const isSelected = selectedId === id

    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          isSelected && styles.selectedOptionContainer,
        ]}
        onPress={() => this.handleChange(id)}
      >
        <Text
          style={[
            styles.optionName,
            isSelected && styles.selectedOptionName,
          ]}
        >
          {name.toUpperCase()}
        </Text>

        <View style={styles.optionSubtitleContainer}>
          <Text
            style={[
              styles.optionSubtitle,
              isSelected && styles.selectedOptionSubtitle,
            ]}
          >
            {subtitle.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { options } = this.props

    return (
      <ItemList
        items={options}
        renderItem={option => this.renderOption(option)}
        columns={options.length}
      />
    )
  }
}

OptionsSelector.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

OptionsSelector.defaultProps = {
}

export default OptionsSelector
