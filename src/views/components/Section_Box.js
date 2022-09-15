import React from 'react'

const Section_Box = ({titles,text, children, classes}) => {
  return (
    <div className={classes}>
        {titles}
        <p>{text}</p>
        {children}
    </div>
  )
}

export default Section_Box