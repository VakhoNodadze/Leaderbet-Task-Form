import React from 'react'
import { StyledContainer, StyledInput, StyledError } from './styled'

const Input = ({
  name, register, errors, width, validate, ...props
}) => {
  const error = errors[name]
  return (
    <StyledContainer width={width}>
      <StyledInput name={name} ref={register({ validate })} {...props} />
      <StyledError error={error} />
    </StyledContainer>
  )
}

export default Input
