import Button from "@/commons/Button";
import Input from "@/commons/Input";
import { useAdminContext } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import { ApiServices } from "@/services/workhours.services";
import { message } from "antd";
import Image from "next/image";
import React from "react";

export default function BarberInfo() {
  const { selectedBarber, setBarbers } = useAdminContext();
  const name = useInput(selectedBarber.name, null);
  const lastName = useInput(selectedBarber.lastName, null);

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiServices.updateBarberData(selectedBarber.id, {
      name: name.value,
      lastName: lastName.value,
    }).then(() => {
      ApiServices.getAllBarbers().then((res) => {
        setBarbers(res.data);
      });
      message.success("Cambios realizados");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-1   ">
        <div className=" relative flex-1 border rounded-md ">
          <Image src="/images/barber1.jpg" fill objectFit="contain" />
        </div>
        <div className="flex flex-[2] flex-col gap-2">
          <Input
            defaultValue={selectedBarber.name}
            title={"Nombre"}
            {...name}
          />
          <Input
            defaultValue={selectedBarber.lastName}
            title={"Apellido"}
            {...lastName}
          />
        </div>
      </div>
      <div className=" bg-white">
        <Button
          variant="primary"
          className="p-2 rounded-md w-full  "
          disabled={
            !(
              name.value !== selectedBarber.name ||
              lastName.value !== selectedBarber.lastName
            )
          }
        >
          Actualizar
        </Button>
      </div>
    </form>
  );
}
