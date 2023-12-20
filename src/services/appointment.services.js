import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_API_KEY;

export class AppointmentServices {
  static async delete(id) {
    return await axios.delete(
      `${API_URL}/appointment/${id}/?API_KEY=${API_KEY}`
    );
  }
}
