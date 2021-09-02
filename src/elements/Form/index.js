/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import propTypes from 'prop-types';

export default function Form(props) {
  const {
    id, name, type, value, placeholder, className, onChange, hasError,
  } = props;

  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className={['resize-none py-2 px-3 mb-2.5 font-light text-lg text-gray-700 rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300', className].join(' ')}
        onChange={onChange}
        rows="4"
      />
    );
  }

  return (
    <div className="flex flex-col mb-2.5">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={['py-2 px-3 font-light text-lg text-gray-700 rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300', className].join(' ')}
        onChange={onChange}
      />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      { hasError && <span className="text-sm text-white bg-red-500 p-1 rounded">Project title can't empty.</span> }
    </div>
  );
}

Form.defaultProps = {
  id: '',
  placeholder: '',
  className: '',
  hasError: false,
};

Form.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.oneOf(['text', 'textarea']).isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  id: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  hasError: propTypes.bool,
};
