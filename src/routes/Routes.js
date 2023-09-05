import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../views/pages/Home'
import About from '../views/pages/About'
import Experience from '../views/pages/Experience'
import Contact from '../views/pages/Contact'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Experience" element={<Experience />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default Routers