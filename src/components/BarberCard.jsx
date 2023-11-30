"use client";
import { ClockIcon } from "@/commons/Icons";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import Aside from "./Aside";
import BarberDetails from "./BarberDetails";
import ActionsButtons from "./ActionsButtons";
import { useAdminContext } from "@/context/AdminContext";

export default function BarberCard({ barber, className }) {
  const { closeModal, openModal, isModalOpen } = useModal();
  const { setSelectedBarber } = useAdminContext();
  const handleSelectBarber = () => {
    setSelectedBarber(barber);
    openModal();
  };
  return (
    <>
      <article
        className={`flex flex-col gap-2  mx-auto rounded-lg border border-border p-4 font-inter   ${className}`}
      >
        <header className="flex justify-between items-start gap-2">
          <div className="flex gap-2">
            <Image
              src={"/images/barber1.jpg"}
              alt="colabPhoto"
              width={150}
              height={40}
            />

            <div className="ml-1 flex flex-col gap-2 items-start">
              <h2 className="text-black font-bold ">
                {barber.name} {barber.lastName}
              </h2>
              <b className="text-dark-grey">#00{barber.id}</b>
              <section className="text-md text-dark-grey">
                <div className="flex gap-2  justify-between items-center ">
                  <p className="flex   ">
                    <ClockIcon className="w-[1rem]" />
                  </p>
                  <b>{barber.start_time}</b>
                </div>

                <div className="flex gap-2  justify-between items-center ">
                  <p className="flex   ">
                    <ClockIcon className="w-[1rem]" />
                  </p>
                  <b>{barber.end_time}</b>
                </div>
              </section>
            </div>
          </div>

          <ActionsButtons
            barber={barber}
            handleSelectBarber={handleSelectBarber}
          />
        </header>
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
