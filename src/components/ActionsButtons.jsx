"use client";

import Button from "@/commons/Button";
import { PenIcon, TrashIcon } from "@/commons/Icons";
import useModal from "@/hooks/useModal";
import DeleteForm from "./DeleteForm";

export default function ActionsButtons({ openEdit, barber }) {
  const deleteModal = useModal();
  return (
    <div className="flex gap-2">
      <Button onClick={() => openEdit(barber)}>
        <PenIcon className={"w-[1rem] h-[1rem]"} />
      </Button>
      <Button onClick={() => deleteModal.openModal()}>
        <TrashIcon className={"w-[1rem] h-[1rem] hover:text-error"} />
      </Button>

      {deleteModal.isModalOpen && (
        <DeleteForm closeModal={deleteModal.closeModal} barber={barber} />
      )}
    </div>
  );
}
