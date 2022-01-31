import React from 'react'
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import s from './Nav.module.scss'

export const Nav = () => {
    
  
  
  
   const scrollToTop = () => {
       
        scroll.scrollToTop();
    };
    return (
      <>
      <div className={s.scrollToUp} onClick={scrollToTop}>^</div>
        <div className={s.navContainer} >
        
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="main"
              spy={true}
              smooth={true}
    
              duration={3000}
              >Main 
            </Link>
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="skills"
              spy={true}
              smooth={true}
    
              duration={3000}
            >Skills
            </Link>
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="projects"
              spy={true}
              smooth={true}
    
              duration={3000}
            >Projects
            </Link>
            <Link
              className={s.navLink}
              activeClass={s.active}
              to="contacts"
              spy={true}
              smooth={true}
    
              duration={3000}
            >Contacts
            </Link>


            
        </div>
        </>
    )
}