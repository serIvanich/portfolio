import React from 'react'
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/component/Title";
import st from '../main/Main.module.scss'


export const Skills = () => {

    return (
        <div className={s.skillsBlock} id={'skills'}>
            
            <div className={s.skillsContainer}>
                <Title title={'Skills'}/>
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