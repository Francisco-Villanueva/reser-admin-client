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

import './custom-table.css'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
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
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const table = useReactTable({
    data: tableData,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex: currentPage,
        pageSize: rowsPerPage,
      },
    },
  })

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value))
  }

  return (
    <div>
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
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <span>
          {currentPage + 1} of {Math.ceil(tableData.length / rowsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage >= Math.ceil(tableData.length / rowsPerPage) - 1
          }
        >
          Next
        </button>
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
