export const required = (value, error = 'Required') => !value || !String(value).trim() ? error : undefined

export const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
export const isEmail = (value, error = 'Invalid email') => !emailRegex.test(value) ? error : undefined

const passwordRegex = new RegExp('^.{6,}$')
export const isValidPassword = (value, error = 'Invalid password') => !passwordRegex.test(value) ? error : undefined
