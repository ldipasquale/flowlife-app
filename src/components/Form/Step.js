import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native'

import TForm from 'tcomb-form-native'
import format from 'date-fns/format'
import esLocale from 'date-fns/locale/es'

import { colors } from '@stylesheets'

import Button from '../Button'

import { FieldTypes } from './constants'

import formStyles from './formStyles'
import styles from './styles'

class FormStep extends React.PureComponent {
  static getField(field) {
    if (!field.isRequired) {
      return TForm.maybe(TForm[field.type])
    }

    if (field.type === FieldTypes.OPTIONS) {
      return TForm.enums(field.options)
    }

    return TForm[field.type]
  }

  static processFields(fields) {
    return TForm.struct(fields.reduce((fieldsAccumulator, field) => ({
      ...fieldsAccumulator,
      [field.id]: FormStep.getField(field),
    }), {}))
  }

  static processOptions(fields) {
    return {
      fields: fields.reduce((fieldsAccumulator, field) => ({
        ...fieldsAccumulator,
        [field.id]: {
          label: field.name,
          template: field.template,
          ...field.isPassword ? {
            password: true,
            secureTextEntry: true,
          } : null,
          ...field.type === FieldTypes.DATE ? {
            mode: 'date',
            config: {
              defaultValueText: ' ',
              format: date => format(date, 'DD [de] MMMM [del] YYYY', { locale: esLocale }),
            },
          } : null,
        },
      }), {}),
      stylesheet: formStyles,
      i18n: {
        optional: '',
        required: '',
      },
    }
  }

  constructor(props) {
    super(props)

    this.formRef = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { onSubmit } = this.props

    const values = this.formRef.current.getValue()

    if (values) {
      onSubmit(values)
    }
  }

  render() {
    const { button, buttonColor, fields } = this.props

    const processedFields = FormStep.processFields(fields)
    const processedOptions = FormStep.processOptions(fields)

    return (
      <View style={styles.container}>
        <ScrollView style={styles.fieldsContainer}>
          <TForm.form.Form
            ref={this.formRef}
            type={processedFields}
            options={processedOptions}
          />
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.handleSubmit}
            color={buttonColor}
          >
            {button}
          </Button>
        </View>
      </View>
    )
  }
}

FormStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  button: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
}

FormStep.defaultProps = {
  buttonColor: colors.ORANGE,
}

export default FormStep
