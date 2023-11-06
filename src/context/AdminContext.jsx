"use client";
import { message } from "antd";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const initialState = {
  barbers: [],
  horarios: [],
};

const API_URL = "https://reset-api-h9a7.onrender.com/api";
export const AdminContext = createContext(initialState);

export function AdminProvider({ children }) {
  const [state, setState] = useState({
    barbers: [],
    horarios: [],
  });

  const getAllBarbers = async () => {
    try {
      const barbers_res = await axios.get(`${API_URL}/barbers`);
      setState((state) => ({ ...state, barbers: barbers_res.data }));

      return barbers_res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createBarber = async (data) => {
    try {
      await axios.post(`${API_URL}/barbers`, data);
      await getAllBarbers();

      message.success("Peluquero creado!");
    } catch (error) {
      console.log(error);
    }
  };

  const updateHours = async (barberId, data) => {
    try {
      await axios.put(`${API_URL}/barbers/${barberId}`, data);
      await getAllBarbers();

      message.success(`Cambios hechos sobre el barber ${barberId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBarber = async (barberId, data) => {
    try {
      await axios.delete(`${API_URL}/barbers/${barberId}`);
      await getAllBarbers();

      message.success(`Peluquero eliminado! `);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminContext.Provider
      value={{
        ...state,
        getAllBarbers,
        createBarber,
        updateHours,
        deleteBarber,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export const useAdminContext = () => useContext(AdminContext);
