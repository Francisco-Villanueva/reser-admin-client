import { CustomerServices } from '@/services/customer.services'

export const getCustomers = async () => {
  const customers = await CustomerServices.getAllCustomers()
  return customers
}
