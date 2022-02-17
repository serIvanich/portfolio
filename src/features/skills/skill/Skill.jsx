import React from 'react'
import s from './Skill.module.scss'


export const Skill = ({logo, title, description}) => {

    return (
        <div className={s.skill}>
            <div className={s.icon} >
                <img src={logo} alt='skill'/>
            </div>
            <h2>{title}</h2>
            <span className={s.description}>{description}</span>
        </div>
    )
}