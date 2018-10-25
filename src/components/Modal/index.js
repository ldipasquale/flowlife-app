import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { Dimensions, View, Image, Animated, Easing, TouchableOpacity } from 'react-native'

import assets from '@assets'
import { spacings } from '@stylesheets'

import styles from './styles'

const HIDDEN_CONTENT_BOTTOM_POSITION = Dimensions.get('screen').height
const DEFAULT_OVERLAY_OPACITY = 0.8

class Modal extends React.PureComponent {
  static alignItems = {
    center: 'center',
    bottom: 'flex-end',
  }

  static mapAlignmentToAlignItems(alignment) {
    return Modal.alignItems[alignment]
  }

  constructor(props) {
    super(props)

    this.state = {
      contentAnimation: new Animated.Value(HIDDEN_CONTENT_BOTTOM_POSITION),
      overlayAnimation: new Animated.Value(0),
    }

    this.animateContent = this.animateContent.bind(this)
    this.animateOverlay = this.animateOverlay.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    const { onOpen } = this.props

    if (onOpen) {
      onOpen()
    }

    return this.animateOverlay(DEFAULT_OVERLAY_OPACITY).start(() => (
      this.animateContent(0).start()
    ))
  }

  handleClose() {
    const { navigation } = this.props

    return this.animateContent(HIDDEN_CONTENT_BOTTOM_POSITION).start(() => (
      this.animateOverlay(0).start(() => navigation.goBack())
    ))
  }

  animateContent(topPosition) {
    const { contentAnimation } = this.state

    return Animated.timing(contentAnimation, {
      toValue: topPosition,
      easing: Easing.cubic,
      duration: 700,
    })
  }

  animateOverlay(opacityValue) {
    const { overlayAnimation } = this.state

    return Animated.timing(overlayAnimation, {
      toValue: opacityValue,
      duration: 300,
    })
  }

  render() {
    const { renderContent, alignment } = this.props
    const { overlayAnimation, contentAnimation } = this.state

    return (
      <React.Fragment>
        <Animated.View
          style={[
            styles.fullScreenContainer,
            styles.container,
            { opacity: overlayAnimation },
          ]}
        />

        <Animated.View
          style={[
            styles.fullScreenContainer,
            styles.contentContainer,
            {
              transform: [{ translateY: contentAnimation }],
              alignItems: Modal.mapAlignmentToAlignItems(alignment),
            },
          ]}
        >
          <View style={styles.contentContainerWrapper}>
            <TouchableOpacity
              style={styles.closeIconContainer}
              onPress={this.handleClose}
              activeOpacity={0.8}
            >
              <Image source={assets.cross} />
            </TouchableOpacity>

            <View style={styles.content}>
              {renderContent({ handleClose: this.handleClose })}
            </View>
          </View>
        </Animated.View>
      </React.Fragment>
    )
  }
}

Modal.propTypes = {
  renderContent: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  alignment: PropTypes.oneOf(['center', 'bottom'])
}

Modal.defaultProps = {
  onClose: null,
  onOpen: null,
  alignment: 'center',
}

export default withNavigation(Modal)
