"use client";
import { ClockIcon } from "@/commons/Icons";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import Aside from "./Aside";
import BarberDetails from "./BarberDetails";
import ActionsButtons from "./ActionsButtons";
import { useStore } from "@/context/AdminContext";

export default function BarberCard({ barber }) {
  const { closeModal, openModal, isModalOpen } = useModal();
  const { setSelectedBarber } = useStore();
  const handleSelectBarber = () => {
    setSelectedBarber(barber);
    openModal();
  };
  return (
    <>
      <article
        className={`flex gap-2  items-start justify-between rounded-lg border border-border p-4 font-inter `}
      >
        <div className="flex w-2/3 gap-2">
          <div className="relative w-full">
            <Image
              src={"/images/barber1.jpg"}
              alt="colabPhoto"
              fill
              objectFit="contain"
            />
          </div>

          <div className="ml-1 flex flex-col gap-2 items-start">
            <h2 className="text-black font-bold ">
              {barber.name} {barber.lastName}
            </h2>
            <b className="text-dark-grey">#00{barber.id}</b>
          </div>
        </div>

        <ActionsButtons
          barber={barber}
          handleSelectBarber={handleSelectBarber}
        />
      </article>
      {isModalOpen ? (
        <Aside
          title={
            <p>
              {barber.name}
              <span className="text-dark-grey ml-1">#00{barber.id}</span>{" "}
            </p>
          }
          closeModal={closeModal}
        >
          <BarberDetails />
        </Aside>
      ) : null}
    </>
  );
}
