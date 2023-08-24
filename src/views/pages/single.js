import React from 'react'

import logo from '../../public/images/logos/logo.png';

import curriculo from '../../public/pdf/curriculo_22.pdf'

import Title from '../components/Title_Section'

const Single = () => {
  return (
    <>
        <header className='App-header pt-4'>
            <div className="App-logo">
                <img src={logo} alt="Logomarca" height="300px"/>
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