import { useStore } from "@/context/AdminContext";
import React from "react";
import TableTeamRow from "./TableTeamRow";
import Loader from "./Loader";
import ChildrenLayout from "@/commons/ChildrenLayout";
import TitleView from "@/commons/TitleView";
import { getFutureAppointments } from "@/utils/futureAppointments";

export default function AppointmentsList() {
  const {
    selectedBarber: { appointments },
  } = useStore();
  const futureAppointments =
    appointments.length > 0
      ? getFutureAppointments(appointments)
      : appointments;

  return (
    <ChildrenLayout className="flex flex-col gap-4   max-sm:gap-2 overflow-auto border-none ">
      <TitleView>Próximos Turnos: </TitleView>
      <hr />

      {appointments.length === 0 && (
        <span className="p-2 w-full bg-light-grey text-dark-grey rounded-lg font-medium text-md text-center">
          No hay turnos
        </span>
      )}
      {appointments ? (
        appointments.length > 0 && (
          <TableTeamRow appointments={futureAppointments} />
        )
      ) : (
        <Loader />
      )}
    </ChildrenLayout>
  );
}
