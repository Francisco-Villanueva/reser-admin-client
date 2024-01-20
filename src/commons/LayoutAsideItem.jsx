import React from 'react'

export default function LayoutAsideItem({ children }) {
  return (
    <div className="flex justify-between items-center font-semibold border  p-2 rounded-md ">
      {children}
    </div>
  )
}
