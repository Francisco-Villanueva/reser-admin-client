import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export class AuthServices {
  static async login(data) {
    return await axios.post(`${API_URL}/auth/login/?API_KEY=${API_KEY}`, data)
  }
  static async register(data) {
    return await axios.post(
      `${API_URL}/auth/register/?API_KEY=${API_KEY}`,
      data,
    )
  }
  static async getBarber(barberId) {
    return await axios.get(
      `${API_URL}/auth/barber/${barberId}/?API_KEY=${API_KEY}`,
    )
  }
}
