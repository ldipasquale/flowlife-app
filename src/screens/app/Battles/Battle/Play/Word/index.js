import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, View, Text } from 'react-native'

import styles from './styles'

class Word extends React.PureComponent {
  constructor(props) { 
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    const { onPress, children } = this.props

    return onPress(children)
  }

  render() {
    const { children, isHighlighted } = this.props

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.handlePress}
      >
        <View
          style={[
            styles.cardContainer,
            isHighlighted && styles.highlightedCardContainer,
          ]}
        >
          <Text
            style={[
              styles.word,
              isHighlighted && styles.highlightedWord,
            ]}
          >
            {children.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Word.propTypes = {
  children: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
  onPress: PropTypes.func,
}

Word.defaultProps = {
  isHighlighted: false,
}

export default Word
