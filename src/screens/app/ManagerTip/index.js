import React from 'react'
import PropTypes from 'prop-types'

import { View, Image, Text } from 'react-native'
import { Modal, Title, Button } from '@components'

import assets from '@assets'
import { colors, fontSizes } from '@stylesheets'

import screens from '@screens'

import styles from './styles'

class ManagerTip extends React.PureComponent {
  static screenOptions = {
    id: screens.MANAGER_TIP,
  }

  render() {
    return (
      <Modal
        alignment="bottom"
        renderContent={({ handleClose }) => (
          <View style={styles.container}>
            <Image
              source={assets.manager}
              style={styles.managerIcon}
            />

            <Title
              style={styles.managerTitle}
              color={colors.DARK_GREEN}
              fontSize={fontSizes.XSMALL}
            >
              Manager
            </Title>

            <Text style={styles.tip}>
              Ray, estuve hablando con el dueño del Luna Park y quiere que hagamos un recital el próximo martes. Nos cobra $40.000, así que te faltan $4.097
            </Text>

            <Button
              color={colors.DARK_GREEN}
              onPress={handleClose}
            >
              Sacar Crédito
            </Button>
          </View>
        )}
      />
    )
  }
}

ManagerTip.propTypes = {
}

export default ManagerTip
