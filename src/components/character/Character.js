import React from 'react'
import {Card,Col,Button} from "react-bootstrap";

const Character = ({ id, name, image, statatus, species, created }) => {

  return (
    <Col> <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go{id}</Button>
      </Card.Body>
     </Card>
    </Col>
  
  )
}

export default Character