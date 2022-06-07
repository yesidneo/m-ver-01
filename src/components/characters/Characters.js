import React from 'react'
import { Row } from 'react-bootstrap'
import Character from '../character/Character'

const Characters = ({ characters }) => {
  console.log(characters)

  return (
        <Row className='justify-content-center'>
            { characters?.length > 0 && characters.map((character) =>(
                   <Character character {...character}/>
                  ))}
        </Row>
  )
  
}

export default Characters