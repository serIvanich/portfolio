import preload from '../../../assets/image/preloader.gif'
import s from './Preloader.module.scss'

function Preloader() {
  return (
    <div className={s.preloaderContainer}>
      <img src={preload} alt='' />
    </div>
  )
}
export default Preloader
