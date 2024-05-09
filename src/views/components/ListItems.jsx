import React from 'react'

const ListItems = ({children, classes}) => {
  return (
    <li className={classes}>
        {children}
    </li>
  )
}

export default ListItems