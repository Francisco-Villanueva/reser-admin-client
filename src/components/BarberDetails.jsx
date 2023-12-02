"use client";
import Button from "@/commons/Button";
import React, { useEffect, useState } from "react";
import { useStore } from "@/context/AdminContext";
import Selecthours from "@/components/Selecthours";
import Input from "@/commons/Input";
import useInput from "@/hooks/useInput";
import Image from "next/image";
import SelectDay from "./SelectDay";
import { ApiServices } from "@/services/workhours.services";
import { message } from "antd";
import BarberInfo from "./BarberInfo";

export default function BarberDetails() {
  const { setHoursToShow, selectedBarber } = useStore();
  const [dateIndex, setDateIndex] = useState(new Date().getDay());

  const handleDate = (dateI) => {
    setDateIndex(dateI);
  };
  useEffect(() => {
    ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
      setHoursToShow(res.data);
    });
  }, [dateIndex]);

  const handleChangeHours = (hoursToUpdate) => {
    ApiServices.updateBarberWorkHours(
      selectedBarber.id,
      dateIndex,
      hoursToUpdate
    ).then(() => {
      ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
        setHoursToShow(res.data);
      });
      message.success("Horarios actualizados!");
    });
  };
  return (
    <div className="flex flex-col gap-4 relative max-md:text-xs ">
      <BarberInfo />

      <section className="flex flex-col gap-4 ">
        <SelectDay handleDate={handleDate} dateIndex={dateIndex} />
        <Selecthours
          dateIndex={dateIndex}
          handleChangeHours={handleChangeHours}
        />
      </section>
    </div>
  );
}
