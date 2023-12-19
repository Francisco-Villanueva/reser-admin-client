"use client";
import Button from "@/commons/Button";
import { IconX } from "@/commons/Icons";
import React from "react";
import Image from "next/image";
import Input from "@/commons/Input";
import { useStore } from "@/context/AdminContext";
import { ApiServices } from "@/services/workhours.services";
import { message } from "antd";
import DeleteLayout from "@/commons/DeleteLayout";

export default function DeleteForm({ closeModal, barber = {} }) {
  const { setBarbers } = useStore();
  const handleDelete = () => {
    ApiServices.deleteBarber(barber.id).then((res) => {
      message.info("Peluquero eliminado");
      ApiServices.getAllBarbers().then((res) => setBarbers(res.data));
    });
    closeModal();
  };
  return (
    <DeleteLayout closeModal={closeModal}>
      {/* <div className=" relative w-[50%]  h-[50%] bg-white border rounded-md p-4 flex flex-col gap-4 justify-between max-sm:w-[90%]  max-sm:h-[60%]  ">
        <Button
          variant={"text"}
          size={"small"}
          className="absolute right-4 rounded-md p-2 max-sm:text-sm "
          onClick={closeModal}
        >
          <>
            <IconX className="w-[15px]" />
            Canclear
          </>
        </Button> */}
      <h2 className="text-blue font-bold text-2xl max-sm:text-lg p-2">
        Eliminar peluquero
      </h2>
      <div>
        <h2 className="text-black font-bold text-lg ">
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

      {/* <Button
          variant={"delete"}
          size={"small"}
          className="rounded-md w-1/2 m-auto"
          onClick={handleDelete}
        >
          Eliminar
        </Button> */}
      {/* </div> */}
    </DeleteLayout>
  );
}
