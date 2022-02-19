import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { moviedata } from '../data'
import './MovieCard.css'
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div className='cc'>
      <Card className='cc'>
    <Card.Img variant="top" src={movie.posterUrl}  />
    <Card.Body>
      <Card.Title className='title'>{movie.title}</Card.Title>
      <Card.Text className='vv'>
       
      </Card.Text>
     <Link to={`/Description/${movie.id}`}> <Button variant="primary" >Go somewhere</Button></Link>
    </Card.Body>
  </Card></div>
  )
}

export default MovieCard