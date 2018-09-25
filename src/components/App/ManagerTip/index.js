import React from 'react'
import PropTypes from 'prop-types'

import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Title } from '@components'

import { colors, fontSizes } from '@stylesheets'

import Button from '../../Button'

import styles from './styles'

class ManagerTip extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { onClose } = this.props

    return (
      <React.Fragment>
        <TouchableOpacity
          style={styles.closeIconContainer}
          onPress={onClose}
          activeOpacity={0.8}
        >
          <Image
            source={require('@assets/icons/cross.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>

        <View style={styles.container}>
          <Image
            source={require('@assets/icons/manager.png')}
            style={styles.managerIcon}
          />

          <Title
            style={styles.managerTitle}
            color={colors.DARK_GREEN}
            fontSize={fontSizes.SMALL}
          >
            Manager
          </Title>

          <Text style={styles.tip}>
            Ray, estuve hablando con el dueño del Luna Park y quiere que hagamos un recital el próximo martes. Nos cobra $40.000, así que te faltan $4.097
          </Text>

          <Button
            color={colors.DARK_GREEN}
            onPress={onClose}
          >
            Sacar Crédito
          </Button>
        </View>
      </React.Fragment>
    )
  }
}

ManagerTip.propTypes = {
  //title: PropTypes.string.isRequired,
}

export default ManagerTip
