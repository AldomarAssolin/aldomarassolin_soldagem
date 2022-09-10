import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import imgLogo from '../../images/logos/android-icon-48x48.png'

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <div className="footer-left">
                            <p>Todos os direitos reservados. &copy;</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-center">
                            <p>Aldomar Assolin</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-right">
                            <img src={imgLogo} alt="Logomarca" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
