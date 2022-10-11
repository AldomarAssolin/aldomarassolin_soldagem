import React from 'react'

//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Logo } from './Logo';


const NavBar = () => {
  const routePath = useLocation();
  
  const activelink = () => {
    console.log(routePath.pathname)
    switch (routePath.pathname) {
      case '/':
        const home = document.querySelector('.home')
        home.classList.toggle('active')
        break;
      case '/About':
        const about = document.querySelector('.about')
        about.classList.toggle('active')
        break;
      case '/Experience':
        const experience = document.querySelector('.experience')
        experience.classList.toggle('active')
        break;
      case '/Contact':
          const contact = document.querySelector('.contact')
          contact.classList.toggle('active')
          break;
    
      default:
        break;
    }
  }

  useEffect(() => {
    activelink()
  },);

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="/">
              <Logo/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='btn_toggle'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className=''>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Logo/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <Nav.Link href="/" className='home links'>Home</Nav.Link>
                  <Nav.Link href="/About" className='about links'>Sobre</Nav.Link>
                  <Nav.Link href="/Experience" className='experience links'>Experiências</Nav.Link>
                  <Nav.Link href="/Contact" className='contact links'>Contatos</Nav.Link>
                  <NavDropdown
                    title="Processos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='dropdown'
                  >
                    <NavDropdown.Item href="#action3" className='links'>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='links'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className='links'>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action6" className='links'>
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar
