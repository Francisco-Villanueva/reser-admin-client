"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import {
  DashboardIcon,
  PersonsGroupIcon,
  SettingsIcon,
  ArrowLeft,
  ArrowRight,
  ListIcon,
} from "@/commons/Icons";
import SidebarLink from "@/commons/SidebarLink";
import { useStore } from "@/context/AdminContext";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const {
    currentUser: { isAdmin },
  } = useStore();
  const [showLogo, setShowLogo] = useState(true);
  const [isSidebarSmall, setIsSidebarSmall] = useState(true);

  const toggleSidebarSize = () => {
    setIsSidebarSmall(!isSidebarSmall);
    setShowLogo(!showLogo);
  };

  const path = usePathname();
  return (
    <aside
      className={`h-[99.83vh]  flex flex-col max-sm:flex-row  max-sm:h-[10vh] max-sm:border max-sm:w-full max-sm:gap-10 max-sm:px-6 max-sm:items-center shadow-sm shadow-grey transition-all ${
        isSidebarSmall ? "w-20" : "w-64"
      }`}
    >
      <header className={` grid place-items-center  h-[10vh]   `}>
        <Image
          src={"/images/RESET_C_negro.png"}
          alt="Logo"
          width={50}
          className="max-sm:w-full "
          height={10}
        />
      </header>

      <div className="h-5 max-sm:hidden">
        <hr />

        <Button
          icon={isSidebarSmall ? <ArrowRight /> : <ArrowLeft />}
          onClick={toggleSidebarSize}
          className={`w-10 h-10 bg-white border border-grey hover:bg-gray-300 rounded-full relative bottom-5 ${
            isSidebarSmall ? "left-[70%]" : "left-[90%]"
          }`}
        />
      </div>

      <section className="flex flex-col max-sm:flex-row flex-[2] gap-4">
        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<DashboardIcon />}
          title="Dashboard"
          href="/home/admin"
          isActive={!path.split("/").includes("turnos")}
        />

        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<ListIcon />}
          title="Turnos"
          href={"/home/admin/turnos"}
          isActive={path.split("/").includes("turnos")}
        />
      </section>
    </aside>
  );
}
