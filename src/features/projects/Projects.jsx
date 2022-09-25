import s from './Projects.module.scss'
import { Project } from './project/Project'
import { Title } from '../../common/component/Title/Title'
import todoImage from '../../assets/image/todo-list-image.jpg'
import socialNetImage from '../../assets/image/social-network-images.jpg'
import cardsImage from '../../assets/image/kards-image.jpg'
import counterImage from '../../assets/image/counter-image.jpg'
import shoppingCartImage from '../../assets/image/shopping-cart-image.png'
import gradientImage from '../../assets/image/gradient-image.png'
import notebookImage from '../../assets/image/notebook-image.png'
import chatImage from '../../assets/image/chat-image.png'
import { projectLinks } from '../../assets/links/project-links'
import { projectsDescription } from '../../assets/text-description/projects-description'

export function Projects() {
  const {
    todolist,
    socialNetwork,
    knowledgeCards,
    counter,
    shoppingCart,
    setGradient,
    notebook,
    liveChat,
  } = projectLinks

  const {
    descriptionTodoList,
    descriptionGradients,
    descriptionShoppingCart,
    descriptionMyNotebook,
    descriptionCounter,
    descriptionSocialNetwork,
    descriptionCards,
    descriptionChat,
  } = projectsDescription

  function createBackgroundStyles(url) {
    return {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
    }
  }
  const socialImg = createBackgroundStyles(socialNetImage)
  const todoListImg = createBackgroundStyles(todoImage)
  const cardsImg = createBackgroundStyles(cardsImage)
  const counterImg = createBackgroundStyles(counterImage)
  const shoppingCartImg = createBackgroundStyles(shoppingCartImage)
  const gradientImg = createBackgroundStyles(gradientImage)
  const notebookImg = createBackgroundStyles(notebookImage)
  const chatImg = createBackgroundStyles(chatImage)

  return (
    <div className={s.projectsBlock} id='projects'>
      <div className={s.projectsContainer}>
        <Title title='Projects' />
        <div className={s.allProjects}>
          <Project
            projectTitle='to do list'
            projectDescription={descriptionTodoList}
            style={todoListImg}
            linkTo={todolist}
          />
          <Project
            projectTitle='shopping cart'
            projectDescription={descriptionShoppingCart}
            style={shoppingCartImg}
            linkTo={shoppingCart}
          />
          <Project
            projectTitle='set gradient'
            projectDescription={descriptionGradients}
            style={gradientImg}
            linkTo={setGradient}
          />
          <Project
            projectTitle='notebook'
            projectDescription={descriptionMyNotebook}
            style={notebookImg}
            linkTo={notebook}
          />

          <Project
            projectTitle='social network'
            projectDescription={descriptionSocialNetwork}
            style={socialImg}
            linkTo={socialNetwork}
          />
          <Project
            projectTitle='cards'
            projectDescription={descriptionCards}
            style={cardsImg}
            linkTo={knowledgeCards}
          />
          <Project
            projectTitle='counter'
            projectDescription={descriptionCounter}
            style={counterImg}
            linkTo={counter}
          />
          <Project
            projectTitle='live-chat'
            projectDescription={descriptionChat}
            style={chatImg}
            linkTo={liveChat}
          />
        </div>
      </div>
    </div>
  )
}
