import { getFutureAppointments } from "@/utils/futureAppointments";
import React from "react";
import AppointmentCard from "@/commons/AppointmentCard";
export default function TableTeamRow(appointments) {
  const futureAppointments = getFutureAppointments(appointments);

  return (
    <div className="flex flex-col gap-2    overflow-auto max-h-[90%]">
      <div className="flex flex-col gap-0  max-sm:gap-2 ">
        {futureAppointments
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((appointment) => (
            <AppointmentCard appointment={appointment} />
          ))}
      </div>
    </div>
  );
}
