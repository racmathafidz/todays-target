import React from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {

    const { id, name, type, value, placeholder, className, onChange, child, hasError } = props

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
        <div className="flex flex-col mb-2.5">
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                className={["py-2 px-3 font-light text-lg text-gray-700 rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300", className].join(" ")}
                onChange={onChange}
            >
                {child}    
            </input>
            { hasError && <span className="text-sm text-white bg-red-500 p-1 rounded">Project title can't empty.</span> }
        </div>
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