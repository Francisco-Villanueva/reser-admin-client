import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export class AppointmentServices {
  static async getById(id) {
    return await axios.get(
      `${API_URL}/appointment/${id}`,
    )
  }
  static async delete(id) {
    return await axios.delete(
      `${API_URL}/appointment/${id}`,
    )
  }
}
