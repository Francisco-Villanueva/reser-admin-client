import React from 'react'

export default function TitleView({ children }) {
  return (
    <span className="">
      {children}
      <div className="border border-border w-1/12" />
    </span>
  )
}
