import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class AppointmentServices {
  static async delete(id) {
    return await axios.delete(`${API_URL}/appointment/${id}`);
  }
}
