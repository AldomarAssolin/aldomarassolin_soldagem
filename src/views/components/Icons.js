import React from 'react'

export const Icons = ({classes, icon, size}) => {
  return (
    <i className={`pi pi-${icon} ${classes}` } style={{'fontSize': `${size}`}}></i>
  )
}
