import Button from "@/commons/Button";
import FloatingLoader from "@/commons/FloatingLoader";
import Input from "@/commons/Input";
import { useStore } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import { ApiServices, AuthServices } from "@/services";
import { message } from "antd";
import React, { useState } from "react";

export default function NewBarberForm({ closeModal }) {
  const { setBarbers } = useStore();
  const [loading, setLoading] = useState(false);

  const name = useInput("", "required");
  const lastName = useInput("", "required");
  const userName = useInput("", "required");
  const email = useInput("", "email");
  const password = useInput("", "required");
  const confirmPassword = useInput("", "required");

  const handleSumbitChanges = () => {
    const data = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      userName: userName.value,
      password: password.value,
    };
    setLoading(true);

    AuthServices.register(data)
      .then(() => {
        message.success(`Peluquero Agregado!`);
        ApiServices.getAllBarbers().then((res) => {
          setBarbers(res.data);
          setLoading(false);
          closeModal();
        });
      })
      .catch(() => {
        message.error("Error al crear un nuevo peluquero!");
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col gap-4  h-full  ">
      <section className="h-full ">
        <div className="flex flex-col h-[90%] justify-around py-10 gap-8 max-sm:text-sm p-4 rounded-lg  drop-shadow-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-md text-dark-grey">Datos del peluquero</h2>
            <div className="flex  gap-2">
              <Input
                title={"Nombre"}
                {...name}
                placeholder={"Ingresar nombre"}
              />
              <Input
                title={"Apellido"}
                {...lastName}
                placeholder={"Ingresar apellido"}
              />
            </div>
            <Input title={"Email"} {...email} placeholder={"Ingresar Email"} />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-md text-dark-grey">Informacion de usuario</h2>
            <Input
              title={"Nombre de Usuario"}
              {...userName}
              placeholder={"Ingresar Nombre de Usuario"}
            />
            <Input
              title={"Contraseña"}
              {...password}
              type={"password"}
              placeholder={"Ingresar contraseña"}
            />
            <Input
              title={"Confitmar Contraseña"}
              {...confirmPassword}
              type={"password"}
              placeholder={"Confirmar contraseña"}
            />
          </div>
        </div>
      </section>

      <div className="fixed w-[90%] max-sm:w-[80%]  bottom-0  z-30 py-3">
        <Button
          onClick={handleSumbitChanges}
          variant="primary"
          className="p-2 rounded-md w-full  "
          disabled={name.value === "" || lastName.value === ""}
        >
          Cargar
        </Button>
      </div>
      {loading && <FloatingLoader />}
    </div>
  );
}
