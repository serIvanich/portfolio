import React from 'react'
import s from './Skills.module.css'
import {Skill} from "./Skill";


export const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2>Skills</h2>
                <div className={s.allSkills}>
                    <Skill title={'Javascript'}
                           description={'To add TypeScript to an existing Create React App project, first install.'}/>
                    <Skill title={'HTML'}
                           description={'Global installs of create-react-app are no longer supported'}/>
                    <Skill title={'CSS'}
                           description={'CSS Modules let you use the same CSS class name'}/>
                </div>
            </div>
        </div>
    )
}