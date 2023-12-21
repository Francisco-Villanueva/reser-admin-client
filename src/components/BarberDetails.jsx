"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/context/AdminContext";
import Selecthours from "@/components/Selecthours";
import SelectDay from "./SelectDay";
import { ApiServices } from "@/services/workhours.services";
import { message } from "antd";
import BarberInfo from "./BarberInfo";
import FloatingLoader from "@/commons/FloatingLoader";

export default function BarberDetails({ closeModal }) {
  const { setHoursToShow, selectedBarber } = useStore();
  const [dateIndex, setDateIndex] = useState(new Date().getDay());
  const [loading, setLoading] = useState(false);

  const handleDate = (dateI) => {
    setDateIndex(dateI);
  };
  useEffect(() => {
    ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
      setHoursToShow(res.data);
    });
  }, [dateIndex]);

  const handleChangeHours = (hoursToUpdate) => {
    setLoading(true);

    ApiServices.updateBarberWorkHours(
      selectedBarber.id,
      dateIndex,
      hoursToUpdate
    )
      .then(() => {
        ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
          setHoursToShow(res.data);
          setLoading(true);
          closeModal();
          message.success("Horarios actualizados!");
        });
      })
      .catch(() => {
        message.error("Error actulizando horarios del peluquero");
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col gap-4 relative max-md:text-xs ">
      <BarberInfo closeModal={closeModal} />

      <section className="flex flex-col gap-4 ">
        <SelectDay handleDate={handleDate} dateIndex={dateIndex} />
        <Selecthours
          dateIndex={dateIndex}
          handleChangeHours={handleChangeHours}
        />
      </section>
      {loading && <FloatingLoader />}
    </div>
  );
}
