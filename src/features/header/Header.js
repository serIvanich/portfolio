import React, {useCallback, useState, useEffect } from 'react'
import s from './Header.module.scss'
import {NavBar} from "../navbar/NavBar";

export const Header = React.memo(() => {
    const [scroll, setScroll] = useState(0);
    const [letTransform, setLetTransform] = useState(false);

    const styles = {
        transform: letTransform ?'translateY(-180px)':'translateY(0px)',
        
       } 

    const onScroll = useCallback(() => setScroll((scroll) => {
        const newScroll = Math.round(window.scrollY)
        if (newScroll > 300 && newScroll > scroll) {
            setLetTransform(true)
        }else if (newScroll > 300 && newScroll < scroll){
            setLetTransform(false)
        } 
        return newScroll
     }), []);
    useEffect(() => {
        onScroll();
        
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [onScroll])
      
       
    const closeMenu = () => {
        setLetTransform(false)
    }
      
      
    return (
        <div className={s.headerContainer} style={styles}>
            <NavBar closeMenu={closeMenu}/>
        </div>
    )
})