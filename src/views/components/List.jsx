import React from 'react'

const List = ({children, classes}) => {
  return (
    <ul className={classes}>
        {children}
    </ul>
  )
}

export default List