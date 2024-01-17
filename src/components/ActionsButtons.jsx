'use client'

import Button from '@/commons/Button'
import { PenIcon, TrashIcon } from '@/commons/Icons'
import useModal from '@/hooks/useModal'
import DeleteForm from './DeleteForm'

export default function ActionsButtons({ barber, handleSelectBarber }) {
  const deleteModal = useModal()
  return (
    <div
      className={`flex gap-2 ${barber.status === 'inactive' && 'text-grey'}`}
    >
      <Button onClick={handleSelectBarber}>
        <PenIcon className={'w-[1rem] h-[1rem]'} />
      </Button>
      <Button onClick={() => deleteModal.openModal()}>
        <TrashIcon className={'w-[1rem] h-[1rem] hover:text-error'} />
      </Button>

      {deleteModal.isModalOpen && (
        <DeleteForm closeModal={deleteModal.closeModal} barber={barber} />
      )}
    </div>
  )
}
