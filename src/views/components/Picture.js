import React from 'react'

const Picture = ({widthSM, widthLG, srcSetLG, srcSetSM, src, alt, classes}) => {
  return (
    <picture className={classes}>
        <source media={`(max-width: ${widthSM}px)`} srcSet={srcSetSM} />
        <source media={`(min-width: ${widthLG}px)`} srcSet={srcSetLG} />
        <img src={src} alt={alt} style={{ width: '100%' }} />
    </picture>

  )
}

export default Picture