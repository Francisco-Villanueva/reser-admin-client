import React from "react";

export default function Ticket({ children, variant = "primary" }) {
  const VARIANTS = {
    primary: "bg-[rgba(0,0,0,.1)] text-dark-grey  ",
    secondary: "bg-white  border   text-dark-grey  ",
  };
  return (
    <span className={`p-1 ${VARIANTS[variant]} w-full  rounded-md `}>
      {children}
    </span>
  );
}
