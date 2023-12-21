"use client";
import useModal from "@/hooks/useModal";
import Aside from "./Aside";
import BarberDetails from "./BarberDetails";
import ActionsButtons from "./ActionsButtons";
import { useStore } from "@/context/AdminContext";
import BarberStatus from "@/commons/BarberStatus";

export default function BarberCard({ barber }) {
  const { closeModal, openModal, isModalOpen } = useModal();
  const { setSelectedBarber } = useStore();
  const handleSelectBarber = () => {
    setSelectedBarber(barber);
    openModal();
  };
  return (
    <div>
      <article
        className={`flex gap-2  items-start justify-between rounded-lg border border-border p-4 font-inter  `}
      >
        <div className=" flex  gap-2 items-center">
          <BarberStatus status={barber.status} />
          <h2
            className={`${
              barber.status === "active" ? "text-black font-bold" : "text-grey "
            } `}
          >
            {barber.name} {barber.lastName}
          </h2>
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
              <span className="text-dark-grey ml-1">#00{barber.id}</span>
            </p>
          }
          closeModal={closeModal}
        >
          <BarberDetails closeModal={closeModal} />
        </Aside>
      ) : null}
    </div>
  );
}
