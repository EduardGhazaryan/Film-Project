import React, { useEffect, useState } from 'react'
import s from './SearchInput.module.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"
const imgUrl = 'https://image.tmdb.org/t/p/w500/'

const SearchInput = () => {
    const [text, setText] = useState('')
    const [searchFilm, setSearchFilm] = useState([])


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
        .then(response=> setSearchFilm(response.data.results))
    },[text])


    const textFunc = (e)=>{
        setText(e.target.value)
    }

    

    document.body.addEventListener('click',function(){
      setText('')
    })

  return (
    <div className={s.searchBlock}>
        <div className={s.searchText}>
            <input value={text} onChange={textFunc} placeholder='Search...'/>
        </div>
        {
            text.length > 0 ? <div className={s.searchContent}>
              {
                searchFilm.map((item) => {
                  return <NavLink to={`/filmPage/${item.id}`}
                  className={s.searchLi}
                  key={item.id}
                  >
                    <img src={imgUrl + item.poster_path}/>
                    <p>{item.title}</p>
                  </NavLink >
                })
              }
            </div> : ''
        }
    </div>
  )
}

export default SearchInput