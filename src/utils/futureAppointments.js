export function getFutureAppointments(appointments) {
  const today = new Date() // Obtiene la fecha y hora actual en la zona horaria local
  today.setHours(today.getHours() - 3)
  return appointments.filter(
    (appointment) => appointment.date >= today.toISOString().split('T')[0],
  )
}
