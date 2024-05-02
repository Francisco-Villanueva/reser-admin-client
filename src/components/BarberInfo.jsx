import FloatingLoader from '@/commons/FloatingLoader'
import { InputWithLabel } from '@/commons/InputWithLabel'
import { useStore } from '@/context/AdminContext'
import useInput from '@/hooks/useInput'
import { ApiServices } from '@/services/workhours.services'
import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'

export default function BarberInfo({ closeModal }) {
  const { selectedBarber, setBarbers } = useStore()
  const name = useInput(selectedBarber.name, null)
  const lastName = useInput(selectedBarber.lastName, null)
  const userName = useInput(selectedBarber.userName, 'required')
  const email = useInput(selectedBarber.email, 'email')
  const password = useInput('', 'password')
  const [newStatus, setNewStatus] = useState(selectedBarber.status)
  const [loading, setLoading] = useState(false)

  const [disableButton, setDisableButton] = useState(true)
  useEffect(() => {
    const isChange = () => {
      const emailChange = selectedBarber.email !== email.value
      const nameChange = selectedBarber.name !== name.value
      const lastNameChange = selectedBarber.lastName !== lastName.value
      const userNameChange = selectedBarber.userName !== userName.value
      const passwordChange = password.value !== ''
      const statutusChange = selectedBarber.status !== newStatus

      return (
        emailChange ||
        passwordChange ||
        nameChange ||
        lastNameChange ||
        userNameChange ||
        statutusChange
      )
    }

    setDisableButton(isChange)
  }, [
    name.value,
    email.value,
    lastName.value,
    userName.value,
    password.value,
    newStatus,
  ])
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const dataToUpdate =
      password.value !== ''
        ? {
            name: name.value,
            lastName: lastName.value,
            email: email.value,
            userName: userName.value,
            password: password.value,
            status: newStatus,
          }
        : {
            name: name.value,
            lastName: lastName.value,
            email: email.value,
            userName: userName.value,
            status: newStatus,
          }
    ApiServices.updateBarberData(selectedBarber.id, dataToUpdate)
      .then(() => {
        ApiServices.getAllBarbers().then((res) => {
          setBarbers(res.data)
          message.success('Cambios realizados')
          closeModal()
        })
      })
      .catch(() => {
        message.error('Error actulizando datos del peluquero')
      })
      .finally(() => setLoading(false))
  }

  const handleBarberStatus = () => {
    if (newStatus === 'active') {
      setNewStatus('inactive')
    } else {
      setNewStatus('active')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2">
          <InputWithLabel
            defaultValue={selectedBarber.name}
            label={'Nombre'}
            {...name}
          />
          <InputWithLabel
            defaultValue={selectedBarber.lastName}
            label={'Apellido'}
            {...lastName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <InputWithLabel
            defaultValue={selectedBarber.userName}
            label={'Nombre de usuario'}
            {...userName}
          />
          <InputWithLabel
            defaultValue={selectedBarber.email}
            label={'Email'}
            {...email}
          />
          <InputWithLabel type={'password'} label={'Password'} {...password} />
        </div>

        <Tabs defaultValue="active" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="active" onClick={handleBarberStatus}>
              Active
            </TabsTrigger>
            <TabsTrigger value="inactive" onClick={handleBarberStatus}>
              inactive
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Button type="submit" variant="default" disabled={!disableButton}>
        Actualizar
      </Button>
      {loading && <FloatingLoader />}
    </form>
  )
}
