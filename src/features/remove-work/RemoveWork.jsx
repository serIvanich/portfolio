import { Link } from 'react-scroll'
import s from './RemoveWork.module.scss'

export const RemoveWork = () => {
  return (
    <div className={s.removeWorkBlock}>
      <div className={s.removeWorkContainer}>
        <h2 className={s.title}>I am considering options for remote work</h2>

        <Link
          className={s.linkOffRemoveWork}
          to='contacts'
          spy
          smooth
          duration={3000}
        >
          message me
        </Link>
      </div>
    </div>
  )
}
