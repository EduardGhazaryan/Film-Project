import React, { useEffect, useState } from 'react'
import s from './Header.module.css'
import Genres from './Genres/Genres'
import SearchInput from './SearchInput/SearchInput'
import { fetchGenres } from '../../redux/Slices/GenresSlice'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'



const Header = () => {
  const dispatch = useDispatch()
  const genres = useSelector((state) => state.genresData.genres)
  useEffect(() => {
    dispatch(fetchGenres())
  }, [])

  const pageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }


  return (
    <header>
      <NavLink to={'./'} onClick={pageUp}>
        <img src='https://i.pinimg.com/736x/3c/82/36/3c823622b4e7b1f32de70d51f65f4753.jpg' className={s.img} />
      </NavLink>
      <div className={s.gen}>
        <div className={s.genFirst}> <h1 className={s.genH1}>GENRES</h1>
          <div className={s.genChild}>
            {
              genres.map(genre => <Genres key={genre.id} genre={genre} />)
            }
          </div>
        </div>
        <NavLink to='/newFilms' className={s.genSecond} onClick={pageUp}>
          <h1 className={s.genSecondH1}>NEW/POPULAR</h1>
        </NavLink>

      </div>

      <div>
        <SearchInput />
      </div>
      <button className={s.signButton}>Sign In</button>
    </header>
  )
}

export default Header