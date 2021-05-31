import React from 'react'
import s from './Projects.module.css'

export const Project = ({projectTitle, projectDescription, projectPicture}) => {

    return (
        <div className={s.project}>
            <div className={s.projectPictureBlock}>
                <img src={projectPicture} className={s.projectPicture}/>
                <a href className={s.projectLink}>LINK</a>
            </div>
            <h2>{projectTitle}</h2>
            <span className={s.projectDescription}>{projectDescription}</span>
        </div>
    )
}