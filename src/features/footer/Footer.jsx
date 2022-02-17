import React from 'react'
import s from './Footer.module.scss'
import gitImg from '../../assets/image/git_logo.png'
import telegramImg from '../../assets/image/telegram_logo.png'
import linkendinImg from '../../assets/image/linkendin_logo.png'



export const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>

                <div className={s.infoBlock}>
                    <h4 className={s.footerName}>Serhii Kachurin</h4>
                    {/* <InfoRow title='name' value='Serhii' /> */}
                    <InfoRow title='tel' value='80664424348' />
                    <InfoRow title='email' value='serivan1108@gmail.com' />
                </div>
                
                <div className={s.footerNav}>
                    <div className={s.link}>
                        <img src={gitImg} alt='git'/>
                    </div>
                    <div className={s.link}>
                        <img src={telegramImg} alt='git'/>
                    </div>
                    <div className={s.link}>
                        <img src={linkendinImg} alt='git'/>
                    </div>
                   
                </div>
                <span className={s.footerEnd}>@2021 All rights reserved</span>
            </div>
        </div>
    )
}

const InfoRow = ({title, value}) => {

    return (
        <div className={s.infoRow}>
            <div className={s.infoRowTitle}>{title}</div>
            <div className={s.infoRowValue}>{value}</div>
        </div>
    )
}
