import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Cards_Experinces = ({cardImg, cardTitle, cardSubtitle, cardText, cardDataIn, cardDataOut}) => {
  return (
    <Card className='m-3 border-0'>
        <Row>
            <Col sm={4} md={2} className='py-3'>
                <Card.Img variant="left" src={cardImg} width='auto'/>
            </Col>
            <Col sm={8} md={10} className='px-md-5'>
                <Card.Body>
                    <Card.Title className='text-start'>{cardTitle}</Card.Title>
                    <Card.Subtitle className='text-start'>{cardSubtitle}</Card.Subtitle>
                    <Card.Text className='text-start py-3'>{cardText}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{cardDataIn}</small>
                    <small className="text-muted"> - </small>
                    <small className="text-muted">{cardDataOut}</small>
                </Card.Footer>
            </Col>
        </Row>  
    </Card>
  )
}

export default Cards_Experinces