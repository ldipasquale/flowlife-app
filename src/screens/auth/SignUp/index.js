import React from 'react'
import { AsyncStorage } from 'react-native'
import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import { Toast, withNavigation } from '@navigation'

import screens from '@screens'

import UsersService from '@services/Users'

import RapperBuilder from './RapperBuilder'

class SignUp extends React.PureComponent {
  static screenOptions = {
    label: screens.SIGN_UP,
  }

  constructor(props) {
    super(props)

    this.steps = [{
      button: 'Elegí la apariencia',
      fields: [{
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
      }],
    }, {
      button: 'Crear Rapero',
      fields: [{
        id: 'name',
        name: 'Apodo',
        type: FieldTypes.STRING,
        isRequired: true,
      }, {
        id: 'style',
        name: 'Estilo',
        type: FieldTypes.OPTIONS,
        options: {
          Melodic: 'Melódico',
          Aggresive: 'Agresivo',
          Lyric: 'Lírico',
        },
        isRequired: true,
      }],
    }]

    this.handleSignUp = this.handleSignUp.bind(this)
  }

  async handleSignUp(values) {
    const { navigation } = this.props

    try {
      const isSignedUp = await UsersService.signUp(values)

      if (isSignedUp) {
        await AsyncStorage.setItem('email', values.email)

        navigation.navigate(screens.APP)
      }
    } catch (error) {
      Toast.show('Oops. Ocurrió un error.')
    }
  }

  render() {
    return (
      <App
        leftIcon="back"
        disableManager
      >
        <Form
          steps={this.steps}
          onSubmit={this.handleSignUp}
        />
      </App>
    )
  }
}

export default withNavigation(SignUp)
