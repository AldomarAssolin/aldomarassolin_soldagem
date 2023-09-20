import React from 'react'

const Section_Box = ({ titles, subtitle, text, children, classes }) => {

  const styleAboutCarousel = {
    height: '500px'
  }
  
  return (
    <div className={classes} style={styleAboutCarousel}>
      {titles}

      {subtitle ? <h1>{subtitle}</h1> : ''}

      {text ? <p>{text}</p> : ''}

      {children}
    </div>
  )
}

export default Section_Box