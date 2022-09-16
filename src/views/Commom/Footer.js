import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import imgLogo from '../../public/images/logos/android-icon-48x48.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col sm={4}>
                        <div className="footer-right">
                            <Link to='/'>
                                <img src={imgLogo} alt="Logomarca" />
                            </Link>
                        </div>
                        
                    </Col>
                    <Col sm={4}>
                        <div className="footer-center">
                            <p>Aldomar Assolin</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="footer-left">
                            <p>Todos os direitos reservados. &copy;</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
