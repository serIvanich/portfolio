import React, { useState } from 'react'

import s from './Project.module.scss'

export const Project = ({projectTitle, projectDescription, linkTo, style}) => {
    const [showDescription, setShowDescription] = useState(false)
    const onClickDescription = () => {
        setShowDescription(!showDescription)
    }
const descriptionStyles = {
    display:showDescription? 'inline-block' : 'none'
}
    return (
        <div className={s.project}>
            <div className={s.projectPictureBlock} style={style}>
                {/*<img src={projectPicture} alt={''} className={s.projectPicture}/>*/}
                <a href={linkTo} className={s.projectLink}>LINK</a>
            </div>
            <h2 className={s.descriptionTitle} onClickCapture={onClickDescription}>{projectTitle}</h2>
            <span className={s.projectDescription} style={descriptionStyles}>{projectDescription}</span>
        </div>
    )
}