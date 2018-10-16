import React from 'react'

import { Animated, TouchableOpacity, Image } from 'react-native'

import assets from '@assets'
import { spacings } from '@stylesheets'

import ManagerTip from './Tip'

import styles from './styles'

const HIDDEN_TIP_POSITION = 500
const TIP_OVERLAY_OPACITY = 0.8
const DEFAULT_BUTTON_POSITION = spacings.STANDARD
const HIDDEN_BUTTON_POSITION = spacings.LARGE * -1

class Manager extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false,
      tipAnimation: new Animated.Value(HIDDEN_TIP_POSITION),
      tipOverlayAnimation: new Animated.Value(0),
      buttonAnimation: new Animated.Value(DEFAULT_BUTTON_POSITION),
    }

    this.animateTip = this.animateTip.bind(this)
    this.animateTipOverlay = this.animateTipOverlay.bind(this)
    this.animateButton = this.animateButton.bind(this)
    this.toggleTip = this.toggleTip.bind(this)
    this.renderTip = this.renderTip.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  animateTip(topPosition) {
    const { tipAnimation } = this.state

    return Animated.timing(tipAnimation, {
      toValue: topPosition,
      duration: 500,
    })
  }

  animateTipOverlay(opacityValue) {
    const { tipOverlayAnimation } = this.state

    return Animated.timing(tipOverlayAnimation, {
      toValue: opacityValue,
      duration: 300,
    })
  }

  animateButton(position) {
    const { buttonAnimation } = this.state

    return Animated.timing(buttonAnimation, {
      toValue: position,
      duration: 150,
    })
  }

  toggleTip() {
    const { isOpened } = this.state

    if (isOpened) {
      return this.animateTip(HIDDEN_TIP_POSITION).start(() => (
        this.animateTipOverlay(0).start(() => (
          this.setState({
            isOpened: false,
          }, this.animateButton(DEFAULT_BUTTON_POSITION).start)
        ))
      ))
    }

    return this.setState({
      isOpened: true,
      buttonAnimation: new Animated.Value(HIDDEN_BUTTON_POSITION),
    }, () => (
      this.animateTipOverlay(TIP_OVERLAY_OPACITY).start(() => (
        this.animateTip(0).start()
      ))
    ))
  }

  renderTip() {
    const { tipOverlayAnimation, tipAnimation } = this.state

    return (
      <React.Fragment>
        <Animated.View
          style={[
            styles.backgroundOverlay,
            { opacity: tipOverlayAnimation },
          ]}
        />

        <Animated.View
          style={[
            styles.tipContainer,
            { transform: [{ translateY: tipAnimation }] },
          ]}
        >
          <ManagerTip onClose={this.toggleTip} />
        </Animated.View>
      </React.Fragment>
    )
  }

  renderButton() {
    const { buttonAnimation } = this.state

    return (
      <Animated.View
        style={[
          styles.button,
          { bottom: buttonAnimation },
        ]}
      >
        <TouchableOpacity
          onPress={this.toggleTip}
          activeOpacity={0.8}
        >
          <Image source={assets.manager} />
        </TouchableOpacity>
      </Animated.View>
    )
  }

  render() {
    const { isOpened } = this.state

    if (isOpened) {
      return this.renderTip()
    }

    return this.renderButton()
  }
}

export default Manager
