import React, {useCallback, useState, useEffect } from 'react'
import s from './Header.module.scss'
import {Nav} from "../nav/Nav";

export const Header = () => {
    const [scroll, setScroll] = useState(0);
    const [letTransform, setLetTransform] = useState(false);
    const onScroll = useCallback(() => setScroll((scroll) => {
        const newScroll = Math.round(window.scrollY)
        if (newScroll > 80 && newScroll > scroll) {
            setLetTransform(true)
        }else if (newScroll > 80 && newScroll < scroll){
            setLetTransform(false)
        } 
        return newScroll
     }), []);
    useEffect(() => {
        onScroll();
        
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [onScroll])
      
       const styles = {
        transform: letTransform ?'translateY(-80px)':'translateY(0px)',
        transition: 'all 0.5s ease 0s',
       } 
    
      
      
    return (
        <div className={s.container} style={styles}>
            <Nav/>
        </div>
    )
}