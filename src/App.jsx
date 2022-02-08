import React, {useState, useEffect, useReducer} from 'react'
import s from './App.module.scss';
import {Header} from "./features/header/Header";
import {Skills} from "./features/skills/Skills";
import {Main} from "./features/main/Main";
import {Projects} from "./features/projects/Projects";
import {RemoveWork} from "./features/remove-work/RemoveWork";
import {Contacts} from "./features/contacts/Contacts";
import {Footer} from "./features/footer/Footer";
import { appReducer, actions, sendMessage } from './bll/app-reducer';
import Preloader from './common/component/preloader/Preloader';

const appStatus = {
    idea: 'idea',
    success: 'success',
    loading: 'loading',
    error: 'error',
}

function App() {
    const initialState = {
        status: appStatus.idea,
        onScroll: true,
        error: null
    }
    const [state, dispatch] = useReducer(appReducer, initialState)
    // const [onScroll, setOnScroll] = useState(true)

   
   
    useEffect(() => {
        if (!state.onScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto'
         }    
    },[state.onScroll])

    const submitForm = (data) => {
        console.log('submit form')
        sendMessage(data, dispatch)
    }
        
     const changeAppScroll = (value) => {

         dispatch(actions.setOnScroll(value))
     }
    const appLoading = state.status === appStatus.loading
    return (
        <div className={s.app}>

            {appLoading && <Preloader />}
           
            <Header changeScroll={changeAppScroll}/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoveWork/>
            <Contacts submitForm={submitForm} disabled={appLoading}/>
            <Footer/>
            
        
           
        </div>
    );
}

export default App;
