import React, { useEffect, useState } from 'react'
import s from './filmsPage.module.css'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'




const apiKey ="f36f23edf6e10fd2ddcf939916b1f67a"
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const FilmsPage = () => {
  const [film, setFilm] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(response=> setFilm(response.data))
  },[id])


  const goBack = ()=>{
   
    navigate(-1)
    window.scrollTo({
      top : 0,
      behavior : "instant"
    })
  }


  return (
    <div className={s.filmItem}>
      <div className={s.imgDiv}>
      <img src={imgUrl + film?.poster_path}/>
      <img src={imgUrl + film?.backdrop_path}/>
      </div>
      <div className={s.infoDiv}>
        <div className={s.h}>
        <h1>{film?.title}</h1>
        <button onClick={goBack} className={s.goback}><i class="fa-solid fa-arrow-left"></i> Go Back</button>
        </div>

        <div className={s.info}>
            <p><span>Original Title </span> <span>{film?.original_title}</span></p>
            <p><span>RELEASE-DATE  </span><span>{film?.release_date}</span> </p>
            <p><span>OVERVIEW </span><span>{film?.overview}</span> </p>
            <p><span>RATING  </span><span>{film?.vote_average}</span> </p>
            <p><span>POPULARITY</span>  <span>{film?.popularity}</span> </p>
            
         </div>
         <div className={s.videodiv}>
         <div className={s.video}><h2>VIDEO</h2></div>
         </div>
      </div>
    </div>
  )
}

export default FilmsPage