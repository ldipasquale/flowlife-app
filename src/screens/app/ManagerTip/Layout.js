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
    const { tip, isLastTip, onShowNextTip } = this.props

    return (
      <Modal
        alignment="bottom"
        onClose={onShowNextTip}
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

            {isLastTip ? (
              <Button
                color={colors.DARK_GREEN}
                onPress={handleClose}
              >
                Entendido
              </Button>
            ) : (
              <Button
                color={colors.DARK_GREEN}
                onPress={onShowNextTip}
              >
                Ver siguiente mensaje
              </Button>
            )}
          </View>
        )}
      />
    )
  }
}

ManagerTip.propTypes = {
  tip: PropTypes.string,
  isLastTip: PropTypes.bool,
  onShowNextTip: PropTypes.func.isRequired,
}

ManagerTip.defaultProps = {
  tip: null,
  isLastTip: false,
}

export default ManagerTip
