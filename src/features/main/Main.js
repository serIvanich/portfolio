import React from 'react'
import s from './Main.module.scss'
import myPhoto from './../../assets/image/my-photo.jpg'


export const Main = () => {
const photo = {
    backgroundImage: `url(${myPhoto})`,
    backgroundSize: 'cover',
}
    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.info}>
                    <span>Hi There</span>
                    <h2>I am SerIvanich</h2>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo} style={photo}>

                </div>
            </div>
        </div>
    )
}