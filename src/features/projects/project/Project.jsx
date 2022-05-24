import React, { useState } from 'react'
import {ModalContainer} from '../../../common/component/modal-view/ModalContainer'
import s from './Project.module.scss'

export const Project = ({projectTitle, projectDescription, linkTo, style}) => {
    const [showDescription, setShowDescription] = useState(false)
    const openDescription = () => {
        setShowDescription(true)
    }
    const closeDescription = () => {
        setShowDescription(false) 
    }
    
    return (
        <div className={s.project}>
            <div className={s.projectPictureBlock} style={style}>
                <a href={linkTo} className={s.projectLink}>LINK</a>
            </div>
            <h2 className={s.projectTitleDescription} onClickCapture={openDescription}>{projectTitle}</h2>
            { showDescription && <ModalContainer onClickModalContainer={closeDescription}>
                <div className={s.projectTextDescription}>
                    {projectDescription}        
                </div>
            </ModalContainer>}
        </div>
    )
}