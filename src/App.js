import React from 'react'
import { withTheme } from 'styled-components'
import Registration from './components/RegistrationForm'

function App({ theme }) {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh', backgroundColor: theme.color.mainBg }}>

        <div style={{ width: 1000, margin: 'auto', background: theme.color.formBg }}>
          <div style={{ padding: '30px 50px' }}>
            <h1 style={{ color: theme.color.white, fontSize: theme.color.heading, marginBottom: 10 }}>რეგისტრაცია</h1>
            <p style={{ color: theme.color.yellow, fontSize: theme.fontSize.small }}>
              სავალდებულოა ყველა ველი შეივსოს კორექტულად მხოლოდ ლათინური ასოებით და ციფრებით.
            </p>
            <p style={{ color: theme.color.white, fontSize: theme.fontSize.small }}>
              <strong>ყურადღება:</strong> რეგისტრაციისას მითითებული პირადი მონაცემების უზუსტობის შემთხვევაში, კომპანია იტოვებს უფლებას შეგიზღუდოთ საიტით სარგებლობა!
            </p>
            <Registration />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTheme(App)
