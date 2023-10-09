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
} from "@/commons/Icons";
import SidebarLink from "@/commons/SidebarLink";

export default function Sidebar() {
  const [showLogo, setShowLogo] = useState(true);
  const [isSidebarSmall, setIsSidebarSmall] = useState(false);

  const toggleSidebarSize = () => {
    setIsSidebarSmall(!isSidebarSmall);
    setShowLogo(!showLogo);
  };

  return (
    <aside
      className={`h-[99.83vh] flex flex-col shadow-sm shadow-grey transition-all ${
        isSidebarSmall ? "w-20" : "w-64"
      }`}
    >
      <header className={` grid place-items-center  h-[10vh]     `}>
        <Image
          src={"/images/RESET_C_negro.png"}
          alt="Logo"
          width={50}
          height={10}
        />
      </header>

      <div className="h-5">
        <hr />

        <Button
          icon={isSidebarSmall ? <ArrowRight /> : <ArrowLeft />}
          onClick={toggleSidebarSize}
          className={`w-10 h-10 bg-white border border-grey hover:bg-gray-300 rounded-full relative bottom-5 ${
            isSidebarSmall ? "left-[70%]" : "left-[90%]"
          }`}
        />
      </div>

      <section className="flex flex-col flex-[2] gap-4">
        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<DashboardIcon />}
          title="Dashboard"
          href="/"
          isActive={true}
        />

        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<PersonsGroupIcon />}
          title="My Team"
          href="/"
          isActive={false}
        />
      </section>

      <hr className="my-2" />

      <section className="flex flex-col flex-[-1] h-12 my-4 gap-4">
        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<SettingsIcon />}
          title="Settings"
          href="/"
        />
      </section>
    </aside>
  );
}
