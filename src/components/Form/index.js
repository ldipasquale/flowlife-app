import React from 'react'
import PropTypes from 'prop-types'

import { FieldTypes } from './constants'
import Step from './Step'

class Form extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      values: {},
      currentStepIndex: 0,
    }

    this.handlePressNext = this.handlePressNext.bind(this)
  }

  handlePressNext(newValues) {
    const { steps, onSubmit } = this.props
    const { values, currentStepIndex } = this.state

    const stepsLength = steps.length > 0
      ? steps.length
      : 1

    const isLastStep = currentStepIndex === stepsLength - 1

    return this.setState({
      values: {
        ...values,
        ...newValues,
      },
      ...!isLastStep ? {
        currentStepIndex: currentStepIndex + 1,
      } : null,
    }, () => isLastStep && onSubmit(this.state.values))
  }

  render() {
    const { steps, fields, button, buttonColor } = this.props
    const { currentStepIndex } = this.state

    const currentStep = steps.length > 0
      ? steps[currentStepIndex]
      : {
        fields,
        button,
        buttonColor,
      }

    return (
      <Step
        fields={currentStep.fields}
        button={currentStep.button}
        buttonColor={currentStep.buttonColor}
        onSubmit={this.handlePressNext}
      />
    )
  }
}

Form.propTypes = {
  steps: PropTypes.array,
  fields: PropTypes.array,
  button: PropTypes.string,
  buttonColor: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

Form.defaultProps = {
  steps: [],
  fields: [],
  button: null,
  buttonColor: undefined,
}

export {
  FieldTypes,
}

export default Form
