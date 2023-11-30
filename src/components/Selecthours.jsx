"use client";
import { useAdminContext } from "@/context/AdminContext";
import HourCard from "../commons/HourCard";
import { useEffect, useState } from "react";
import Button from "../commons/Button";
import Loader from "./Loader";

export default function Selecthours({ handleChangeHours }) {
  const { hoursToShow } = useAdminContext();
  const [newHours, setNewHours] = useState([]);
  const [deletedHours, setDeletedHours] = useState([]);
  const handleSubmit = () => {
    const hoursToUpdate = newHours
      .sort((a, b) => a.position - b.position)
      .map((e) => e.value);

    handleChangeHours(hoursToUpdate);
  };

  useEffect(() => {
    setNewHours(hoursToShow.filter((e) => e.avaliable));
    setDeletedHours([]);
  }, [hoursToShow]);

  const handleSelect = (newHour) => {
    if (deletedHours.some((h) => h.value === newHour.value)) {
      setDeletedHours((prev) =>
        prev.filter((hs) => hs.value !== newHour.value)
      );
    }
    if (newHours.some((h) => h.value === newHour.value)) {
      if (newHour.avaliable) {
        setDeletedHours((prev) => [...prev, newHour]);
      }
      return setNewHours((prev) =>
        prev.filter((hs) => hs.value !== newHour.value)
      );
    }
    setNewHours((prev) => [...prev, newHour]);
  };

  return (
    <section className="flex flex-col items-center  gap-4 p-4 border rounded-md">
      <section className="flex gap-6 items-center justify-around text-sm  ">
        {["Nuevo Horario", "Eliminar Horario", "Horarios Actual"].map(
          (type) => (
            <div className="flex gap-1">
              <div
                className={`w-3 h-3 rounded-full ${
                  type === "Horarios Actual"
                    ? "bg-green"
                    : type === "Nuevo Horario"
                    ? "bg-orange-300"
                    : type === "Eliminar Horario"
                    ? "bg-error"
                    : "bg-disabled"
                }`}
              >
                {" "}
              </div>
              <p
                className={`${
                  type === "Nuevo Horario"
                    ? "text-orange-300"
                    : type === "Eliminar Horario"
                    ? "text-error"
                    : "text-disabled"
                }`}
              >
                {type}
              </p>
            </div>
          )
        )}
      </section>
      <div className="grid grid-cols-4  gap-x-10 gap-y-2 ">
        {hoursToShow ? (
          hoursToShow.map((hour) => (
            <HourCard
              hour={hour}
              isNew={newHours.some((h) => h.value === hour.value)}
              isDeleted={deletedHours.some((h) => h.value === hour.value)}
              onClick={() => handleSelect(hour)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <Button
        variant="primary"
        onClick={handleSubmit}
        className="p-2 rounded-md w-full  "
        disabled={
          newHours.length === hoursToShow.filter((e) => e.avaliable).length
        }
      >
        Actualizar
      </Button>
    </section>
  );
}
