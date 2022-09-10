import React from 'react'
import { Link } from 'react-router-dom'

//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Experience from '../pages/Experience'
// import Home from '../pages/Home'
import { Logo } from './Logo';

export const NavBar = () => {
  return (
    <Navbar>
        <Container>
            <Link to="/">
                <Logo/>
            </Link>
            <Nav>
                <Link className='mx-3 links' to="/">Home</Link>
                <Link className='mx-3 links' to="/About">Sobre</Link>
                <Link className='mx-3 links' to="/Experience">Experiências</Link>
                <Link className='mx-3 links' to="/Contact">Contatos</Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
