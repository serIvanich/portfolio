import s from './Skill.module.scss'

export function Skill({ logo, title, description }) {
  return (
    <div className={s.skill}>
      <div className={s.icon}>
        <img src={logo} alt='skill' />
      </div>
      <h3>{title}</h3>
      <span className={s.description}>{description}</span>
    </div>
  )
}
