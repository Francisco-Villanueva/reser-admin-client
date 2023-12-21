"use client";
import Button from "@/commons/Button";
import FloatingLoader from "@/commons/FloatingLoader";
import Input from "@/commons/Input";
import Loader from "@/components/Loader";
import { useStore } from "@/context/AdminContext";
import useInput from "@/hooks/useInput";
import { AuthServices } from "@/services/auth.services";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { setCurrentUser } = useStore();
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
        setLoading(false);
      });
  };
  return (
    <section className="relative flex h-[100vh] items-center justify-center  ">
      <div className="w-1/2 h-full bg-white">
        <h2 className="m-10 text-dark-grey font-normal font-inter text-3xl">
          RESET
        </h2>
      </div>
      <div className="w-1/2 h-full bg-dark-grey rounded-l-full"></div>

      <form
        onSubmit={handleLogin}
        className=" flex flex-col gap-8  justify-center absolute   rounded-md max-sm:w-[70%] w-1/3 p-4 bg-[rgba(0,0,0,.6)] bg-light-grey"
      >
        <div className="flex flex-col gap-4 text-md">
          <Input
            {...userName}
            type={"text"}
            title={"Username"}
            titleColor="text-dark-grey"
          />
          <Input
            {...password}
            type={"password"}
            title={"Password"}
            titleColor="text-dark-grey"
          />
        </div>

        <div className="flex flex-col items-center w-5/6 m-auto gap-1">
          <Button
            type="submit"
            variant="primary"
            className="border-none w-full p-2 rounded-md"
          >
            Login
          </Button>
        </div>
      </form>
      {loading && <FloatingLoader />}
    </section>
  );
}
