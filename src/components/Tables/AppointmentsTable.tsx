import { Appointment } from '@/types'
import { CustomTable } from './CustomTable'
import { ColumnDef } from '@tanstack/react-table'
import { useStore } from '@/context/AdminContext'
import { Badge } from '../ui/badge'
import { MailIcon, PhoneIcon } from '@/commons/Icons'

export function AppointmentsTable({
  appointments,
}: {
  appointments: Appointment[]
}) {
  const { barbers } = useStore()

  const appointmentsColumns: ColumnDef<Appointment>[] = [
    {
      accessorKey: 'date',
      header: 'Fecha',
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
      accessorKey: 'barberId',
      header: 'Peluquero',
      cell: ({ getValue }) => {
        const id = getValue()
        const barber = barbers.find((barber) => barber.id === id)

        return (
          <Badge variant="secondary" className="w-auto">
            {barber?.name}
          </Badge>
        )
      },
    },
  ]

  return (
    <CustomTable<Appointment>
      columns={appointmentsColumns}
      data={appointments}
    />
  )
}
