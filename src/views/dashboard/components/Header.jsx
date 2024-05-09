import React from 'react'

import '../static/css/layout.css'

import Logo from '../assets/images/logo.png'

const header = () => {
  return (
    <header className='header-layout'>
        <img src={Logo} alt="Logomarca Aldomar Assolin" height="64"/>
    </header>
  )
}

export default header