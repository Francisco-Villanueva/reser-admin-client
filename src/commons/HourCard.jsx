import React from "react";

export default function HourCard({
  hour,
  onClick,
  isNew = false,
  isDeleted = false,
}) {
  return (
    <div
      className="flex items-center gap-2 border p-1 rounded-sm cursor-pointer hover:bg-light-grey transition-all duration-200 hover:scale-105"
      onClick={onClick}
    >
      <div
        className={`w-3 h-3 rounded-full ${
          hour.avaliable && !isDeleted
            ? "bg-green"
            : isNew
            ? "bg-orange-300"
            : isDeleted
            ? "bg-error"
            : "bg-disabled"
        }`}
      ></div>
      <p
        className={`${
          hour.avaliable && !isDeleted
            ? ""
            : isNew
            ? "text-orange-300"
            : isDeleted
            ? "text-error"
            : "text-disabled"
        }`}
      >
        {hour.value}
      </p>
    </div>
  );
}
