import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from '../Landing';

import { Faqs } from '../Faqs';


export const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/faq' element={<Faqs/>}/>
        </Routes>
    </Router>
  )
}
