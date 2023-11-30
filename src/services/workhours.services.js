import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiServices {
  static async getAllBarbers() {
    return await axios.get(`${API_URL}/barbers`);
  }
  static async getHoursByDay(barberId, dayNumber) {
    return await axios.get(`${API_URL}/workhours/${barberId}/${dayNumber}`);
  }
  static async createBarber(data) {
    return await axios.post(`${API_URL}/barbers`, data);
  }
  static async updateBarberData(barberId, data) {
    return await axios.put(`${API_URL}/barbers/${barberId}`, { ...data });
  }
  static async deleteBarber(barberId) {
    return await axios.delete(`${API_URL}/barbers/${barberId}`);
  }
  static async updateBarberWorkHours(barberId, dayNumber, data) {
    return await axios.put(`${API_URL}/workhours/${barberId}/${dayNumber}`, {
      hours: data,
    });
  }
}
