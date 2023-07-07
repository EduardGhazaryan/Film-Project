import React from 'react'
import s from './newFilms.module.css'
import Films from '../../Components/Films/Films'
import Paginations from '../../Components/Pagination/Pagination'
import { useSelector } from 'react-redux'

const NewFilms = () => {
  const films = useSelector((state) => state.filmsData.films)
  return (
    <div className={s.main}>
        <div className={s.films}>
            {
                 films.map(film => <Films key={film.id} film={film}/>)
            }
        </div>
        <div className={s.btnDiv}>
           

            <Paginations/>
        </div>
    </div>
  )
}

export default NewFilms