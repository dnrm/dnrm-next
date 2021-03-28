import React from 'react'

const Link = (props) => {
    return (
        <p><a href={props.href} className="link" rel="noopener" target="_blank">{props.children}</a></p>
    )
}

export default Link;
