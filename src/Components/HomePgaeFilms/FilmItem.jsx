import React from 'react'
import s from './filmsLimit.module.css'
import { NavLink } from 'react-router-dom'

const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const FilmItem = ({film}) => {
  const scrolltop = ()=>{
    window.scrollTo({
      top : 0,
      behavior : "instant"
    })
  }
  return (
        <NavLink onClick={scrolltop} to={`/filmPage/${film.id}`} className={s.fm}>
      <p className={s.rating}>{film.vote_average}</p>
      <img src={imgUrl + film.poster_path}/>
    </NavLink>
   
   
  )
}

export default FilmItem

