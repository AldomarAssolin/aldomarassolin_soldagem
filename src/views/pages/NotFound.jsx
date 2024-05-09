import React from "react";

import Title from '../components/Title_Section'
import { Button } from 'react-bootstrap';
import { BsFillFilePdfFill } from "react-icons/bs";

import logo from '../../public/images/logos/logo.png';
import curriculo from '../../public/pdf/curriculo_22.pdf'
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    
    <div className="App">
        <header className='App-header pt-4 App'>
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
        
        <div className="message-site App">
            <NavLink to="/" className='home text-success'>Voltar a página inicial.</NavLink>
            <h2 className="text-danger">Página não encontrada!</h2>
            <h2 className="text-danger">A página que você está procurando não existe.</h2>
        </div>
    </div>
  );
};

export default NotFound