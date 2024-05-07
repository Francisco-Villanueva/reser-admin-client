import React from 'react'

export default function DateCard({
  date,
  handleDate,
  isSelected,
  canceled = false,
}) {
  return (
    <div
      onClick={handleDate}
      className="flex flex-col items-center text-md border border-border rounded-md  text-secondary font-medium cursor-pointer transition-all duration-300 "
    >
      <span
        className={`${isSelected ? (canceled ? 'bg-destructive text-white ' : 'bg-primary  ') : 'bg-accent text-black '}  px-2 rounded-t-md transition-all duration-300`}
      >
        {date.day}
      </span>
      <span className={`text-primary transition-all duration-300`}>
        {date.number}
      </span>
    </div>
  )
}
