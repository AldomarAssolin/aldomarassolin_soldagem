import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Logo } from '../components/Logo';

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='d-flex align-items-center h-100'>
                    <Col md={4} sm={12}>
                        <div className="footer-right">
                            <Link to='/'>
                                <Logo/>
                                
                            </Link>
                        </div>
                        
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="footer-center">
                            <p>Aldomar Assolin</p>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="footer-left">
                            <p>Todos os direitos reservados. &copy;</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer