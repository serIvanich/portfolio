import React from 'react'
import s from './Projects.module.css'

export const Project = ({projectTitle, projectDescription, projectPicture, style}) => {

    return (
        <div className={s.project}>
            <div className={s.projectPictureBlock} style={style}>
                {/*<img src={projectPicture} alt={''} className={s.projectPicture}/>*/}
                <a href='/' className={s.projectLink}>LINK</a>
            </div>
            <h2>{projectTitle}</h2>
            <span className={s.projectDescription}>{projectDescription}</span>
        </div>
    )
}