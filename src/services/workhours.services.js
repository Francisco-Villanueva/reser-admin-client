import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_API_KEY;

export class ApiServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers/?API_KEY=${API_KEY}`);
  }
  static async getHoursByDay(barberId, dayNumber) {
    return await axios.get(
      `${API_URL}/workhours/${barberId}/${dayNumber}/?API_KEY=${API_KEY}`
    );
  }
  static async createBarber(data) {
    return await axios.post(`${API_URL}/barbers/?API_KEY=${API_KEY}`, data);
  }
  static async updateBarberData(barberId, data) {
    return await axios.put(
      `${API_URL}/barbers/${barberId}/?API_KEY=${API_KEY}`,
      { ...data }
    );
  }
  static async deleteBarber(barberId) {
    return await axios.delete(
      `${API_URL}/barbers/${barberId}/?API_KEY=${API_KEY}`
    );
  }
  static async updateBarberWorkHours(barberId, dayNumber, data) {
    return await axios.put(
      `${API_URL}/workhours/${barberId}/${dayNumber}/?API_KEY=${API_KEY}`,
      {
        hours: data,
      }
    );
  }
}
