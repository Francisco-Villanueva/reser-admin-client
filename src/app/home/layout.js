import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="w-full   max-h-[100%] px-6">
        <Navbar className="  w-full h-[10vh]  " title={"Administracion"} />

        <div className="max-h-[85vh] h-[85vh]">{children}</div>
      </div>
    </div>
  );
}
