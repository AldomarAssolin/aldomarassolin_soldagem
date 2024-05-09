import React from 'react'

//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

import { Logo } from './Logo';

import { authenticate } from '../dashboard/OAuth/auth';


const NavBar = () => {

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navBar" >
          <Container>
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='btn_toggle' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className=''>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Logo />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex align-items-center justify-content-end">

                <Nav fill variant='underline' defaultActiveKey='/' className="nav-bar d-flex align-items-center justify-content-end">
                  <Nav.Item>
                    <Nav.Link eventKey='/' className='px-0'>
                      <Link to="/" className='home links'>Home</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="/about">
                      <Link to="/about" className='about links'>Sobre</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="/experiences">
                      <Link to="/experience" className='experience links'>Experiências</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="/contact">
                      <Link to="/contact" className='contact links'>Contatos</Link>
                    </Nav.Link>
                  </Nav.Item>
                  {authenticate(true) ? <Link to="/dashboard" className='contact links'>Dashboard</Link> : ''}

                  {/* <NavDropdown
                    title="Processos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className='dropdown'>
                    <NavDropdown.Item href="#action3" className='links'>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className='links'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className='links'>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action6" className='links'>
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown> */}
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
