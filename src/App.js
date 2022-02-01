import React from 'react'
import './App.scss';
import {Header} from "./features/header/Header";
import {Skills} from "./features/skills/Skills";
import {Main} from "./features/main/Main";
import {Projects} from "./features/projects/Projects";
import {RemoveWork} from "./features/remove-work/RemoveWork";
import {Contacts} from "./features/contacts/Contacts";
import {Footer} from "./features/footer/Footer";

import { MobileHeader } from './features/header/MobileHeader';

function App() {
    
        
      
    
    return (
        <div className="App" style={{}}>
            <MobileHeader/>
            <Header/>
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
