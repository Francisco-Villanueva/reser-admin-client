import { useTheme } from 'next-themes'

export default function AsideBackground() {
  const { theme } = useTheme()
  return (
    <div className="absolute h-full w-full top-0 left-0  -z-10 grid place-items-center opacity-25 ">
      <div className="absolute h-64 w-64 bg-primary/20 top-0 left-0 rounded-br-full "></div>
      <div className=" h-64 w-64  rounded-full p-2 ">
        <img
          src={
            theme === 'light'
              ? '/images/RESET_C_negro.png'
              : '/images/RESET_C.png'
          }
          className="opacity-20"
          alt="reset salong bahia blanca"
        />
      </div>
      <div className="absolute h-56 w-56 bg-primary/50 bottom-0 right-0 rounded-tl-full "></div>
    </div>
  )
}
