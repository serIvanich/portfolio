import React from 'react'
import s from './Projects.module.css'
import {Project} from "./Project";
import {Title} from "../../common/component/Title";


export const Projects = () => {

    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title title={'Projects'}/>
                <div className={s.allProjects}>
                    <Project projectTitle={'social network'}
                             projectDescription={'To add TypeScript to an existing Create React App project, first install.'}
                             projectPicture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TaN7ysIH-0SofvpIADO8pPsri4vMgS34bQ&usqp=CAU'}
                    />
                    <Project projectTitle={'counter'}
                             projectDescription={'CSS Modules let you use the same CSS class name'}
                             projectPicture={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINocYcjskU22Iv0WELThq7SuLKTj3Djbmgg&usqp=CAU'}
                    />
                </div>
            </div>
        </div>
    )
}