import React from 'react'
import './Contact.css'
import Contactus from '../components/Contactus'

const Contact = ({theme,setTheme}) => {
    const toggle_mode=()=>{
        theme==='light'? setTheme('dark'):setTheme('light');
      }
  return (
    <div>
      <Contactus/>
    </div>
  )
}

export default Contact
