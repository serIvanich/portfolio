import React from 'react'
import s from './Projects.module.css'
import {Project} from './Project';
import {Title} from '../../common/component/Title';
import todoImage from './../../assets/image/todo-list-image.jpg'
import socialNetImage from './../../assets/image/social-network-images.jpg'
import cardsImage from './../../assets/image/kards-image.jpg'
import counterImage from './../../assets/image/counter-image.jpg'


export const Projects = () => {

    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title title={'Projects'}/>
                <div className={s.allProjects}>
                    <Project projectTitle={'todo list'}
                             projectDescription={'To add TypeScript to an existing Create React App project, first install.'}
                             projectPicture={todoImage}
                    />
                    <Project projectTitle={'social network'}
                             projectDescription={'CSS Modules let you use the same CSS class name'}
                             projectPicture={socialNetImage}
                    />
                    <Project projectTitle={'cards'}
                             projectDescription={' let you use the same cards'}
                             projectPicture={cardsImage}
                    />
                   <Project projectTitle={'counter'}
                             projectDescription={' counter for use something'}
                             projectPicture={counterImage}
                    />

                </div>
            </div>
        </div>
    )
}