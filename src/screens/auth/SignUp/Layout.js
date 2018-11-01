import React from 'react'
import PropTypes from 'prop-types'

import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import { withNavigation } from '@navigation'

import screens from '@screens/list'

import AvatarBuilder from './AvatarBuilder'

class SignUp extends React.PureComponent {
  static screenOptions = {
    label: screens.SIGN_UP,
  }

  constructor(props) {
    super(props)

    this.steps = [{
      button: 'Elegí la apariencia',
      fields: [{
        id: 'fullName',
        name: 'Nombre',
        type: FieldTypes.STRING,
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
        id: 'name',
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
        name: 'Estilo Musical',
        type: FieldTypes.OPTIONS,
        options: {
          Melodic: 'Melódico',
          Lyric: 'Lírico',
          Aggresive: 'Agresivo',
        },
        isRequired: true,
      }, {
        id: 'avatar',
        name: 'Avatar',
        type: FieldTypes.STRING,
        template: AvatarBuilder,
        isRequired: true,
      }],
    }]
  }

  render() {
    const { onSubmit } = this.props

    return (
      <App
        leftIcon="back"
        disableManager
      >
        <Form
          steps={this.steps}
          onSubmit={onSubmit}
        />
      </App>
    )
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  onSubmit: PropTypes.func.isRequired,
}

export default withNavigation(SignUp)
