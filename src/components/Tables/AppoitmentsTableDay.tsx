import { CustomTable } from './CustomTable'
import { Appointment } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { MailIcon, PhoneIcon } from '@/commons/Icons'

type AppointmentDay = {
  hour: string
  name: string
  email: string
  phone: string
  id: string
}
const appointmentsColumns: ColumnDef<AppointmentDay>[] = [
  {
    accessorKey: 'hour',
    header: 'Horario',
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ getValue }) => <p>{getValue<string>()}</p>,
  },
  {
    accessorKey: 'email',
    header: 'Contacto',
    cell: ({ cell }) => (
      <div className="flex flex-col text-xs">
        <span className="flex gap-1">
          <PhoneIcon className="w-4" />
          {cell.row.original.phone}
        </span>
        <span className="flex gap-1">
          <MailIcon className="w-4" />
          {cell.row.original.email}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'time',
    header: 'Horario',
    cell: ({ getValue }) => <p>{getValue<string>()} hs</p>,
  },
  {
    accessorKey: 'id',
    header: 'Peluquero',
    cell: ({ getValue }) => <p>{getValue<string>()} </p>,
  },
]
export default function AppoitmentsTableDay({ appointments }) {
  return (
    <CustomTable<AppointmentDay>
      columns={appointmentsColumns}
      data={appointments}
    />
  )
}
