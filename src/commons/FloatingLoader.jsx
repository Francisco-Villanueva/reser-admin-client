import Loader from "@/components/Loader";
import React from "react";

export default function FloatingLoader() {
  return (
    <div className="absolute top-5 right-5 p-2 text-sm  rounded-full grid place-items-center text-white bg-[rgba(0,0,0,.2)]">
      <Loader />
    </div>
  );
}
