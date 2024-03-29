import React, { useCallback, useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import s from './Header.module.scss'
import { NavBar } from '../navbar/NavBar'

export const Header = React.memo(({ changeScroll }) => {
  const [scroll, setScroll] = useState(0)
  const [showHeader, setShowHeader] = useState(false)
  const [showMobileNavbar, setShowMobileNavbar] = useState(false)
  // show mobile navbar
  const stylesMobileNavbar = {
    transform: showMobileNavbar ? 'translateX(0)' : 'translateX(100%)',
  }
  // show general heder
  const styles = {
    transform: showHeader ? 'translateY(-180px)' : 'translateY(0px)',
  }

  const onScroll = useCallback(
    () =>
      setScroll((scr) => {
        const newScroll = Math.round(window.scrollY)
        if (newScroll !== scroll) {
          if (newScroll > 300 && newScroll > scr) {
            setShowHeader(true)
          } else if (newScroll > 300 && newScroll < scr) {
            setShowHeader(false)
          }
        }
        return newScroll
      }),
    [scroll]
  )

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  const closeMenu = () => {
    setShowHeader(false)
  }

  const openMobileMenu = () => {
    setShowMobileNavbar(true)
    changeScroll(false)
  }

  const closeMobileMenu = () => {
    setShowMobileNavbar(false)
    changeScroll(true)
  }

  return (
    <div className={s.headerContainer} style={styles}>
      <MobileNavMenu
        showMobileNavbar={showMobileNavbar}
        closeMobileMenu={closeMobileMenu}
        openMobileMenu={openMobileMenu}
      />
      <GeneralNavbar closeMenu={closeMenu} />
      <MobileNavbar closeMenu={closeMobileMenu} styles={stylesMobileNavbar} />
    </div>
  )
})

function MobileNavMenu({ showMobileNavbar, closeMobileMenu, openMobileMenu }) {
  return (
    <div className={s.mobileNavMenu}>
      {showMobileNavbar ? (
        <AiOutlineClose onClick={closeMobileMenu} />
      ) : (
        <AiOutlineMenu onClick={openMobileMenu} />
      )}
    </div>
  )
}

function GeneralNavbar({ closeMenu }) {
  return (
    <div className={s.navbarContainer}>
      <NavBar closeMenu={closeMenu} />
    </div>
  )
}

function MobileNavbar({ closeMenu, styles }) {
  return (
    <div className={s.navbarMobileContainer} style={styles}>
      <NavBar closeMenu={closeMenu} />
    </div>
  )
}
