import React from 'react'
import s from './Projects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/component/Title/Title';
import todoImage from './../../assets/image/todo-list-image.jpg'
import socialNetImage from './../../assets/image/social-network-images.jpg'
import cardsImage from './../../assets/image/kards-image.jpg'
import counterImage from './../../assets/image/counter-image.jpg'
import shoppingCartImage from './../../assets/image/shopping-cart-image.png'
import gradientImage from './../../assets/image/gradient-image.png'
import notebookImage from './../../assets/image/notebook-image.png'
import { projectLinks } from '../../assets/links/project-links'


export const Projects = () => {

  const {todolist, socialNetwork, knowledgeCards, counter, shoppingCart, setGradient, notebook} = projectLinks
  
  const socialImg = createBackgroundStyles(socialNetImage)
  const todoListImg = createBackgroundStyles(todoImage)
  const cardsImg = createBackgroundStyles(cardsImage)
  const counterImg = createBackgroundStyles(counterImage)
  const shoppingCartImg = createBackgroundStyles(shoppingCartImage)
  const gradientImg = createBackgroundStyles(gradientImage)
  const notebookImg = createBackgroundStyles(notebookImage)

  function createBackgroundStyles(url) {
    return {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
    }
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
            <Project projectTitle={'shopping cart'}
                projectDescription={' you can add and delete product that you need '}
                style={shoppingCartImg} linkTo={shoppingCart}
            />
            <Project projectTitle={'set gradient'}
                projectDescription={' create your own gragients '}
                style={gradientImg} linkTo={setGradient}
            />
            <Project projectTitle={'notebook'}
                projectDescription={' you can have under controll your matters '}
                style={notebookImg} linkTo={notebook}
            />
        </div>
      </div>
    </div>
    )
}