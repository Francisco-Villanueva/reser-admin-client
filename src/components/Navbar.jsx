import { NavbarDropDown } from './Dropdowns/NavbarDropDown'
export default function Navbar({ title, className = '' }) {
  return (
    <nav className={`flex justify-between items-center ${className}`}>
      <h1 className="font-semibold text-xl text-primary">{title || ''}</h1>

      <NavbarDropDown />
    </nav>
  )
}
