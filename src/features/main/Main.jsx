import React from 'react'
import s from './Main.module.scss'
import myPhoto from './../../assets/image/my-photo.jpg'
import { Title } from '../../common/component/Title'


export const Main = () => {
const photo = {
    backgroundImage: `url(${myPhoto})`,
    backgroundSize: 'cover',
}
    return (
        <div className={s.mainBlock} id={'main'}> 
           <Title title={'web developer'} />
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
//  <div className={s.mainBackImg}>FrontEnd Developer</div>