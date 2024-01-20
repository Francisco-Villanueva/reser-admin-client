import React from 'react'

export default function DateCard({ date, handleDate, isSelected }) {
  return (
    <div
      onClick={handleDate}
      className="flex flex-col items-center text-md border rounded-md  text-grey font-medium cursor-pointer transition-all duration-300 "
    >
      <span
        className={`${isSelected ? 'bg-blue text-white' : ''}  px-2 rounded-t-md transition-all duration-300`}
      >
        {date.day}
      </span>
      <span
        className={`${isSelected ? 'text-black' : ''}  transition-all duration-300`}
      >
        {date.number}
      </span>
    </div>
  )
}
