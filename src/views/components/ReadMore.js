import React from 'react'
import { Link } from 'react-router-dom'

const ReadMore = ({ divClass, linkClass, to, textLink }) => {
    return (
        <div className={divClass}>
            <Link to={to} className={linkClass}>{textLink}</Link>
        </div>
    )
}

export default ReadMore
