import { getCustomers } from '@/lib'
import React from 'react'
import CustomerTable from '../Tables/CustomerTable'
import Image from 'next/image'

export async function CustomerPage() {
  const customers = await getCustomers()
  return (
    <>
      {customers.length > 0 ? (
        <section className="h-full max-h-full overflow-auto">
          <CustomerTable customers={customers} />
        </section>
      ) : (
        <div className="h-full w-full bg-accent flex flex-col gap-4 justify-center items-center">
          <div className="h-1/2 aspect-video relative">
            <Image
              src={'/notFound.png'}
              fill
              alt="reset"
              className="fill-teal-50"
            />
          </div>

          <span className="font-extralight italic text-sm">
            No hay turnos encontrados para la fecha
          </span>
        </div>
      )}
    </>
  )
}
