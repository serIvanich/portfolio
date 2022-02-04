import React from 'react'

import s from './Project.module.scss'

export const Project = ({projectTitle, projectDescription, linkTo, style}) => {

    return (
        <div className={s.project}>
            <div className={s.projectPictureBlock} style={style}>
                {/*<img src={projectPicture} alt={''} className={s.projectPicture}/>*/}
                <a href={linkTo} className={s.projectLink}>LINK</a>
            </div>
            <h2>{projectTitle}</h2>
            <span className={s.projectDescription}>{projectDescription}</span>
        </div>
    )
}