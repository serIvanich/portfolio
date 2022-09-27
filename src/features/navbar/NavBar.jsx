import { Link } from 'react-scroll'
import s from './NavBar.module.scss'

export const NavBar = ({ closeMenu }) => {
  const onClickLink = () => {
    closeMenu()
  }

  return (
    <div className={s.navContainer}>
      <GeneralLink link='main' onClickLink={onClickLink} />
      <GeneralLink link='skills' onClickLink={onClickLink} />
      <GeneralLink link='projects' onClickLink={onClickLink} />
      <GeneralLink link='contacts' onClickLink={onClickLink} />
    </div>
  )
}

const GeneralLink = ({ link, onClickLink }) => {
  const title = `${link.slice(0, 1).toUpperCase()}${link.slice(1)}`
  return (
    <Link
      className={s.navLink}
      activeClass={s.active}
      to={link}
      spy
      smooth
      onClick={onClickLink}
      duration={3000}
    >
      {title}
    </Link>
  )
}
