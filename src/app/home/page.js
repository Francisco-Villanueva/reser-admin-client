"use client";
import Button from "@/commons/Button";
import { AddIcon, GridLayoutIcon, TableDisplayIcon } from "@/commons/Icons";
import Aside from "@/components/Aside";
import BarberCard from "@/components/BarberCard";
import Loader from "@/components/Loader";
import NewBarberForm from "@/components/NewBarberForm";
import { useAdminContext } from "@/context/AdminContext";
import useModal from "@/hooks/useModal";
import React, { useEffect, useState } from "react";

export default function page() {
  const { barbers, getAllBarbers } = useAdminContext();
  const { openModal, isModalOpen, closeModal } = useModal();
  const [view, setView] = useState("grid");
  useEffect(() => {
    getAllBarbers();
  }, []);
  return (
    <main className=" flex flex-col justify-around gap-4  p-4 h-full  rounded-md border  ">
      <section className="w-full flex justify-between    ">
        Filter
        {view === "grid" ? (
          <Button onClick={() => setView("table")}>
            <TableDisplayIcon />
          </Button>
        ) : (
          <Button onClick={() => setView("grid")}>
            <GridLayoutIcon />
          </Button>
        )}
      </section>
      <hr />
      <section className="   overflow-y-auto    h-full   ">
        {!barbers.length ? (
          <Loader />
        ) : view === "table" ? (
          <TableTeam team={barbers} />
        ) : (
          <div className="grid grid-cols-3 gap-2 ">
            {barbers

              .sort((a, b) => a.id - b.id)
              ?.map((barber) => (
                <BarberCard
                  barber={barber}
                  className={"w-full"}
                  key={barber.id}
                />
              ))}
          </div>
        )}
      </section>

      <Button
        className={
          "absolute bottom-[1rem] right-[1rem]  h-10 w-10 rounded-full "
        }
        variant="primary"
        onClick={openModal}
      >
        <AddIcon />
      </Button>

      {isModalOpen && (
        <Aside title="New Barber" closeModal={closeModal}>
          <NewBarberForm />
        </Aside>
      )}
    </main>
  );
}
