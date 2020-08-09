import React from 'react'
import { Selector, Option } from './styled'

const Select = ({
  width, name, register, options, errors, validate, ...props
}) => {
  const error = errors[name]
  return (
    <Selector name={name} ref={register({ validate })} width={width} error={error} {...props}>
      {options.map(option => <Option key={option.value + Math.random()} value={option.value}>{option.label}</Option>)}
    </Selector>
  )
}

export default Select
