import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import s from './Nav.module.scss'

export const Nav = () => {

    return (
        <div className={s.navContainer}>
        
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
    
            duration={3000}
            >Main</Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
    
            duration={3000}
            >Skills</Link>
             <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
    
            duration={3000}
            >Projects</Link>
             <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
    
            duration={3000}
            >Contacts</Link>
            
        </div>
    )
}