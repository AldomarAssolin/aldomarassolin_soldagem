import React from 'react'

const ListItem = ({classes, item}) => {
  return (
    <li className={classes}>{item}</li>
  )
}

export default ListItem