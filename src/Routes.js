import React from "react";
import { Routes, Route } from 'react-router-dom';

const Router = () => {

  return (
    <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/main" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        
          <Route path="/contacts" element={<Contacts />} />
          
        </Routes>
  )
}