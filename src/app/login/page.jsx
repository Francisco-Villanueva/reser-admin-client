"use client";
import Button from "@/commons/Button";
import FloatingLoader from "@/commons/FloatingLoader";
import { ArrowLeft } from "@/commons/Icons";
import Input from "@/commons/Input";
import Loader from "@/components/Loader";
import { useStore } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import useModal from "@/hooks/useModal";
import { AuthServices } from "@/services/auth.services";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { setCurrentUser, setSelectedBarber } = useStore();
  const userName = useInput("", "required");
  const password = useInput("", "required");
  const router = useRouter();

  useEffect(() => {
    localStorage.clear();
    setCurrentUser(null);
  }, []);
  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const data = { userName: userName.value, password: password.value };
    setLoading(true);
    AuthServices.login(data)
      .then((res) => {
        const user = res.data.user;
        if (user.status === "inactive") {
          setLoading(false);
          message.warning("El usuario ingresado se encuentra deshabilitado.");
          return;
        }
        localStorage.setItem("userId", user.id);
        setCurrentUser(user);
        message.success("Logged Succesfully!");
        if (user.isAdmin) {
          router.push("/home/admin");
        } else {
          setSelectedBarber(user);
          router.push("/home/barber");
        }
        setLoading(false);
      })
      .catch(() => {
        message.error("Error at Login");
        setLoading(false);
      });
  };

  const { isModalOpen,  toggleModal } = useModal();
  return (
    <section className="  max-h-[100vh] h-[100vh] w-[100vw] flex flex-col overflow-hidden ">
      <nav className="border w-full p-2 bg-white flex justify-between items-center ">
        <Image src="/logo.png" width={50} height={50} alt="prosam" />
        <Button
          variant="text"
          className="rounded-md p-1 font-light   text-md"
          onClick={toggleModal}
        >
          login
          <ArrowLeft
            className={`w-[15px] transition-rotate duration-150 ${
              isModalOpen ? "rotate-180" : "rotate-360"
            } `}
          />
        </Button>
      </nav>
      <div className="relative  text-white grid place-items-center flex-grow">
        <section className="flex flex-col items-center">
          <Image src="/prosamLogo.png" width={500} height={50} alt="prosam" />
        </section>
        <div
          className={`absolute right-0 top-0   max-md:w-full  max-md:h-full h-[60%]  scroll- rounded-b-lg drop-shadow-2xl shadow-xl bg-blue opacity-90 grid place-items-center  transition-translate duration-300  ${
            isModalOpen ? "translate-x-0 w-1/3" : "translate-x-[100%]  " 
          }`}
        >
          {isModalOpen && (
            <form
              onSubmit={handleLogin}
              className=" flex flex-col gap-8  justify-center  w-[90%]   h-[60%]  rounded-md max-sm:w-[70%] p-4   "
            >
              <div className="flex flex-col gap-4 text-md">
                <Input
                  {...userName}
                  type={"text"}
                  title={"Username"}
                  titleColor="text-white"
                />
                <Input
                  {...password}
                  type={"password"}
                  title={"Password"}
                  titleColor="text-white"
                />
              </div>

              <div className="flex flex-col items-center w-5/6 m-auto gap-1">
                <Button type="submit" className="font-normal ">
                  Login
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {loading && <FloatingLoader />}
    </section>
  );
}
