'use client'
import React from 'react'
import { CustomTable } from './CustomTable'
import { ICustomer } from '@/types/customer'
import { ColumnDef } from '@tanstack/react-table'
import { DeleteCustomer } from '../Customers'

const columns: ColumnDef<ICustomer>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Phone',
    accessorKey: 'phone',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: '',
    accessorKey: 'id',
    cell: ({ getValue }) => <DeleteCustomer id={getValue<string>()} />,
  },
]

export default function CustomerTable({
  customers,
}: {
  customers: ICustomer[]
}) {
  return <CustomTable columns={columns} data={customers} />
}
