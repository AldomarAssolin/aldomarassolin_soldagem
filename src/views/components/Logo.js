import React from 'react'

import ImgLogo from '../../images/logos/android-icon-48x48.png'

export const Logo = (props) => {
  return (
    <div className={props.classes}>
        <img src={ImgLogo} alt="Logomarca Aldomar Assolin" />
    </div>
  )
}
