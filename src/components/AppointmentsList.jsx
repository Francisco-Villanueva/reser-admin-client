import { useStore } from "@/context/AdminContext";
import React from "react";
import TableTeamRow from "./TableTeamRow";
import Loader from "./Loader";
import ChildrenLayout from "@/commons/ChildrenLayout";
import TitleView from "@/commons/TitleView";
import { getFutureAppointments } from "@/utils/futureAppointments";

export default function AppointmentsList({ barber }) {
  const {
    currentUser: { appointments },
  } = useStore();

  const appointmentsToShow =
    barber && barber.id ? barber.appointments : appointments;
  const futureAppointments = getFutureAppointments(appointmentsToShow);
  return (
    <ChildrenLayout className="flex flex-col gap-4   max-sm:gap-2 overflow-auto">
      <TitleView>Próximos Turnos: </TitleView>
      <hr />
      {futureAppointments.length === 0 && (
        <span className="p-2 w-full bg-error text-white rounded-lg">
          No hay turnos
        </span>
      )}
      {appointments ? (
        futureAppointments.length > 0 && (
          <TableTeamRow appointments={futureAppointments} />
        )
      ) : (
        <Loader />
      )}
    </ChildrenLayout>
  );
}
