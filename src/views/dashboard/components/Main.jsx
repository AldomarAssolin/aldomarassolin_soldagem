import React from 'react'
import { Outlet } from 'react-router';

import '../static/css/main.css'

const Main = () => {

  return (
    <main className='overflow main-dashboard'>
        <Outlet/>
    </main>
  )
}

export default Main