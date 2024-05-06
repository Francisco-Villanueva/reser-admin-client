'use client'
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// import './index.css'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type TableProps<T> = {
  columns: ColumnDef<T>[]
  data: T[]
  subComponent?: React.ReactNode
  getRowCanExpand?: () => boolean
}

export const CustomTable = function <T>({
  columns,
  data,
  getRowCanExpand,
}: TableProps<T>) {
  const [tableData, setTableData] = useState(() => [...data])

  const table = useReactTable({
    data: tableData,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <Table className=" ">
      <TableHeader className="bg-secondary border border-border ">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
