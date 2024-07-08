import React from 'react'
import { IconX } from './Icons'
import { Button } from '@/components/ui/button'

export default function DeleteLayout({ children, closeModal, handleDelete }) {
  return (
    <aside className="absolute top-0 left-0 z-50 w-full h-full bg-blend-normal grid place-items-center backdrop-blur-[5px] ">
      <div className=" relative w-[50%]  h-[50%] bg-accent  rounded-md p-4 flex flex-col  items-center gap-4 justify-between max-sm:w-[90%]  max-sm:h-[60%]  ">
        <Button
          variant={'ghost'}
          className="absolute right-4 rounded-md p-1 max-sm:text-sm  "
          onClick={closeModal}
        >
          <IconX className="w-[15px]" />
        </Button>
        {children}

        <Button variant={'destructive'} onClick={handleDelete}>
          Eliminar
        </Button>
      </div>
    </aside>
  )
}
