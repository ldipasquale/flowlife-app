import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { View, Text, Image } from 'react-native'
import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import { colors } from '@stylesheets'
import screens from '@screens'

import styles from './styles'

class SignIn extends React.PureComponent {
  static label = screens.SIGN_IN

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
    const { navigation } = this.props

    return (
      <React.Fragment>
        <View style={styles.header}>
          <Image
            source={require('@assets/images/bg.png')} 
            style={styles.headerImage}
          />

          <Image
            source={require('@assets/images/logo.png')} 
            style={styles.logoImage}
          />
        </View>

        <App disableHeader disableManager>
          <View style={styles.container}>
            <View style={styles.contentSpacing} />

            <View style={styles.content}>
              <Form
                fields={this.fields}
                button="Ingresá a la experiencia"
                buttonColor={colors.BLUE}
                onSubmit={console.warn}
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
      </React.Fragment>
    )
  }
}

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(SignIn)
