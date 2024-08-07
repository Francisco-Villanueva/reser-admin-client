import React from 'react'

export default function Ticket({ children, variant = 'primary' }) {
  const VARIANTS = {
    primary: 'bg-[rgba(0,0,0,.1)] text-dark-grey  ',
    secondary: 'bg-white  border   text-dark-grey  ',
    outline: 'bg-white  border border-black   text-black  ',
  }
  return (
    <span
      className={`p-1 bg-black text-center items-center w-full  rounded-md flex  gap-2`}
    >
      {children}
    </span>
  )
}
