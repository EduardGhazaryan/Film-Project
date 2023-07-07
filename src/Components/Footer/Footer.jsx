import React from 'react'
import s from './footer.module.css'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.firstChild}>
        <h1>&copy; Eduard Ghazaryan</h1>
      </div>
      <div className={s.secondChild}>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-telegram"></i></a>
      </div>
    </div>
  )
}

export default Footer