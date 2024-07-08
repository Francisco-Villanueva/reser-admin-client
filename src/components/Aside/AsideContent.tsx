import React from 'react'
import { AsideTypes } from '@/types'
import MemberAside from './MemberAside'
import NewBarberForm from './NewBarberForm'
import DeleteMemberAside from './DeleteMemberAside'

interface AsideContentProps {
  type: AsideTypes
}
export default function AsideContent({ type }: AsideContentProps) {
  switch (type) {
    case 'deleteMember':
      return <DeleteMemberAside />
    case 'newBarber':
      return <NewBarberForm />
    case 'editMembers':
      return <MemberAside />
  }
}
