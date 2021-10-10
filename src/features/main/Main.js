import React from 'react'
import s from './Main.module.css'


export const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.info}>
                    <span>Hi There</span>
                    <h2>I am SerIvanich</h2>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    )
}