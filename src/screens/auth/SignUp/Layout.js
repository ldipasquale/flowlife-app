import React from 'react'
import PropTypes from 'prop-types'

import { App, Form } from '@components'
import { FieldTypes } from '@components/Form'

import { withNavigation } from '@navigation'

import screens from '@screens/list'

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
  navigation: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default withNavigation(SignUp)
