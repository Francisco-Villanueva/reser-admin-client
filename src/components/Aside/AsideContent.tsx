import React from 'react'
import { AsideTypes } from '@/types'
import MemberAside from './MemberAside'
import NewBarberForm from './NewBarberForm'

interface AsideContentProps {
  type: AsideTypes
}
export default function AsideContent({ type }: AsideContentProps) {
  switch (type) {
    case 'deleteMember':
      return <h2>Delete Members</h2>
    case 'newBarber':
      return <NewBarberForm />
    case 'editMembers':
      return <MemberAside />
  }
}
