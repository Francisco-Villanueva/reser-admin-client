"use client";
import Button from "@/commons/Button";
import ChildrenLayout from "@/commons/ChildrenLayout";
import AppointmentsList from "@/components/AppointmentsList";
import { useStore } from "@/context/AdminContext";
import { AuthServices } from "@/services";
import React, { useEffect } from "react";

export default function TunosListPage() {
  const { barbers, selectedBarber, setSelectedBarber, currentUser } =
    useStore();

  useEffect(() => {
    if (!selectedBarber.id) setSelectedBarber(currentUser);
  }, []);
  const handleSelectBarber = (barberId) => {
    AuthServices.getBarber(barberId).then((res) => {
      setSelectedBarber(res.data);
    });
  };
  return (
    <ChildrenLayout>
      <section className="flex gap-4 p-2">
        {barbers.map((barber) => (
          <Button
            variant={`${
              !(barber.id === selectedBarber.id) ? "primary" : "secondary"
            }`}
            className="  p-2 rounded-md "
            onClick={() => handleSelectBarber(barber.id)}
          >
            {barber.name}
          </Button>
        ))}
      </section>
      <AppointmentsList barber={selectedBarber} />
    </ChildrenLayout>
  );
}
