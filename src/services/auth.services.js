import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class AuthServices {
  static async login(data) {
    return await axios.post(`${API_URL}/auth/login`, data);
  }
  static async register(data) {
    return await axios.post(`${API_URL}/auth/register`, data);
  }
  static async getBarber(barberId) {
    return await axios.get(`${API_URL}/auth/barber/${barberId}`);
  }
}
