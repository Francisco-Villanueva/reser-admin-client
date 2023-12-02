import { useStore } from "@/context/AdminContext";
import React from "react";
import TableTeamRow from "./TableTeamRow";
import Loader from "./Loader";
import ChildrenLayout from "@/commons/ChildrenLayout";
import TitleView from "@/commons/TitleView";

export default function AppointmentsList() {
  const {
    currentUser: { appointments },
  } = useStore();
  return (
    <ChildrenLayout className="flex flex-col gap-4  max-sm:gap-2 overflow-auto">
      <TitleView>Próximos Turnos</TitleView>
      <hr />
      {appointments ? (
        appointments.length ? (
          <TableTeamRow barber={appointments} />
        ) : (
          <span className="p-2 w-full bg-error text-white rounded-lg">
            No hay turnos
          </span>
        )
      ) : (
        <Loader />
      )}
    </ChildrenLayout>
  );
}
