import React from 'react'

const Figure = ({ media650, media465, img, alt, title, classes }) => {
    return (
        <picture className={classes}>
            <source media="(min-width:768px)" srcSet={media650} />
            <source media="(min-width:465px)" srcSet={media465} />
            <img src={img} alt={alt} style={{ width: "100%", height: "60vh" }} title={title}/>
        </picture>
    )
}

export default Figure