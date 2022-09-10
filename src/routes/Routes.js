import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import Home from '../views/pages/Home'
// import About from '../views/pages/About'
// import Experience from '../views/pages/Experience'
// import Contact from '../views/pages/Contact'
import Single from '../views/pages/single'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Single />} />
            {/* <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="experince" element={<Experience />}/>
            <Route path="contact" element={<Contact />}/> */}
        </Routes>
    </div>
  )
}

export default Routers