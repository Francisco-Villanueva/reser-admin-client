'use client'
import Button from '@/commons/Button'
import ChildrenLayout from '@/commons/ChildrenLayout'
import { AddIcon } from '@/commons/Icons'
import TitleView from '@/commons/TitleView'
import Aside from '@/components/Aside'
import GridTeam from '@/components/GridTeam'
import NewBarberForm from '@/components/NewBarberForm'
import { useStore } from '@/context/AdminContext'
import useModal from '@/hooks/useModal'


export default function AdminPage() {
  const { barbers } = useStore()
  const { openModal, isModalOpen, closeModal } = useModal()

  return (
    <ChildrenLayout className={`flex flex-col justify-around gap-4 bg-purple h-full`}>
      <section className="w-full flex  justify-between    ">
        <TitleView>Lista de peluqueros</TitleView>
      </section>
      <hr />
      
      <section className="   overflow-y-auto    h-full   ">
        <GridTeam team={barbers} />
      </section>

      <div className="h-10 w-10 absolute bottom-0 right-0   rounded-full ">
        <Button
          variant="primary"
          className={' rounded-full p-1'}
          onClick={openModal}
        >
          <AddIcon />
        </Button>
      </div>

      {isModalOpen && (
        <Aside title="Peluquero  Nuevo" closeModal={closeModal}>
          <NewBarberForm closeModal={closeModal} />
        </Aside>
      )}
    </ChildrenLayout>
  )
}
