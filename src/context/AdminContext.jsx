"use client";

import { createContext, useContext, useState } from "react";
import { userModel } from "@/types";
const initialState = {
  barbers: [],
  horarios: [],
  hoursToShow: [],
  selectedBarber: { ...userModel },
  selectedDay: {},
  currentUser: { ...userModel },
  setBarbers: () => {},
  setCurrentUser: () => {},
  setHoursToShow: () => {},
  setSelectedBarber: () => {},
};

export const AdminContext = createContext(initialState);

export function AdminProvider({ children }) {
  const [state, setState] = useState({
    barbers: [],
    horarios: [],
    hoursToShow: [],
    selectedBarber: { ...userModel },
    selectedDay: {},
    currentUser: { ...userModel },
  });

  const setCurrentUser = async (user) => {
    setState((state) => ({ ...state, currentUser: user }));
  };
  const setBarbers = async (barbers) => {
    setState((state) => ({ ...state, barbers }));
  };

  const setHoursToShow = (hoursToShow) => {
    setState((prev) => ({ ...prev, hoursToShow }));
  };
  const setSelectedBarber = (selectedBarber) => {
    setState((prev) => ({ ...prev, selectedBarber }));
  };
  const mainHours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <AdminContext.Provider
      value={{
        ...state,
        mainHours,
        setBarbers,
        setHoursToShow,
        setSelectedBarber,
        setCurrentUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export const useStore = () => useContext(AdminContext);
