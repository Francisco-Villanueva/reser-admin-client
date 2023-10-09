"use client";
import Button from "@/commons/Button";
import React, { useState } from "react";
import RowAppointment from "./RowAppointment";
import { useAdminContext } from "@/context/AdminContext";
import Selecthours from "@/commons/Selecthours";
import Input from "@/commons/Input";
import useInput from "@/hooks/useInput";
import { getFutureAppointments } from "@/utils/futureAppointments";
import Image from "next/image";

export default function BarberDetails({ barber }) {
  const [data, setData] = useState({
    start_time: barber.start_time,
    end_time: barber.end_time,
  });
  const { updateHours } = useAdminContext();

  const handleHours = (e) => {
    setData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const name = useInput(barber.name, null);
  const lastName = useInput(barber.lastName, null);

  const handleSumbitChanges = () => {
    updateHours(barber.id, {
      ...data,
      name: name.value,
      lastName: lastName.value,
    });
  };

  const futureAppointments = getFutureAppointments(barber.appointments);

  return (
    <div className="flex flex-col gap-4 relative  ">
      <header className="flex gap-1   ">
        <div className=" relative flex-1 border rounded-md ">
          <Image src={"/images/barber1.jpg"} fill objectFit="contain" />
        </div>
        <div className="flex flex-[2] flex-col gap-2">
          <Input defaultValue={barber.name} title={"Nombre"} {...name} />
          <Input
            defaultValue={barber.lastName}
            title={"Apellido"}
            {...lastName}
          />
        </div>
      </header>

      <div className="flex flex-col gap-4  ">
        <Selecthours hours={data} handleHours={handleHours} />
        <hr className="border-[#cecece] w-[80%] m-auto " />
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-medium ">Proximos Turnos</h2>
          <ol className="flex flex-col gap-2 max-h-[90%] overflow-y-auto ">
            {futureAppointments
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((appointment) => (
                <RowAppointment appointment={appointment} />
              ))}
          </ol>
        </div>
      </div>
      <div className="fixed w-[90%] bottom-0 bg-white z-30 py-3">
        <Button
          onClick={handleSumbitChanges}
          variant="primary"
          className="p-2 rounded-md w-full  "
          disabled={
            !(
              data.start_time !== barber.start_time ||
              data.end_time !== barber.end_time ||
              name.value !== barber.name ||
              lastName.value !== barber.lastName
            )
          }
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
