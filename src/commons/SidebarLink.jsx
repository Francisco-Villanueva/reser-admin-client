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
      className={`flex max-sm:flex-col max-sm:justify-center  items-center h-12 ${
        isActive ? 'text-blue' : undefined
      } ${className}`}
    >
      {isActive && (
        <div className="h-full max-sm:h-[2px] w-1 max-sm:w-full  bg-blue rounded-lg"></div>
      )}

      <div
        className={`flex gap-2 max-sm:p-1 ${
          isActive ? 'pl-[26px]' : 'p-[30px]'
        }`}
      >
        {icon}
        <span
          className={`${
            isActive
              ? 'text-lg font-bold text-blue'
              : 'font-medium text-dark-grey'
          } ${isSmall && 'hidden'}`}
        >
          {title}
        </span>
      </div>
    </Link>
  )
}
