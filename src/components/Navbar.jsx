import React from "react";
import Button from "@/commons/Button";
import { DropDownArrow, UserIcon } from "@/commons/Icons";
import { useStore } from "@/context/AdminContext";
import useModal from "@/hooks/useModal";
import { useRouter } from "next/navigation";

export default function Navbar({ title, className = "" }) {
  const { currentUser, setCurrentUser } = useStore();

  const { isModalOpen, closeModal, openModal } = useModal();

  const handleOpen = () => {
    !isModalOpen ? openModal() : closeModal();
  };

  const router = useRouter();
  const handleLogOut = () => {
    router.push("/login");
  };
  return (
    <nav className={`flex justify-between items-center ${className}`}>
      <h1 className="font-semibold text-xl text-black">{title || ""}</h1>

      <div
        className="flex flex-col items-center gap-2 relative "
        onClick={handleOpen}
      >
        <div className="flex gap-2 items-center rounded-md transition-colors duration-200 cursor-pointer hover:bg-grey p-2  ">
          <div className="  flex items-center gap-2 text-black font-semibold  ">
            <UserIcon className="w-full h-[1.5rem]" />
            <p>{currentUser?.name}</p>
          </div>
          <DropDownArrow className={"w-3"} />
        </div>
        {isModalOpen && (
          <Button
            className="absolute bottom-[-40px] rounded-md"
            size={"small"}
            variant="dark"
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        )}
      </div>
    </nav>
  );
}
