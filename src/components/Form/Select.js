import React from 'react'
import { View, Text, Picker } from 'react-native'

function withSelect(locals) {
  if (locals.hidden) {
    return null
  }

  const { stylesheet } = locals
  let formGroupStyle = stylesheet.formGroup.normal
  let controlLabelStyle = stylesheet.controlLabel.normal
  let selectStyle = {
    ...stylesheet.select.normal,
    ...stylesheet.pickerContainer.normal,
  }
  let helpBlockStyle = stylesheet.helpBlock.normal
  const errorBlockStyle = stylesheet.errorBlock

  const valueContainerStyle = stylesheet.selectValue.normal

  if (locals.hasError) {
    formGroupStyle = stylesheet.formGroup.error
    controlLabelStyle = stylesheet.controlLabel.error
    selectStyle = stylesheet.select.error
    helpBlockStyle = stylesheet.helpBlock.error
  }

  const label = locals.label ? (
    <Text style={controlLabelStyle}>{locals.label}</Text>
  ) : null

  const help = locals.help ? (
    <Text style={helpBlockStyle}>{locals.help}</Text>
  ) : null

  const error = locals.hasError && locals.error ? (
    <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
      {locals.error}
    </Text>
  ) : null

  const options = locals.options.map(({ value, text }) => (
    <Picker.Item key={value} value={value} label={text} />
  ))

  return (
    <View style={formGroupStyle}>
      {label}

      <View style={valueContainerStyle}>
        <Picker
          accessibilityLabel={locals.label}
          ref="input" // eslint-disable-line react/no-string-refs
          style={selectStyle}
          selectedValue={locals.value}
          onValueChange={locals.onChange}
          help={locals.help}
          enabled={!locals.disabled}
          mode={locals.mode}
          prompt={locals.prompt}
          itemStyle={locals.itemStyle}
        >
          {options}
        </Picker>
      </View>

      {help}

      {error}
    </View>
  )
}

export default withSelect
