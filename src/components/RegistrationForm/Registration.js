import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import styled, { withTheme } from 'styled-components'
import Input from '../primitives/Input/Input'
import { required, isEmail, isValidPassword } from '../../utils/validator'
import Select from '../primitives/Select'

const COUNTRIES = [
  { value: 'GE', label: 'Georgia' },
  { value: 'UK', label: 'Ukraine' },
  { value: 'AR', label: 'Armenia' },
  { value: 'AZ', label: 'Azerbaijan' },
  { value: 'TR', label: 'Turkey' },
  { value: 'RU', label: 'Russia' }
]

const MONTHS = [
  { value: '', label: 'თვე' },
  { value: 'JAN', label: 'იანვარი' },
  { value: 'FEG', label: 'თებერვალი' },
  { value: 'MARCH', label: 'მარტი' },
  { value: 'APR', label: 'აპრილი' },
  { value: 'MAY', label: 'მაისი' },
  { value: 'JUN', label: 'ივნისი' },
  { value: 'JUL', label: 'ივლისი' },
  { value: 'AUG', label: 'აგვისტო' },
  { value: 'SEP', label: 'სექტემბერი' },
  { value: 'OC', label: 'ოქტომბერი' },
  { value: 'NOV', label: 'ნოემბერი' },
  { value: 'DEC', label: 'დეკემბერი' }
]
const DAYS = [
  { value: '', label: 'დღე' }
]
const YEARS = [
  { value: '', label: 'წელი' }
]
const PHONES = [
  { value: '+995', label: '+995' },
  { value: '+380', label: '+380' },
  { value: '+374', label: '+374' },
  { value: '+994', label: '+994' },
  { value: '+90', label: '+90' },
  { value: '+7', label: '+7' }
]

function Registration({ theme }) {
  const {
    register, handleSubmit, errors
  } = useForm()

  const renderDays = () => {
    for (let i = 1; i < 32; i += 1) {
      DAYS.push({ value: i, label: i })
    }
    return DAYS
  }

  const renderYears = () => {
    for (let i = 2020; i > 1549; i -= 1) {
      YEARS.push({ value: i, label: i })
    }
    return YEARS
  }

  const onSubmit = (form) => {
    alert('Congratulations!. Your data is in the hackers database now :D')
    console.log(form)
  }

  return (
    <FormProvider>
      <form onSubmit={handleSubmit((registerForm) => onSubmit(registerForm))}>
        <div style={{ padding: '70px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="firstName"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              სახელი   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Input register={register} name="firstName" validate={required} errors={errors} id="firstName" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="firstName"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              გვარი   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Input register={register} name="lastName" validate={required} errors={errors} id="lastName" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="country"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              ქვეყანა   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Select options={COUNTRIES} register={register} name="country" errors={errors} width="280px" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="privateNumber"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              პირადი ნომერი   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Input register={register} name="privateNumber" validate={required} errors={errors} id="privateNumber" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="privateNumber"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              დაბადების თარიღი   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: 280 }}>
              <Select options={renderDays()} register={register} validate={required} name="dateDay" errors={errors} width="97px" />
              <Select options={MONTHS} register={register} validate={required} name="dateMonth" errors={errors} width="70px" margin="0 10px" />
              <Select options={renderYears()} register={register} validate={required} name="dateYear" errors={errors} width="83px" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="privateNumber"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              დაბადების თარიღი   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Select options={PHONES} register={register} validate={required} name="countryCode" errors={errors} width="100px" />
            <Input register={register} name="phoneNumber" validate={required} errors={errors} id="phoneNumber" width="180px" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="privateNumber"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              ელ-პოსტა   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Input register={register} name="email" validate={isEmail} errors={errors} id="email" width="280px" />
          </div>
          <div style={{
            width: '100%', height: 2, backgroundColor: theme.color.border, margin: '10px 0'
          }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="userName"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              მომხმარებელი  <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Input register={register} name="userName" validate={required} errors={errors} id="userName" width="280px" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <label
              htmlFor="password"
              style={{
                textAlign: 'right', width: 200, paddingRight: 20, color: theme.color.white
              }}
            >
              პაროლი   <span style={{ color: theme.color.red, fontSize: theme.fontSize.small }}>*</span>
            </label>
            <Input register={register} name="password" validate={isValidPassword} errors={errors} id="password" width="280px" type="password" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 200 }} />
            <Button
              type="submit"
            >
              რეგისტრაცია
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default withTheme(Registration)

const Button = styled.button`
    width: 280px;
    padding: 10px;
    background: #cecece;
    border: none;
    color: #1b1b1b;
    border-radius: 2px;
    outline: none;
    transition: all 0.2s ease;
    font-weight: bold;
`
