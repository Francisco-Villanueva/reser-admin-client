import React from "react";
import Button from "@/commons/Button";
import Image from "next/image";
import {
  ShopIcon,
  NotificationIcon,
  DropDownArrow,
  UserIcon,
} from "@/commons/Icons";
import { useAdminContext } from "@/context/AdminContext";

export default function Navbar({ title, className = "", hasNotification }) {
  const { currentUser } = useAdminContext();

  return (
    <nav className={`flex justify-between items-center ${className}`}>
      <h1 className="font-semibold text-xl text-black">{title || ""}</h1>

      <div className="flex items-center  justify-end gap-2 ">
        <Button
          icon={
            <NotificationIcon stroke={2} hasNotification={hasNotification} />
          }
          variant={"text"}
          className={"py-2 px-2 hover:bg-none "}
        />
        <div className="flex gap-2 items-center rounded-md transition-colors duration-200 cursor-pointer hover:bg-grey p-2 ">
          <div className="  flex items-center gap-2 text-black font-semibold  ">
            <UserIcon className="w-full h-[1.5rem]" />
            <p>{currentUser?.name}</p>
          </div>
          <DropDownArrow className={"w-3"} />
        </div>
      </div>
    </nav>
  );
}
