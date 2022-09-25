import s from './Skills.module.scss'
import { Skill } from './skill/Skill'
import { Title } from '../../common/component/Title/Title'
import jsImg from '../../assets/image/js_logo.png'
import htmlImg from '../../assets/image/html_logo.png'
import cssImg from '../../assets/image/css_logo.png'
import reactImg from '../../assets/image/react-logo.png'
import reactReduxImg from '../../assets/image/react-redux-logo.png'

export function Skills() {
  return (
    <div className={s.skillsBlock} id='skills'>
      <div className={s.skillsContainer}>
        <Title title='Skills' />
        <div className={s.allSkills}>
          <Skill
            logo={jsImg}
            title='Javascript'
            description='Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.'
          />
          <Skill
            logo={htmlImg}
            title='HTML'
            description='HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. '
          />
          <Skill
            logo={cssImg}
            title='CSS'
            description='Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.'
          />
          <Skill
            logo={reactImg}
            title='REACT'
            description={`React is an Open Source library created and maintained by Facebook.
                         It's a great tool to render the User Interface (UI) of modern web applications.
                        `}
          />
          <Skill
            logo={reactReduxImg}
            title='REACT-REDUX'
            description='The Redux Toolkit package is intended to be the standard way to write Redux logic.'
          />
        </div>
      </div>
    </div>
  )
}
