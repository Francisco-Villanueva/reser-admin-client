"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useStore } from "@/context/AdminContext";
import { AuthServices } from "@/services/auth.services";
import { ApiServices } from "@/services/workhours.services";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function layout({ children }) {
  const { currentUser, setCurrentUser, setBarbers, setSelectedBarber } =
    useStore();
  const router = useRouter();
  useEffect(() => {
    const barberId = localStorage.getItem("userId");
    if (!barberId) {
      return router.push("/login");
    }
    AuthServices.getBarber(barberId).then((res) => {
      const user = res.data;
      setCurrentUser(user);
      if (user.isAdmin) {
        ApiServices.getAllBarbers().then((res) => setBarbers(res.data));
        router.push("/home/admin");
      } else {
        setSelectedBarber(user);
        router.push("/home/barber");
      }
    });
  }, []);
  return (
    <div className="flex  max-sm:flex-col-reverse max-sm:gap-2">
      {currentUser?.isAdmin && <Sidebar />}

      <div className="w-full   max-h-[100%] px-6  ">
        <Navbar
          className="  w-full h-[10vh] max-sm:h-[6vh] "
          title={"Administracion"}
        />

        <div className="max-h-[85vh] h-[85vh]  max-sm:h-[83vh]">{children}</div>
      </div>
    </div>
  );
}
