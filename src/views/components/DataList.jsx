import React from 'react'

const DataList = ({children, classes}) => {
  return (
    <dl className={classes}>
        {children}
    </dl>
  )
}

export default DataList