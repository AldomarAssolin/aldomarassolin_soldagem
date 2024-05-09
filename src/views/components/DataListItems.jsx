import React from 'react'

const DataListItems = ({children, classes, dt, dd}) => {
  return (
    <>
    <dt className={classes}>
        {dt}
    </dt>
    <dd className={classes}>
        {dd}
    </dd>
    </>
  )
}

export default DataListItems