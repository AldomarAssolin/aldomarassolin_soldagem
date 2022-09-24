import React from 'react'

const ListItem = ({ classes, icons, item }) => {
  return (
    <li className={classes}><i className={`pi pi-${icons}`}></i> {item}</li>
  )
}

export default ListItem