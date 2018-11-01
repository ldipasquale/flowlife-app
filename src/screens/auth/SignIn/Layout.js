import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, Image } from 'react-native'
import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import { colors } from '@stylesheets'
import screens from '@screens/list'

import { withNavigation } from '@navigation'

import styles from './styles'

class SignIn extends React.PureComponent {
  static screenOptions = {
    label: screens.SIGN_IN,
  }

  constructor(props) {
    super(props)

    this.fields = [{
      id: 'email',
      name: 'Correo electrónico',
      type: FieldTypes.STRING,
      isRequired: true,
    }, {
      id: 'password',
      name: 'Contraseña',
      type: FieldTypes.STRING,
      isPassword: true,
      isRequired: true,
    }]
  }

  render() {
    const { navigation, onSubmit } = this.props

    return (
      <App disableHeader disableManager>
        <View style={styles.container}>
          <Image
            source={require('@assets/images/logo.png')}
            style={styles.logoImage}
          />

          <View style={styles.content}>
            <Form
              fields={this.fields}
              button="Ingresá a la experiencia"
              buttonColor={colors.BLUE}
              onSubmit={onSubmit}
            />
          </View>
        </View>

        <View>
          <Text
            style={styles.createNewUser}
            onPress={() => navigation.navigate(screens.SIGN_UP)}
          >
            Creá a tu rapero
          </Text>
        </View>
      </App>
    )
  }
}

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default withNavigation(SignIn)
