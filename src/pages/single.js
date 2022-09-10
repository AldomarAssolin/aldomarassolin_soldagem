import React from 'react'

import logo from '../images/logos/logo192.png';

import curriculo from '../pdf/curriculo_22.pdf'

const Single = () => {
  return (
    <>
        <header className='App-header'>
        <div className="App-logo">
            <img src={logo} alt="Logomarca" />
        </div>
            <h1>Aldomar Assolin</h1>
            <h3>Soldador</h3>
            <a className="btn App-link" href={curriculo} target="_blank" rel="noreferrer">
            <i className="fa fa-download mx-2" /> Currículo em PDF
            </a>
        </header>
        
        <div className="message-site">
            <h2>Estamos atualizando o site!</h2>
            <h2>Em breve estaremos no ar novamente.</h2>
        </div>
    </>
  )
}

export default Single