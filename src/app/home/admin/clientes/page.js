import ChildrenLayout from '@/commons/ChildrenLayout'
import CustomerTable from '@/components/Tables/CustomerTable'
import { getCustomers } from '@/lib'
import Image from 'next/image'

export default async function page() {
  const customers = await getCustomers()



 
  return (
    <ChildrenLayout >
      {customers.length > 0 ? (
        <section className='h-full max-h-full overflow-auto'>
        <CustomerTable customers={[...customers,...customers, ...customers, ...customers,...customers,...customers,...customers,...customers,...customers,...customers,...customers]}/>
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
    </ChildrenLayout>
  )
}
