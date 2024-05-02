import React from 'react'
import { Button } from '../ui/button'
import {
  ActivitySquare,
  Edit,
  LogOut,
  MoreHorizontal,
  PoundSterlingIcon,
  Trash,
  BotOff,
  Option,
  BotIcon,
  CheckCheck,
  ChevronUpCircleIcon,
  XIcon,
  Check,
  Power,
} from 'lucide-react'
import {
  DropdownMenuLabel,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '../ui/dropdown-menu'
import { Badge } from '../ui/badge'
import { useAsideStore } from '@/context/AsideContext'
import { useStore } from '@/context/AdminContext'

export default function MemberDropDown({ member }) {
  const { setAside } = useAsideStore()
  const { setSelectedBarber } = useStore()

  const handleEditMember = () => {
    setAside('editMembers')
    setSelectedBarber(member)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal className="mr-2 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuLabel>
          <div className="flex flex-col ">
            <p className="">{member.name}</p>
            <p className="text-primary/50 text-xs">{member.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setAside('deleteMember')}>
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleEditMember}>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Power className="mr-2 h-4 w-4" />
              <span>Status</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Badge variant="outline">
                    <Check className="mr-2 h-4 w-4" />
                    active
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge variant="default">
                    <XIcon className="mr-2 h-4 w-4" />
                    inactive
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}