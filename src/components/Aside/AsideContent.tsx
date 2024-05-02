import React from 'react'
import { AsideTypes } from '@/types'
import MemberAside from '../SheetAside/MemberAside'

interface AsideContentProps {
  type: AsideTypes
}
export default function AsideContent({ type }: AsideContentProps) {
  switch (type) {
    case 'deleteMember':
      return <h2>Delete Members</h2>
    case 'editMembers':
      return <MemberAside />
  }
}
