import React from 'react'

import logo from '../../public/images/logos/logo.png';

import curriculo from '../../public/pdf/curriculo_22.pdf'

import Title from '../components/Title_Section'
import { Button } from 'react-bootstrap';
import { BsFillFilePdfFill } from "react-icons/bs";

const Single = () => {
  return (
    <>
        <header className='App-header pt-4'>
            <div className="App-logo">
                <img src={logo} alt="Logomarca" height="300px"/>
            </div>
            <div className="App-text">
                <Title
                    classes='mb-4' 
                    title='Aldomar Assolin' 
                    subtitle='Consultor em Soldagem e Automação Industrial'
                />
                <Button variant='info' className="text-primary-emphasis">
                    <BsFillFilePdfFill width="50"/>
                    <a className="links mx-1" href={curriculo} target="_blank" rel="noreferrer">
                        Currículo em PDF
                    </a>
                </Button>
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