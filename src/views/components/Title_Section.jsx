import React from 'react'

const Title = ({title, subtitle, effect, classes, titleClass, subTitleClass}) => {
    return (
        <div className={classes}>
            <h2 className={titleClass}>{title}{effect}</h2>
            <h1 className={subTitleClass}>{subtitle}</h1>
        </div>
    )
  
}

export default Title