import React from 'react'
import s from './Skill.module.scss'

export const Skill = ({title, description}) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h2>{title}</h2>
            <span className={s.description}>{description}</span>
        </div>
    )
}