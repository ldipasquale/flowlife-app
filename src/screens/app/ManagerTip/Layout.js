import React from 'react'
import PropTypes from 'prop-types'

import { View, Image, Text } from 'react-native'
import { Modal, Title, Button } from '@components'

import assets from '@assets'
import { colors, fontSizes } from '@stylesheets'

import screens from '@screens/list'

import styles from './styles'

class ManagerTip extends React.PureComponent {
  static screenOptions = {
    id: screens.MANAGER_TIP,
  }

  render() {
    const { tip, onClose } = this.props

    return (
      <Modal
        alignment="bottom"
        onClose={onClose}
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
              {tip}
            </Text>

            <Button
              color={colors.DARK_GREEN}
              onPress={handleClose}
            >
              Entendido
            </Button>
          </View>
        )}
      />
    )
  }
}

ManagerTip.propTypes = {
  tip: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

ManagerTip.defaultProps = {
  tip: null,
}

export default ManagerTip
