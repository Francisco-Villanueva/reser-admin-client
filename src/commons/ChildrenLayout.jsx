import React from 'react'

export default function ChildrenLayout({ children, className = '' }) {
  return (
    <div
      className={` border p-4 h-full  rounded-md bg-background ${className}`}
    >
      {children}
    </div>
  )
}
