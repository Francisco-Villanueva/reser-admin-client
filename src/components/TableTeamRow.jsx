import Button from "@/commons/Button";
import { DropDownArrow, PenIcon, TrashIcon } from "@/commons/Icons";
import useModal from "@/hooks/useModal";
import { getFutureAppointments } from "@/utils/futureAppointments";
import React from "react";
import ActionsButtons from "./ActionsButtons";
import { useAdminContext } from "@/context/AdminContext";
export default function TableTeamRow({ barber, handleModal, openModal }) {
  const futureAppointments = getFutureAppointments(barber.appointments);
  const { openModal: openTurnos, closeModal, isModalOpen } = useModal();
  const { setSelectedBarber } = useAdminContext();

  const handleSelectBarber = () => {
    setSelectedBarber(barber);
    openModal();
  };
  return (
    <>
      <tr
        key={barber.id}
        className="bg-white text-black border-b-2 border-gray-200 text-left "
      >
        <td className="  py-4 px-3">
          <b>
            {barber.name} {barber.lastName}
          </b>
        </td>
        <td className=" py-4 px-3 w-[200px] ">
          <p className="bg-black m-auto text-white font-semibold  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
            {futureAppointments.length}
          </p>
        </td>

        <td className=" py-4 px-3 ">
          <div className="flex gap-2">
            <ActionsButtons
              barber={barber}
              handleSelectBarber={handleSelectBarber}
            />
            <Button
              onClick={isModalOpen ? closeModal : openTurnos}
              disabled={futureAppointments.length === 0}
              variant={"text"}
              className="rounded-full"
            >
              <DropDownArrow
                className={`w-[1rem] h-[1rem]  transition-all duration-200 ${
                  isModalOpen ? "rotate-180" : "rotate-360"
                }`}
              />
            </Button>
          </div>
        </td>
      </tr>
      {isModalOpen && (
        <tr className="font-inter">
          <td colSpan={"12"}>
            <table className="flex-col text-sm w-full m-auto rounded-sm overflow-hidden">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-black text-white text-left">
                  <th className="py-3 px-3">Name</th>
                  <th className="py-3 px-3">Email</th>
                  <th className="py-3 px-3">Phone</th>

                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Time</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {futureAppointments
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .map((appointment) => (
                    <tr className="bg-black  text-white text-left  ">
                      <td className="py-4 px-2">{appointment.name}</td>
                      <td className="py-4 px-2">{appointment.email}</td>
                      <td className="py-4 px-2">{appointment.phone}</td>
                      <td className="py-4 px-2">{appointment.date}</td>
                      <td className="py-4 px-2">{appointment.time}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}
