import React from 'react'
import s from './Main.module.scss'
import myPhoto from './../../assets/image/my-photo.jpg'


export const Main = () => {
const photo = {
    backgroundImage: `url(${myPhoto})`,
    backgroundSize: 'cover',
}
    return (
        <div className={s.mainBlock} id={'main'}> 
            <div className={s.mainBackImg}>{'FrontEnd\nDeveloper'}</div>
            <div className={s.mainContainer}>
                <div className={s.info}>
                    <span>Hello people!</span>
                    <div>My name is <b>Serhii</b> and i am a FrontEnd Developer</div>
                    <p>I have studied every day for that</p>
                </div>
                <div className={s.photo} style={photo}>

                </div>
            </div>
           
        </div>
    )
}