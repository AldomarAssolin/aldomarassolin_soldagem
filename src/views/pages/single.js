import React from 'react'

import logo from '../../images/logos/logo192.png';

import curriculo from '../../pdf/curriculo_22.pdf'

import Title from '../components/Title'

const Single = () => {
  return (
    <>
        <header className='App-header'>
            <div className="App-logo">
                <img src={logo} alt="Logomarca" />
            </div>
            <div className="App-text">
                <Title title='Aldomar Assolin' subtitle='Soldador'/>
                <a className="btn App-link" href={curriculo} target="_blank" rel="noreferrer">
                <i className="fa fa-download mx-2" /> Currículo em PDF
                </a>
            </div>
        </header>
        
        <div className="message-site">
            <h2>Estamos atualizando o site!</h2>
            <h2>Em breve estaremos no ar novamente.</h2>
        </div>
    </>
  )
}

export default Single