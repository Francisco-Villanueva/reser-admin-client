import Button from "@/commons/Button";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/commons/Icons";
import useModal from "@/hooks/useModal";
import { useState } from "react";
import Aside from "./Aside";
import Image from "next/image";
import Input from "@/commons/Input";
import BarberDetails from "./BarberDetails";
import { getFutureAppointments } from "@/utils/futureAppointments";
import TableTeamRow from "./TableTeamRow";

export default function TableTeam({ img, team, className }) {
  const { openModal, closeModal, isModalOpen } = useModal();
  const [barber, setBarber] = useState({
    name: "",
    lastName: "",
    start_time: "",
    end_time: "",
    hours: [],
  });

  const handleModal = (data) => {
    setBarber(data);
    openModal();
  };

  return (
    <>
      <table className={` flex-col w-full  overflow-hidden ${className || ""}`}>
        <thead>
          <tr className="border-b-2 border-gray-200  bg-light-grey text-black text-left">
            <th className="py-3 px-3">ID</th>
            <th className="py-3 px-3">Nombre y Apellido</th>
            <th className="py-3 px-3">Entrada</th>
            <th className="py-3 px-3">Salida</th>
            <th className="py-3 px-3">Proximos turnos</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {team
            .sort((a, b) => a.id - b.id)
            .map((team) => (
              <TableTeamRow barber={team} handleModal={handleModal} />
            ))}
        </tbody>
      </table>
      {isModalOpen ? (
        <Aside
          title={
            <p>
              {barber.name}
              <span className="text-dark-grey ml-1">
                #00{barber.id || "a"}{" "}
              </span>{" "}
            </p>
          }
          closeModal={closeModal}
        >
          <BarberDetails barber={barber} />
        </Aside>
      ) : null}
    </>
  );
}
