"use client";

export default function Button({
  body,
  variant,
  icon,
  className = "",
  disabled = false,
  onClick,
  size,
  children,
  ...buttonProps
}) {
  const btnStyle = {
    variant: {
      primary: "bg-blue text-white   hover:bg-hoverBlue hover:text-blue ",
      secondary: "bg-white border border-blue hover:bg-hoverBlue  text-blue ",
      delete:
        "bg-white  border border-red-500 hover:bg-error hover:text-white text-red-500 ",
      text: "bg-white   text-blue  hover:bg-hoverBlue",
      alert: "text-error    hover:bg-hoverRed",
      dark: "text-dark-grey  bg-light-grey border  ",
    },
    size: {
      big: "text-lg py-3 px-6",
      small: "text-sm  py-2 px-6",
    },
    disabled: {
      primary: "bg-light-grey    text-grey ",
      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`text-center flex items-center justify-center  gap-2 font-bold leading-5 capitalize  transition-all duration-150 ease-inl ${
        disabled
          ? `${btnStyle.disabled[variant]} ${btnStyle.size[size]}`
          : `${btnStyle.variant[variant]} ${btnStyle.size[size]}`
      } ${className} `}
      {...buttonProps}
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {body}
        </>
      )}
    </button>
  );
}
