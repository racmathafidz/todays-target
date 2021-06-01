import React from 'react'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

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

    if (type == "submit") {
        return (
            <input 
                type="submit" 
                value={children}
                className={className}
            />
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

Button.propTypes = {
    type : propTypes.oneOf(["button", "link", "submit"]).isRequired,
    href : propTypes.string,
    className : propTypes.string,
    target : propTypes.string,
    onClick : propTypes.func,

    isExternal : propTypes.bool
}


