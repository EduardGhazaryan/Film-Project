import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilmItem from './FilmItem'
import s from './filmsLimit.module.css'


const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const CrimeFilms = () => {

    const [films, setFilms] =useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${80}&page=${1}`)
        .then(response=> setFilms(response.data.results))
    },[])

  return (
    <div className={s.bigDiv}>
        
        <div className={s.bigDivChild}>
            <h1>CRIME</h1>
            
        </div>
        <div className={s.bigDivChildTwo}>
            {
                films.map(film=><FilmItem film={film} key={film.id}/>)
            }
            </div>
    </div>
  )

}

export default CrimeFilms