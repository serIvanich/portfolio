import s from './NewSkill.module.scss'

export const NewSkill = ({ logo }) => {
  return (
    <div className={s.newContainer}>
      <div className={s.icon}>
        <img src={logo} alt='skill' />
      </div>
    </div>
  )
}
