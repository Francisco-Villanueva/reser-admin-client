import { ICustomer } from '@/types/customer'
import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export class CustomerServices {
  static async getAllCustomers(): Promise<ICustomer[]> {
    const res = await axios.get(`${API_URL}/customers`)
    return res.data
  }
  static async delete(id: string): Promise<ICustomer[]> {
    const res = await axios.delete(`${API_URL}/customers/${id}`)
    return res.data
  }
}
