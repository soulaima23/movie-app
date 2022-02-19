import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({Movies}) => {
    const{id}=useParams()
    const Movie=Movies.find(movie=>movie.id==id)
    console.log (Movies)

  return (
    <div>
            {Movie.description}
    </div>
  )
}

export default Description