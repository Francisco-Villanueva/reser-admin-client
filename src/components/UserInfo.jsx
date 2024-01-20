import Button from '@/commons/Button'
import { ArrowRight } from '@/commons/Icons'
import useModal from '@/hooks/useModal'
import React from 'react'
import BarberInfo from './BarberInfo'
import LayoutAsideItem from '@/commons/LayoutAsideItem'

export default function UserInfo({ closeModal }) {
  const accesInfo = useModal()
  return (
    <div className="flex flex-col   ">
      <LayoutAsideItem>
        <h2 className="text-black">Informacion de acceso</h2>
        <Button onClick={accesInfo.toggleModal}>
          <ArrowRight
            className={`w-[12px] transition-all duration-200 ${!accesInfo.isModalOpen ? 'rotate-[90deg]' : 'rotate-[-90deg]'}`}
          />{' '}
        </Button>
      </LayoutAsideItem>
      {accesInfo.isModalOpen && <BarberInfo closeModal={closeModal} />}
    </div>
  )
}
