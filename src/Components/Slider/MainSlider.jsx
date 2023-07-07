import axios from 'axios';
import React, { useEffect, useState } from 'react'
import s from './slider.module.css'
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";
const imgUrl = "https://image.tmdb.org/t/p/w500/"


const MainSlider = () => {
  const [films, setFilms] = useState([])
 

 useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${1}`)
    .then(response => setFilms(response.data.results))
  }) 

  return (
   <div className={s.slideDiv}>
     <Carousel>
      {
        films.map(film=><Carousel.Item>
          <img
            className="d-block w-100"
            src={imgUrl+film.backdrop_path}
            alt="First slide"
          />
          <Carousel.Caption>
            <NavLink className={s.link} to={`/filmPage/${film.id}`}> <h1>WATCH NOW {film.title}</h1></NavLink>
          </Carousel.Caption>
        </Carousel.Item>)
      }
    </Carousel>
   </div>
  )
}

export default MainSlider