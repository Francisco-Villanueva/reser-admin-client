'use client'

import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@/commons/Icons'

export default function Input({
  title,
  placeholder,
  type,
  className = '',
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
  defaultValue,
  titleColor = '',
}) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = showPassword ? 'text' : type

  return (
    <div className={`  w-full   font-montserrat   ${className}`}>
      <label className={`block ${titleColor}  ml-2 `}>{title}</label>
      <div className=" relative">
        <input
          defaultValue={defaultValue || ''}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          type={inputType}
          placeholder={placeholder}
          className={`w-full  p-2 text-lg max-md:text-md rounded-md border border-border ${
            error ? 'border-error' : ''
          } text-black  font-montserrat focus:outline-none`}
        />

        {type === 'password' && (
          <button
            type="button"
            className={`absolute inset-y-0 right-2  flex items-center text-dark-grey`}
            onClick={() => {
              setShowPassword(!showPassword)
            }}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 " />
            ) : (
              <EyeIcon className="h-5 w-5 " />
            )}
          </button>
        )}
      </div>

      {touched && error ? (
        <p className=" ml-4  text-error text-sm absolute  ">{error}</p>
      ) : null}
    </div>
  )
}
