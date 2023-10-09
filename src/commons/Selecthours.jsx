"use client";

export default function Selecthours({ hours, handleHours }) {
  const mainHours = [
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "13:00:00",
    "14:00:00 ",
    "15:00:00",
    "16:00:00",
    "17:00:00",
    "18:00:00",
    "19:00:00",
    "20:00:00",
  ];

  return (
    <div
      className="m-auto p-2 flex justify-center gap-4
"
    >
      <div className="flex flex-col items-center">
        <span className="text-dark-grey">Start Time</span>
        <select
          onChange={handleHours}
          name="start_time"
          defaultValue={hours.start_time}
          className="bg-transparent p-2 text-black  rounded-md"
        >
          {mainHours.map((hs) => (
            <option value={hs}>{hs}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-dark-grey">Start Time</span>
        <select
          onChange={handleHours}
          name="end_time"
          defaultValue={hours.end_time}
          className="bg-transparent p-2 text-black  rounded-md"
        >
          {mainHours.map((hs) => (
            <option value={hs}>{hs}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
