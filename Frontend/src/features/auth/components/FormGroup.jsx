import React from 'react';

const FormGroup = ({
  id,
  name,
  type = 'text',
  label,
  placeholder = ' ',
  icon,
  value,
  onChange,
  autoComplete,
  required = true,
  suffix = null,
}) => {
  return (
    <div className="form-group-container relative pt-5">
      {icon && (
        <span
          className="material-symbols-outlined absolute left-0 bottom-2.5 text-lg pointer-events-none transition-colors duration-300"
          style={{
            color: '#888888',
            fontVariationSettings: "'wght' 200",
          }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="snitch-input w-full bg-transparent border-0 border-b border-[#2e2e2e] rounded-none pt-5 pb-2.5 pl-7 text-[#e8e5e4] text-sm focus:outline-none focus:border-white transition-colors duration-300"
        style={{ paddingRight: suffix ? '32px' : '0' }}
      />

      <label
        htmlFor={id || name}
        className="snitch-label absolute left-7 top-5 text-[#888888] text-sm font-normal pointer-events-none transition-all duration-300 origin-left"
      >
        {label}
      </label>

      {suffix}
    </div>
  );
};

export default FormGroup;
