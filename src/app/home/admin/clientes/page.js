'use client'
import ChildrenLayout from '@/commons/ChildrenLayout'
import CustomerTable from '@/components/Tables/CustomerTable'
import { getCustomers } from '@/lib'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const fetchCustomers = async () => {
      const fetchedCustomers = await getCustomers()
      setCustomers(fetchedCustomers)
    }

    fetchCustomers()
  }, [])

  return (
    <ChildrenLayout >
      {customers.length > 0 ? (
        <section className='h-full max-h-full overflow-auto'>
        <CustomerTable customers={customers}/>
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
          No hay clientes registrados
        </span>
      </div>
      )}
    </ChildrenLayout>
  )
}
