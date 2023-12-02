import Button from "@/commons/Button";
import Input from "@/commons/Input";
import { useStore } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import { ApiServices } from "@/services/workhours.services";
import { message } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function BarberInfo() {
  const { selectedBarber, setBarbers } = useStore();
  const name = useInput(selectedBarber.name, null);
  const lastName = useInput(selectedBarber.lastName, null);
  const userName = useInput(selectedBarber.userName, "required");
  const email = useInput(selectedBarber.email, "email");

  const [disableButton, setDisableButton] = useState(true);
  useEffect(() => {
    const isChange = () => {
      const emailChange = selectedBarber.email !== email.value;
      const nameChange = selectedBarber.name !== name.value;
      const lastNameChange = selectedBarber.lastName !== lastName.value;
      const userNameChange = selectedBarber.userName !== userName.value;

      return emailChange || nameChange || lastNameChange || userNameChange;
    };

    setDisableButton(isChange);
  }, [name.value, email.value, lastName.value, userName.value]);
  const handleSubmit = (e) => {
    e.preventDefault();
    ApiServices.updateBarberData(selectedBarber.id, {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      userName: userName.value,
    }).then(() => {
      ApiServices.getAllBarbers().then((res) => {
        setBarbers(res.data);
      });
      message.success("Cambios realizados");
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2">
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
        <div className="flex flex-col gap-2">
          <Input
            defaultValue={selectedBarber.userName}
            title={"Nombre de usuario"}
            {...userName}
          />
          <Input
            defaultValue={selectedBarber.email}
            title={"Email"}
            {...email}
          />
        </div>
      </div>

      <Button
        variant="primary"
        className="p-2 rounded-md w-full  "
        disabled={!disableButton}
      >
        Actualizar
      </Button>
    </form>
  );
}
