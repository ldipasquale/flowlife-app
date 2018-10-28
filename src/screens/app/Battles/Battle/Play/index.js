import React from 'react'
import PropTypes from 'prop-types'

import { Text } from 'react-native'
import { Modal, Button } from '@components'

import { colors } from '@stylesheets'

import screens from '@screens/list'

class PlayBattle extends React.Component {
  static screenOptions = {
    id: screens.PLAY_BATTLE,
  }

  render() {
    return (
      <Modal
        renderContent={({ handleClose }) => (
          <React.Fragment>
            <Text>Dialog</Text>

            <Button
              color={colors.DARK_GREEN}
              onPress={handleClose}
            >
              Sacar Crédito
            </Button>
          </React.Fragment>
        )}
      />
    )
  }
}

export default PlayBattle
