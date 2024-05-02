import Link from 'next/link'

export default function SidebarLink({
  isSmall,
  isActive,
  icon,
  title,
  className = '',
  href,
}) {
  return (
    <Link
      href={`${href}`}
      className={`flex max-sm:flex-col max-sm:justify-center text-md   items-center h-12 transition-all duration-200 ${
        isActive ? 'text-primary bg-secondary' : ' text-primary/50'
      } ${className}`}
    >
      {isActive && (
        <div className="h-full max-sm:h-[2px] w-1 max-sm:w-full  bg-primary rounded-lg"></div>
      )}

      <div
        className={`flex gap-2 max-sm:p-1  ${
          isActive ? 'pl-[26px]' : 'p-[30px]'
        }`}
      >
        {icon}
        <span className={`  ${isSmall && 'hidden'}`}>{title}</span>
      </div>
    </Link>
  )
}
