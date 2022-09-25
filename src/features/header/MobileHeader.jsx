import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import s from './Header.module.scss'

import { NavBar } from '../navbar/NavBar'

export function MobileHeader({ changeScroll }) {
  const [letOpen, setLetOpen] = useState(false)

  const styles = {
    transform: letOpen ? 'translateX(0)' : 'translateX(100%)',
  }

  const openMobileMenu = () => {
    setLetOpen(true)
    changeScroll(false)
  }

  const closeMobileMenu = () => {
    setLetOpen(false)
    changeScroll(true)
  }

  return (
    <div className={s.mobileHeaderContainer}>
      <div className={s.mobileNavMenu}>
        {letOpen ? (
          <AiOutlineClose onClick={closeMobileMenu} />
        ) : (
          <AiOutlineMenu onClick={openMobileMenu} />
        )}
      </div>
      <div className={s.navbarMobileContainer} style={styles}>
        <NavBar closeMenu={closeMobileMenu} />
      </div>
    </div>
  )
}
