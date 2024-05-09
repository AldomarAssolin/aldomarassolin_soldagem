import React from 'react'

import FirstForm from '../components/FirstForm'

const forms = () => {
  return (
    <div className='forms'>
        <h2>Formulários</h2>
        <FirstForm user={{name:'Aldomar Assolin',email:'assolinaldomar@gmail.com',bio:'Programador MERN STACK.',role:'admin'}}/>
    </div>
  )
}

export default forms