import React from 'react'
import s from './Films.module.css'
import { NavLink } from 'react-router-dom'


const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const Films = ({film}) => {
  const scrolltotop = ()=>{
    window.scrollTo({
      top : 0,
      behavior : "instant"
    })
  }
  return (
    <NavLink to={`/filmPage/${film.id}`} className={s.fm} onClick={scrolltotop}>
      <p className={s.rating}>{film.vote_average}</p>
      <img src={imgUrl + film.poster_path}/>

      <div className={s.filmName}>
        <h1 className={s.filmTitle}>{film.title}</h1>
      </div>
     
    </NavLink>
  )
}

export default Films