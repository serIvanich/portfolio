import React from 'react'
import preload from '../../../assets/image/1486.gif'
import s from './Preloader.module.scss'


const Preloader = () => {
  
    return (
    <div className={s.preloaderContainer}>

            <img src={preload} alt={''}/>

    </div> )
}
export default Preloader
