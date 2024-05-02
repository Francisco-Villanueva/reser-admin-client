'use client'

import { createContext, useContext, useState } from 'react'

const initialState = {
  asideType: '',
  setAside: (aside) => {},
}
export const AsideContext = createContext(initialState)

export function AsideProvider({ children }) {
  const [state, setState] = useState({
    asideType: '',
  })

  const setAside = async (asideType) => {
    setState((state) => ({ ...state, asideType }))
  }

  return (
    <AsideContext.Provider
      value={{
        ...state,
        setAside,
      }}
    >
      {children}
    </AsideContext.Provider>
  )
}
export const useAsideStore = () => useContext(AsideContext)
