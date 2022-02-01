import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import s from './NavBar.module.scss'

export const NavBar = ({closeMenu}) => {
    
  
  
  const onClickLink = () => {
    closeMenu()
  }
   const scrollToTop = () => {
       
        scroll.scrollToTop();
    };
    return (
      <>
      
        <div className={s.navContainer} >
        
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="main"
              spy={true}
              smooth={true}
              onClick={onClickLink}
              duration={3000}
              >Main 
            </Link>
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="skills"
              spy={true}
              smooth={true}
              onClick={onClickLink}
              duration={3000}
            >Skills
            </Link>
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="projects"
              spy={true}
              smooth={true}
              onClick={onClickLink}
              duration={3000}
            >Projects
            </Link>
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="contacts"
              spy={true}
              smooth={true}
              onClick={onClickLink}
              duration={3000}
            >Contacts
            </Link>


            
        </div>
        </>
    )
}

{/* <div className={s.scrollToUp} onClick={scrollToTop}>^</div> */}
