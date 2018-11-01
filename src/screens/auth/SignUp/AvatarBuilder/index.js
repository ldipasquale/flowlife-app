import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, Image, View, Text } from 'react-native'

import assets from '@assets'

import styles from './styles'

const imageUrls = {
  111: 'https://i.imgur.com/3S2VukS.png',
  121: 'https://i.imgur.com/SBDTrdz.png',
  131: 'https://i.imgur.com/M9UEcRy.png',
  211: 'https://i.imgur.com/lin3ESr.png',
  221: 'https://i.imgur.com/vJ6eQzS.png',
  231: 'https://i.imgur.com/BmkQfRZ.png',
  311: 'https://i.imgur.com/5TCL9tF.png',
  321: 'https://i.imgur.com/sIAyygo.png',
  331: 'https://i.imgur.com/7Ak8kvU.png',
}

class AvatarBuilder extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      capId: 1,
      shoesId: 1,
      glassesId: 1,
    }

    this.getImageUrl = this.getImageUrl.bind(this)
    this.handlePressPrevCap = this.handlePressPrevCap.bind(this)
    this.handlePressNextCap = this.handlePressNextCap.bind(this)
    this.handlePressPrevShoes = this.handlePressPrevShoes.bind(this)
    this.handlePressNextShoes = this.handlePressNextShoes.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    return this.handleChange()
  }

  getImageUrl() {
    const { shoesId, capId, glassesId } = this.state

    const imageId = `${capId}${shoesId}${glassesId}`

    return imageUrls[imageId]
  }

  handlePressPrevCap() {
    const { capId } = this.state

    const newCapId = capId === 1 ? 3 : capId - 1

    return this.setState({
      capId: newCapId,
    }, this.handleChange)
  }

  handlePressNextCap() {
    const { capId } = this.state

    const newCapId = capId === 3 ? 1 : capId + 1

    return this.setState({
      capId: newCapId,
    }, this.handleChange)
  }

  handlePressPrevShoes() {
    const { shoesId } = this.state

    const newShoesId = shoesId === 1 ? 3 : shoesId - 1

    return this.setState({
      shoesId: newShoesId,
    }, this.handleChange)
  }

  handlePressNextShoes() {
    const { shoesId } = this.state

    const newShoesId = shoesId === 3 ? 1 : shoesId + 1

    return this.setState({
      shoesId: newShoesId,
    }, this.handleChange)
  }

  handleChange() {
    const { onChange } = this.props

    return onChange(this.getImageUrl())
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: this.getImageUrl() }}
          />

          <View style={[styles.arrows, styles.capArrows]}>
            <TouchableOpacity onPress={this.handlePressPrevCap}>
              <Image source={assets.prev} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePressNextCap}>
              <Image source={assets.next} />
            </TouchableOpacity>
          </View>

          <View style={[styles.arrows, styles.shoesArrows]}>
            <TouchableOpacity onPress={this.handlePressPrevShoes}>
              <Image source={assets.prev} />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handlePressNextShoes}>
              <Image source={assets.next} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

AvatarBuilder.propTypes = {
  onChange: PropTypes.func.isRequired,
}

function withAvatarBuilder({ stylesheet, label, onChange }) { // eslint-disable-line react/prop-types
  const formGroupStyle = stylesheet.formGroup.normal
  const controlLabelStyle = stylesheet.controlLabel.normal
  const textboxViewStyle = stylesheet.textboxView.normal

  return (
    <View style={formGroupStyle}>
      <Text style={controlLabelStyle}>{label}</Text>
      <View style={textboxViewStyle}>
        <AvatarBuilder onChange={onChange} />
      </View>
    </View>
  )
}

export default withAvatarBuilder
