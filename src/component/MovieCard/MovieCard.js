import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { moviedata } from '../data'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <div className='cc'>
      <Card style={{margin:'20px'}}>
    <Card.Img variant="top" src={movie.posterUrl}  />
    <Card.Body>
      <Card.Title className='title'>{movie.title}</Card.Title>
      <Card.Text className='vv'>
        {movie.description}
      </Card.Text>
      <Button variant="primary" >Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}

export default MovieCard