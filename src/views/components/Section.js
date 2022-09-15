import React from 'react'

const Section = ({children, classes}) => {
  return (
    <section className={classes}>
        {children}
    </section>
  )
}

export default Section