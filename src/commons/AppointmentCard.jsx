import React from "react";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  TableDisplayIcon,
  TrashIcon,
} from "./Icons";
import Ticket from "./Ticket";
import Button from "./Button";
import { message } from "antd";
import { AppointmentServices, AuthServices } from "@/services";
import { useStore } from "@/context/AdminContext";
import useModal from "@/hooks/useModal";
import DeleteLayout from "./DeleteLayout";
import TitleView from "./TitleView";
import useDate from "@/hooks/useDate";

function InnerSectionLayout({ children }) {
  return (
    <section className="flex  max-2xl:flex-col items-center gap-4 max-md:gap-1 max-lg:text-sm w-full m-auto  max-sm:px-2">
      {children}
    </section>
  );
}
export default function AppointmentCard({ appointment }) {
  const { name, email, phone, date, time, id } = appointment;
  const { currentUser, setCurrentUser, setSelectedBarber, selectedBarber } =
    useStore();
  const { openModal, isModalOpen, closeModal } = useModal();
  const handleDeleteAppointment = () => {
    AppointmentServices.delete(id).then(() => {
      AuthServices.getBarber(
        currentUser.isAdmin ? selectedBarber.id : currentUser.id
      ).then((res) => {
        currentUser.isAdmin
          ? setSelectedBarber(res.data)
          : setCurrentUser(res.data);
        message.info(`Turno eliminado`);
      });
    });
  };
  const { formatToYMD } = useDate();
  return (
    <div className="flex max-lg:flex-col justify-between  rounded-md p-4 max-sm:p-4 lg:items-center   gap-8  max-md:gap-2  border  ">
      <section
        className={` text-xl max-lg:text-white font-semibold flex gap-1 max-lg:border-2 max-lg:bg-black max-lg:border-black  max-lg:rounded-md  max-lg:justify-between   max-lg:p-1`}
      >
        {currentUser.isAdmin && (
          <Button
            onClick={openModal}
            className="   bg-error hover:bg-red-700 text-white   rounded-md p-1 z-40"
          >
            <TrashIcon className={"w-4  "} />
          </Button>
        )}
        <p>{name}</p>
      </section>

      <div className="flex w-[80%] max-md:flex-col  max-md:w-[90%] m-auto   gap-2 px-2 max-md:px-4 border-l-black border-l-2  ">
        <InnerSectionLayout>
          <Ticket variant="outline">
            <MailIcon className="w-3" />
            {email}
          </Ticket>
          <Ticket variant="outline">
            <PhoneIcon className="w-3" />
            {phone}
          </Ticket>
        </InnerSectionLayout>
        <InnerSectionLayout>
          <Ticket variant="outline">
            <TableDisplayIcon className="w-3" />
            {formatToYMD(date)}
          </Ticket>
          <Ticket variant="outline">
            <ClockIcon className="w-3" />
            {time} hs
          </Ticket>
        </InnerSectionLayout>
      </div>

      {isModalOpen && (
        <DeleteLayout
          closeModal={closeModal}
          handleDelete={handleDeleteAppointment}
        >
          <div className="bg-white h-full w-[90%] flex flex-col justify-center">
            <TitleView>Eliminar Turno</TitleView>
            <div className="h-full  flex flex-col gap-4 justify-center items-center">
              <h2 className="text-black font-semibold text-xl">{name}</h2>

              <div className="flex flex-col w-2/3 gap-2 ">
                <span className="grid grid-cols-2 ">
                  <strong>Día</strong>
                  <Ticket>{date}</Ticket>
                </span>
                <span className="grid grid-cols-2 ">
                  <strong>Hora</strong>
                  <Ticket variant="secondary">{time} hs</Ticket>
                </span>
              </div>
            </div>
          </div>
        </DeleteLayout>
      )}
    </div>
  );
}
