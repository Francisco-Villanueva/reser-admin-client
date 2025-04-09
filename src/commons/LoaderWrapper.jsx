import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'

export function LoaderWrapper({ text = '' }) {
  const { theme } = useTheme()
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4  font-semibold ">
      <Image
        src={
          theme === 'light'
            ? '/images/RESET_C_negro.png'
            : '/images/RESET_C.png'
        }
        alt="Logo"
        width={150}
        className="max-sm:w-full   animate-pulse "
        height={10}
      />
      <p className="   animate-pulse ">{text ? text : 'Cargando'} </p>
    </div>
  )
}
