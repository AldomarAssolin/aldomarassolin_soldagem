import React from 'react'

//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Experience from '../pages/Experience'
// import Home from '../pages/Home'
import { Logo } from './Logo';


const NavBar = () => {
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
                  <Nav.Link href="/" className='links'>Home</Nav.Link>
                  <Nav.Link href="/About" className='links'>Sobre</Nav.Link>
                  <Nav.Link href="/Experience" className='links'>Experiências</Nav.Link>
                  <Nav.Link href="/Contact" className='links'>Contatos</Nav.Link>
                  <NavDropdown
                    title="Processos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className=''
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
