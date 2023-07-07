import React from 'react'
import s from './Genres.module.css'
import { NavLink } from 'react-router-dom'

const Genres = (props) => {
  return (
    
    <NavLink  className={s.genBTN} to={`/filmsByGenrePage/${props.genre.id}`}><h1>{props.genre.name}</h1></NavLink>
  )
}

export default Genres