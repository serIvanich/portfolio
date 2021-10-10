import React from 'react'
import s from './Footer.module.css'




export const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h1 className={s.footerName}>My Name</h1>
                <div className={s.footerNav}>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>

                </div>
                <span className={s.footerEnd}>@2021 All rights reserved</span>
            </div>
        </div>
    )
}