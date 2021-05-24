import React from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {

    const { id, name, type, value, placeholder, className, child } = props
    const onChange = () => {
        if (props.onChange) props.onChange()
    }

    if (type === "textarea") {
        return (
            <textarea 
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                className={["resize-none py-2 px-3 mb-2.5 font-light text-lg text-gray-700 rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300", className].join(" ")}
                onChange={onChange}
                rows="4"
            >
                {child}
            </textarea>
        )
    }

    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            className={["py-2 px-3 mb-2.5 font-light text-lg text-gray-700 rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300", className].join(" ")}
            onChange={onChange}
        >
            {child}    
        </input>
    )
}

Form.defaultProps = {

}

Form.PropTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text","textarea"]).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
}