"use client";
import Button from "@/commons/Button";
import { IconX } from "@/commons/Icons";
import React from "react";
import Image from "next/image";
import Input from "@/commons/Input";
import { useAdminContext } from "@/context/AdminContext";
import { ApiServices } from "@/services/workhours.services";

export default function DeleteForm({ closeModal, barber = {} }) {
  const { setBarbers } = useAdminContext();
  const handleDelete = () => {
    ApiServices.deleteBarber(barber.id).then((res) => {
      ApiServices.getAllBarbers().then((res) => setBarbers(res.data));
    });
    closeModal();
  };
  return (
    <aside className="absolute top-0 left-0 z-50 w-full h-full bg-blend-normal grid place-items-center backdrop-blur-[5px]">
      <div className=" relative w-[50%] h-[80%] bg-white border rounded-md p-4 flex flex-col gap-4 justify-between">
        <Button
          icon={<IconX className="w-[20px]" />}
          body={"Cancelar"}
          variant={"text"}
          // size={"small"}
          className="absolute right-4 rounded-md p-2 "
          onClick={closeModal}
        ></Button>
        <h2 className="text-blue font-bold text-2xl p-2">Eliminar peluquero</h2>
        <div>
          <h2 className="text-black font-bold text-lg">
            Informacion del peluquero
          </h2>

          <div className="flex gap-1   ">
            <div className=" relative flex-1 border rounded-md ">
              <Image src={"/images/barber1.jpg"} fill objectFit="contain" />
            </div>
            <div className="flex flex-[2] flex-col gap-2">
              <Input value={barber.name} title={"Nombre"} />
              <Input value={barber.lastName} title={"Apellido"} />
            </div>
          </div>
        </div>

        <Button
          variant={"delete"}
          size={"big"}
          className="rounded-md"
          onClick={handleDelete}
        >
          Eliminar
        </Button>
      </div>
    </aside>
  );
}
