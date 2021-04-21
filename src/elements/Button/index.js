import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button(props) {

    const { type, href, className, target, isExternal, children } = props

    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (type === "link"){

        if (isExternal) {
            return (
                <a 
                    href={href}
                    className={className}
                    target={target}
                >
                    {children}
                </a>
            )
        }

        return (
            <NavLink
                to={href}
                className={className}
                onClick={onClick}
            >
                {children}
            </NavLink>
        )
    }

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.PropTypes = {
    type : PropTypes.oneOf(["button", "link"]).isRequired,
    href : PropTypes.string,
    className : PropTypes.string,
    target : PropTypes.string,
    onClick : PropTypes.func,

    isExternal : PropTypes.bool
}


