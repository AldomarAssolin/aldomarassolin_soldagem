import React from 'react'

import container from '../pages/Home.module.css'

const Container = ({children}) => {
  return (
    <div className={container}>{children}</div>
  )
}

export default Container