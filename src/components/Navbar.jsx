import { NavbarDropDown } from './Dropdowns/NavbarDropDown'
import { ThemeSwitcher } from './Theme/ThemeSwitcher'
export default function Navbar() {
  return (
    <nav
      className={`flex justify-end items-center  w-full h-[10vh] max-sm:h-[6vh]  `}
    >
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <NavbarDropDown />
      </div>
    </nav>
  )
}
