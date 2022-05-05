import React from 'react'
import s from './Projects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/component/Title/Title';
import todoImage from './../../assets/image/todo-list-image.jpg'
import socialNetImage from './../../assets/image/social-network-images.jpg'
import cardsImage from './../../assets/image/kards-image.jpg'
import counterImage from './../../assets/image/counter-image.jpg'
import { projectLinks } from '../../assets/links/project-links';


export const Projects = () => {

  const {todolist, socialNetwork, knowledgeCards, counter} = projectLinks
  const socialImg = {
    backgroundImage: `url(${socialNetImage})`,
    backgroundSize: 'cover',
  }
  const todoListImg = {
    backgroundImage: `url(${todoImage})`,
    backgroundSize: 'cover',
  }
  const cardsImg = {
    backgroundImage: `url(${cardsImage})`,
    backgroundSize: 'cover',
  }
  const counterImg = {
    backgroundImage: `url(${counterImage})`,
    backgroundSize: 'cover',
  }
  return (
    <div className={s.projectsBlock}  id={'projects'}>
      <div className={s.projectsContainer}>
        <Title title={'Projects'}/>
        <div className={s.allProjects}>
            <Project projectTitle={'to do list'}
                projectDescription={'To add TypeScript to an existing Create React App project, first install.'}
                style={todoListImg} linkTo={todolist}
            />
            <Project projectTitle={'social network'}
                projectDescription={'CSS Modules let you use the same CSS class name'}
                style={socialImg} linkTo={socialNetwork}
            />
            <Project projectTitle={'cards'}
                projectDescription={' let you use the same cards'}
                style={cardsImg} linkTo={knowledgeCards}
            />
            <Project projectTitle={'counter'}
                projectDescription={' counter for use something'}
                style={counterImg} linkTo={counter}
            />

        </div>
      </div>
    </div>
    )
}