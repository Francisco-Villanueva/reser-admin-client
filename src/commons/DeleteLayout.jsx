import React from "react";
import Button from "./Button";
import { IconX } from "./Icons";

export default function DeleteLayout({ children, closeModal, handleDelete }) {
  return (
    <aside className="absolute top-0 left-0 z-50 w-full h-full bg-blend-normal grid place-items-center backdrop-blur-[5px]">
      <div className=" relative w-[50%]  h-[50%] bg-white border rounded-md p-4 flex flex-col gap-4 justify-between max-sm:w-[90%]  max-sm:h-[60%]  ">
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
        </Button>
        {children}
        <Button
          variant={"delete"}
          size={"small"}
          className="rounded-md w-1/2 m-auto"
          onClick={handleDelete}
        >
          Eliminar
        </Button>
      </div>
    </aside>
  );
}
