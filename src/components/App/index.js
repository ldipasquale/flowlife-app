import React from 'react'
import PropTypes from 'prop-types'
import {
  Animated, View, TouchableOpacity, Image,
} from 'react-native'

import assets from '@assets'
import { spacings } from '@stylesheets'

import Header from './Header'
import ManagerTip from './ManagerTip'

import styles from './styles'

const HIDDEN_MANAGER_TIP_POSITION = 500
const MANAGER_TIP_OVERLAY_OPACITY = 0.8
const DEFAULT_MANAGER_BUTTON_POSITION = spacings.STANDARD
const HIDDEN_MANAGER_BUTTON_POSITION = spacings.LARGE * -1

class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isManagerTipOpened: false,
      managerTipAnimation: new Animated.Value(HIDDEN_MANAGER_TIP_POSITION),
      managerTipOverlayAnimation: new Animated.Value(0),
      managerButtonAnimation: new Animated.Value(DEFAULT_MANAGER_BUTTON_POSITION),
    }

    this.animateManagerTip = this.animateManagerTip.bind(this)
    this.animateManagerTipOverlay = this.animateManagerTipOverlay.bind(this)
    this.animateManagerButton = this.animateManagerButton.bind(this)
    this.toggleManagerTip = this.toggleManagerTip.bind(this)
    this.renderManagerTip = this.renderManagerTip.bind(this)
    this.renderManagerButton = this.renderManagerButton.bind(this)
  }

  animateManagerTip(topPosition) {
    const { managerTipAnimation } = this.state

    return Animated.timing(managerTipAnimation, {
      toValue: topPosition,
      duration: 500,
    })
  }

  animateManagerTipOverlay(opacityValue) {
    const { managerTipOverlayAnimation } = this.state

    return Animated.timing(managerTipOverlayAnimation, {
      toValue: opacityValue,
      duration: 300,
    })
  }

  animateManagerButton(position) {
    const { managerButtonAnimation } = this.state

    return Animated.timing(managerButtonAnimation, {
      toValue: position,
      duration: 150,
    })
  }

  toggleManagerTip() {
    const { isManagerTipOpened } = this.state

    if (isManagerTipOpened) {
      return this.animateManagerTip(HIDDEN_MANAGER_TIP_POSITION).start(() => (
        this.animateManagerTipOverlay(0).start(() => (
          this.setState({
            isManagerTipOpened: false,
          }, this.animateManagerButton(DEFAULT_MANAGER_BUTTON_POSITION).start)
        ))
      ))
    }

    return this.setState({
      isManagerTipOpened: true,
      managerButtonAnimation: new Animated.Value(HIDDEN_MANAGER_BUTTON_POSITION),
    }, () => (
      this.animateManagerTipOverlay(MANAGER_TIP_OVERLAY_OPACITY).start(() => (
        this.animateManagerTip(0).start()
      ))
    ))
  }

  renderManagerTip() {
    const { managerTipOverlayAnimation, managerTipAnimation } = this.state

    return (
      <React.Fragment>
        <Animated.View
          style={[
            styles.backgroundOverlay,
            {
              opacity: managerTipOverlayAnimation,
            },
          ]}
        />

        <Animated.View
          style={[
            styles.managerTipContainer,
            {
              transform: [{
                translateY: managerTipAnimation,
              }],
            },
          ]}
        >
          <ManagerTip
            onClose={this.toggleManagerTip}
          />
        </Animated.View>
      </React.Fragment>
    )
  }

  renderManagerButton() {
    const { managerButtonAnimation } = this.state

    return (
      <Animated.View
        style={[
          styles.managerButton,
          {
            bottom: managerButtonAnimation,
          },
        ]}
      >
        <TouchableOpacity
          onPress={this.toggleManagerTip}
          activeOpacity={0.8}
        >
          <Image source={assets.manager} />
        </TouchableOpacity>
      </Animated.View>
    )
  }

  render() {
    const { children } = this.props
    const { isManagerTipOpened } = this.state

    return (
      <View style={styles.background}>
        {isManagerTipOpened && this.renderManagerTip()}

        <View style={styles.container}>
          <Header
            avatarUrl="https://banner2.kisspng.com/20180616/gks/kisspng-roblox-avatar-rapper-clip-art-cadea-carbonada-5b255cb41c2623.2620842815291752201153.jpg"
          />

          <View style={styles.content}>
            {children}
          </View>
        </View>

        {!isManagerTipOpened && this.renderManagerButton()}
      </View>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
