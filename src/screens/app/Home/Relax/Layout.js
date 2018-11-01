import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, Image } from 'react-native'
import { Card, Button } from '@components'

import assets from '@assets'

import { colors } from '@stylesheets'

import styles from './styles'

class HomeRelax extends React.PureComponent {
  render() {
    const { onRelax } = this.props

    return (
      <Card>
        <View style={styles.container}>
          <Image
            style={styles.relaxIcon}
            source={assets.relax}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Cuando quieras recargar un poco de flow, puedes relajarte un rato y tomar un descanso.
            </Text>
          </View>
        </View>

        <Button
          onPress={onRelax}
          color={colors.LILAC}
        >
          Tomar un descanso
        </Button>
      </Card>
    )
  }
}

HomeRelax.propTypes = {
  onRelax: PropTypes.func.isRequired,
}

export default HomeRelax
