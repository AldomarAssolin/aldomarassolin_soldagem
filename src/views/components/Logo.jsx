import React from 'react'

import ImgLogo from '../../public/images/logos/nome-grey-corte.png'

export const Logo = (props) => {
  return (
    <div className={props.classes}>
        <img src={ImgLogo} alt="Logomarca Aldomar Assolin" />
    </div>
  )
}
