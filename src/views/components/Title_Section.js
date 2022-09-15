import React from 'react'

const Title = ({title, subtitle, effect, classes}) => {
    return (
        <div className={classes}>
            <h2>{title}</h2>
            <h1>{effect}{subtitle}</h1>
        </div>
    )
  
}

export default Title