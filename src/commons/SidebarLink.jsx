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
      className={`flex max-sm:flex-col max-sm:justify-center text-md border-primary  ${isActive ? 'sm:border-l-4 max-sm:border-t-4' : ''}  items-center h-12   max-sm:h-full transition-all duration-200 ${
        isActive ? 'text-primary bg-background/75 ' : ' text-primary/50'
      } ${className}`}
    >
      <div className={`flex gap-2 max-sm:p-1  pl-4  `}>
        {icon}
        <span className={`  ${isSmall && 'hidden'}`}>{title}</span>
      </div>
    </Link>
  )
}
