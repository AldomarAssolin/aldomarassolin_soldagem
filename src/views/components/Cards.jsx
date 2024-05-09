import Card from 'react-bootstrap/Card';

function Cards({ bg, cardClasses, CardHeader, CardTitle, CardText, CardFooter, children }) {
    return (

        <Card
            bg={bg}
            className={cardClasses}
        >
            <Card.Header>{CardHeader}</Card.Header>
            <Card.Body>
                <Card.Title>{CardTitle} </Card.Title>
                <Card.Text>
                    {CardText}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='small d-flex align-items-center justfy-content-around'>
                {CardFooter}{children}
            </Card.Footer>
        </Card>

    );
}

export default Cards;