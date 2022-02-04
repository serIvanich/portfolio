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
            <div className={s.mainBackImg}>FrontEnd Developer</div>
            <div className={s.mainContainer}>
                <div className={s.info}>
                    <span>Hello people!</span>
                    <div>My name is <b>Serhii</b> and i am a FrontEnd Developer</div>
                    <p>I want to improve my skills and learn new possibility of javascript.</p>
                </div>
                <div className={s.photo} style={photo}>

                </div>
            </div>
           
        </div>
    )
}