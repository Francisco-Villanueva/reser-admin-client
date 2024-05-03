import React from 'react'

const HourStatus = ({ hour, isNew = false, isDeleted = false }) => {
  return (
    <div
      className={`w-3 h-3 rounded-full ${
        hour.avaliable && !isDeleted
          ? 'bg-green'
          : isNew
            ? 'bg-orange-300'
            : isDeleted
              ? 'bg-error'
              : 'bg-disabled'
      }`}
    ></div>
  )
}
export default function HourCard({
  hour,
  onClick,
  isNew = false,
  isDeleted = false,
}) {
  return (
    <div
      className={`flex items-center gap-2  border border-border p-1 rounded-sm cursor-pointer hover:bg-secondary transition-all duration-200 ${hour.avaliable ? '' : 'bg-secondary-foreground/20 font-light '} `}
      onClick={onClick}
    >
      <HourStatus hour={hour} isDeleted={isDeleted} isNew={isNew} />
      <p
        className={`${
          hour.avaliable && !isDeleted
            ? ''
            : isNew
              ? 'text-orange-300'
              : isDeleted
                ? 'text-error'
                : 'text-foreground'
        }`}
      >
        {hour.value}
      </p>
    </div>
  )
}
