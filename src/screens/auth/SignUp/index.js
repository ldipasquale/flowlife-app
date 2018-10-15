import React from 'react'

import { View, Text } from 'react-native'
import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import screens from '@screens'

import RapperBuilder from './RapperBuilder'

class SignUp extends React.PureComponent {
  static label = screens.SIGN_UP

  constructor(props) {
    super(props)

    this.steps = [{
      button: 'Elegí la apariencia',
      fields: [{
        id: 'name',
        name: 'Nombre',
        type: FieldTypes.STRING,
        //template: RapperBuilder,
        isRequired: true,
      }, {
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
      }, {
        id: 'date',
        name: 'Fecha de nacimiento',
        type: FieldTypes.DATE,
        isRequired: true,
      }],
    }, {
      button: 'Crear Rapero',
      fields: [{
        id: 'nick',
        name: 'Apodo',
        type: FieldTypes.STRING,
        isRequired: true,
      }, {
        id: 'genre',
        name: 'Género',
        type: FieldTypes.OPTIONS,
        options: {
          male: 'Masculino',
          female: 'Femenino',
        },
        isRequired: true,
      }, {
        id: 'style',
        name: 'Estilo',
        type: FieldTypes.OPTIONS,
        options: {
          melodic: 'Melódico',
          singer: 'Cantante',
        },
        isRequired: true,
      }, {
        id: 'avatar',
        name: 'Avatar',
        type: FieldTypes.STRING,
        isRequired: true,
      }],
    }]
  }

  render() {
    return (
      <App
        leftIcon="back"
        getOnPressLeftIcon={navigation => () => navigation.goBack(null)}
        disableManager
      >
        <Form
          steps={this.steps}
          onSubmit={console.warn}
        />
      </App>
    )
  }
}

export default SignUp
