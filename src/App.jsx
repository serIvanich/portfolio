import React, {useState, useEffect} from 'react'
import s from './App.module.scss';
import {Header} from "./features/header/Header";
import {Skills} from "./features/skills/Skills";
import {Main} from "./features/main/Main";
import {Projects} from "./features/projects/Projects";
import {RemoveWork} from "./features/remove-work/RemoveWork";
import {Contacts} from "./features/contacts/Contacts";
import {Footer} from "./features/footer/Footer";



function App() {
    const [onScroll, setOnScroll] = useState(true)

    useEffect(() => {
        if (!onScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto'
         }
        
    },[onScroll])
        
     
    
    return (
        <div className={s.app} style={{}}>
           
            <Header changeScroll={setOnScroll}/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoveWork/>
            <Contacts/>
            <Footer/>
            
        
           
        </div>
    );
}

export default App;
