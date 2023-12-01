"use client";
import Button from "@/commons/Button";
import FloatingLoader from "@/commons/FloatingLoader";
import Input from "@/commons/Input";
import Loader from "@/components/Loader";
import { useAdminContext } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import { AuthServices } from "@/services/auth.services";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const { setCurrentUser } = useAdminContext();
  const userName = useInput("", "required");
  const password = useInput("", "required");
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const data = { userName: userName.value, password: password.value };

    setLoading(true);
    AuthServices.login(data)
      .then((res) => {
        const user = res.data.user;
        localStorage.setItem("userId", user.id);
        setCurrentUser(user);
        message.success("Logged Succesfully!");
        if (user.isAdmin) {
          router.push("/home/admin");
        } else {
          router.push("/home/barber");
        }
        setLoading(false);
      })
      .catch(() => {
        message.error("Error at Login");
      });
  };
  return (
    <section class="bg-gray-50 relative flex h-[100vh] items-center justify-center  ">
      <div className="w-1/2 h-full bg-white">
        <h2 className="m-10 text-dark-grey font-normal font-inter text-3xl">
          RESET
        </h2>
      </div>
      <div className="w-1/2 h-full bg-dark-grey rounded-l-full"></div>

      <form
        onSubmit={handleLogin}
        className=" flex flex-col gap-8  justify-center absolute border  rounded-md max-sm:w-[70%] px-10 py-4 bg-[rgba(0,0,0,.6)]"
      >
        <div className="flex flex-col gap-4">
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

        <div className="flex flex-col items-center w-5/6 m-auto">
          <Button
            variant="primary"
            className="border-none w-full p-2 rounded-md"
          >
            Login
          </Button>

          <span className="text-sm text-white">
            No tienes cuenta? <strong>Registrate</strong>
          </span>
        </div>
      </form>
      {loading && <FloatingLoader />}
    </section>
  );
}
