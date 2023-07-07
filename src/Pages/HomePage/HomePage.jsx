import React from 'react'
import s from "./HomePage.module.css"
import MainSlider from '../../Components/Slider/MainSlider'
import NewFilmsLimit from '../../Components/HomePgaeFilms/NewFilmsLimit'
import CrimeFilms from '../../Components/HomePgaeFilms/CrimeFilms'
import FamilyFilms from '../../Components/HomePgaeFilms/FamilyFilms'
import WarFilms from '../../Components/HomePgaeFilms/WarFilms'
import DramaFilms from '../../Components/HomePgaeFilms/DramaFilms'




const HomePage = () => {

  return (
    <div className={s.mainDiv}>
      <MainSlider/>
      <NewFilmsLimit/>
      <WarFilms/>
      <DramaFilms/>
      <FamilyFilms/>
      <CrimeFilms/>
    </div>
    
  )
}

export default HomePage