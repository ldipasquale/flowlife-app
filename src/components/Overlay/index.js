import React from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Easing, TouchableOpacity, Image } from 'react-native'

import { withNavigation } from '@navigation'

import assets from '@assets'

import styles from './styles'

const DEFAULT_OVERLAY_OPACITY = 0.95

class Overlay extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      backgroundAnimation: new Animated.Value(0),
    }

    this.animateBackground = this.animateBackground.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    const { onOpen } = this.props

    if (onOpen) {
      onOpen()
    }

    return this.animateBackground(DEFAULT_OVERLAY_OPACITY).start()
  }

  handleClose() {
    const { navigation, onClose } = this.props

    return this.animateBackground(0).start(() => {
      navigation.goBack()

      if (onClose) {
        onClose()
      }
    })
  }

  animateBackground(opacityValue) {
    const { backgroundAnimation } = this.state

    return Animated.timing(backgroundAnimation, {
      toValue: opacityValue,
      duration: 300,
    })
  }

  render() {
    const { renderContent } = this.props
    const { backgroundAnimation } = this.state

    return (
      <React.Fragment>
        <Animated.View
          style={[
            styles.fullScreenContainer,
            styles.container,
            { opacity: backgroundAnimation },
          ]}
        />

        <View
          style={[
            styles.fullScreenContainer,
            styles.contentContainer,
          ]}
        >
          <TouchableOpacity
            style={styles.closeIconContainer}
            onPress={this.handleClose}
            activeOpacity={0.8}
          >
            <Image source={assets.greenCross} />
          </TouchableOpacity>

          {renderContent({ handleClose: this.handleClose })}
        </View>
      </React.Fragment>
    )
  }
}

Overlay.propTypes = {
  navigation: PropTypes.object.isRequired,
  renderContent: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

Overlay.defaultProps = {
  onOpen: null,
  onClose: null,
}

export default withNavigation(Overlay)
