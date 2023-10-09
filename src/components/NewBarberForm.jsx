import Button from "@/commons/Button";
import Input from "@/commons/Input";
import Selecthours from "@/commons/Selecthours";
import { useAdminContext } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import React, { useState } from "react";

export default function NewBarberForm({}) {
  const [hours, setHours] = useState({
    start_time: "08:00:00",
    end_time: "20:00:00",
  });
  const handleHours = (e) => {
    setHours((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const name = useInput("", "required");
  const lastName = useInput("", "required");

  const { createBarber } = useAdminContext();
  const handleSumbitChanges = () => {
    const data = { name: name.value, lastName: lastName.value, ...hours };
    createBarber(data);
  };
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h2 className="text-black font-semibold">Datos del peluquero</h2>

        <div>
          <Input title={"Nombre"} {...name} placeholder={"Ingresar nombre"} />
          <Input
            title={"Apellido"}
            {...lastName}
            placeholder={"Ingresar apellido"}
          />
        </div>
      </section>

      <hr />
      <section>
        <h2 className="text-black font-semibold">Horarios</h2>
        <Selecthours hours={hours} handleHours={handleHours} />
      </section>

      <div className="fixed w-[90%] bottom-0 bg-white z-30 py-3">
        <Button
          onClick={handleSumbitChanges}
          variant="primary"
          className="p-2 rounded-md w-full  "
          disabled={name.value === "" || lastName.value === ""}
        >
          Agregar Peluquero
        </Button>
      </div>
    </div>
  );
}
