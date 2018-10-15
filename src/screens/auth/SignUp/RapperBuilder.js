import React from 'react'
import { View, Text } from 'react-native'

import { Card } from '@components'

class RapperBuilder extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    const { onChange } = this.props

    return onChange('asd')
  }

  render() {
    return (
      <View>
        <Card onPress={this.handlePress}>
          <Text>asdasdasdas</Text>
        </Card>
      </View>
    )
  }
}

function withRapperBuilder(locals) {
  const { stylesheet, label, onChange } = locals

  const formGroupStyle = stylesheet.formGroup.normal
  const controlLabelStyle = stylesheet.controlLabel.normal
  const textboxViewStyle = stylesheet.textboxView.normal

  return (
    <View style={formGroupStyle}>
      <Text style={controlLabelStyle}>{label}</Text>
      <View style={textboxViewStyle}>
        <RapperBuilder
          onChange={onChange}
        />
      </View>
    </View>
  )
}

export default withRapperBuilder
