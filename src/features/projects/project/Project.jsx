import React, { useState } from 'react'
import {ModalContainer} from '../../../common/component/modal-view/ModalContainer'
import s from './Project.module.scss'

export const Project = ({projectTitle, projectDescription, linkTo, style}) => {
    const [showDescription, setShowDescription] = useState(false)
    const openDescription = () => {
        console.log('open')
        setShowDescription(true)
    }
    const closeDescription = () => {
        console.log('close')
        setShowDescription(false) 
    }
    // const descriptionStyles = {
    //     display:showDescription? 'inline-block' : 'none'
    // }
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
            {/* <span className={s.projectDescription} style={descriptionStyles}>{projectDescription}</span> */}
        </div>
    )
}