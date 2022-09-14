import React from 'react'

import styles from './Title.module.css'

const Title = ({title, subtitle}) => {
    return (
        <div className={styles.Title_Section}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
    </div>
    )
  
}

export default Title