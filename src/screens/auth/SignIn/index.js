import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import { AsyncStorage, View, Text, Image } from 'react-native'
import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import { colors } from '@stylesheets'
import screens from '@screens'

import UsersService from '@services/Users'

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

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  async handleSignIn(values) {
    const { navigation } = this.props

    try {
      const isSignedIn = await UsersService.signIn(values)

      console.log(isSignedIn)

      if (isSignedIn) {
        await AsyncStorage.setItem('email', values.email)

        navigation.navigate(screens.APP)
      }
    } catch(error) {
      console.log(error)
    }
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
                onSubmit={this.handleSignIn}
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
