import { Appointment } from './appointment'

export const userModel = {
  id: '',
  name: '',
  lastName: '',
  password: '',
  email: '',
  userName: '',
  isAdmin: '',
  status: '',
  appointments: [],
}

export type User = {
  id: string
  name: string
  lastName: string
  password: string
  email: string
  userName: string
  isAdmin: string
  status: string
  appointments: Appointment[]
}
