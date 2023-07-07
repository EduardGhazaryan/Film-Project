import React, { useEffect } from 'react'
import s from './filmsByGenre.module.css'
import Films from '../../Components/Films/Films'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilmsByGenre } from '../../redux/Slices/FilmsByGenreSlice'
import { useParams } from 'react-router-dom'
import Paginations from '../../Components/Pagination/Pagination'


const FilmsByGenrePage = () => {
    const dispatch = useDispatch()
    const {films, genrePageNumber} = useSelector((state)=> state.filmsByGenreData)
    const {id} = useParams() 
 

    useEffect(()=>{
        dispatch(fetchFilmsByGenre({id, genrePageNumber}))
    },[id, genrePageNumber])
  return (
    <>
        <div className={s.films}>
            {
                 films.map(film => <Films key={film.id} film={film}/>)
            }
            
        </div>
        <div className={s.btnDiv}>
           

           <Paginations/>
        </div>
    </>
  )
}

export default FilmsByGenrePage