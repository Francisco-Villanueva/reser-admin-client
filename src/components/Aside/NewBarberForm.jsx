import FloatingLoader from '@/commons/FloatingLoader'
import { InputWithLabel } from '@/commons/InputWithLabel'
import { useStore } from '@/context/AdminContext'
import useInput from '@/hooks/useInput'
import { ApiServices, AuthServices } from '@/services'
import { message } from 'antd'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { useAsideStore } from '@/context/AsideContext'
import AsideBackground from './AsideBackground'

export default function NewBarberForm() {
  const { setBarbers } = useStore()
  const { setAside } = useAsideStore()
  const [loading, setLoading] = useState(false)
  const { theme } = useTheme()
  const name = useInput('', 'required')
  const lastName = useInput('', 'required')
  const userName = useInput('', 'required')
  const email = useInput('', 'email')
  const password = useInput('', 'required')
  const confirmPassword = useInput('', 'required')

  const validationToSubmit =
    name.value === '' ||
    lastName.value === '' ||
    email.value === '' ||
    password.value === '' ||
    userName.value === '' ||
    lastName.value === '' ||
    confirmPassword.value !== password.value
  const handleSumbitChanges = () => {
    const data = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      userName: userName.value,
      password: password.value,
    }
    setLoading(true)

    AuthServices.register(data)
      .then(() => {
        message.success(`Peluquero Agregado!`)
        ApiServices.getAllBarbers().then((res) => {
          setBarbers(res.data)
          setLoading(false)
          setAside(undefined)
        })
      })
      .catch(() => {
        message.error('Error al crear un nuevo peluquero!')
        setLoading(false)
      })
  }
  return (
    <div className="flex flex-col h-full w-full    ">
      <AsideBackground />
      <h2 className="text-lg uppercase">Formulario de ingreso</h2>
      <section className="flex flex-col flex-grow    justify-between">
        <div className="h-full ">
          <div className="flex flex-col  gap-3  p-4  max-sm:text-sm    ">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold border-b-2 ">Datos del peluquero</h2>

              <div className="flex flex-col gap-1 px-4">
                <div className="flex  gap-2  ">
                  <InputWithLabel
                    label={'Nombre'}
                    {...name}
                    placeholder={'Ingresar nombre'}
                  />
                  <InputWithLabel
                    label={'Apellido'}
                    {...lastName}
                    placeholder={'Ingresar apellido'}
                  />
                </div>
                <InputWithLabel
                  label={'Email'}
                  {...email}
                  placeholder={'Ingresar Email'}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold border-b-2 ">
                Información de usuario
              </h2>
              <div className="flex flex-col gap-1 px-4">
                <InputWithLabel
                  label={'Nombre de Usuario'}
                  {...userName}
                  placeholder={'Ingresar Nombre de Usuario'}
                />
                <InputWithLabel
                  label={'Contraseña'}
                  {...password}
                  type={'password'}
                  placeholder={'Ingresar contraseña'}
                />
                <InputWithLabel
                  label={'Confitmar Contraseña'}
                  {...confirmPassword}
                  type={'password'}
                  placeholder={'Confirmar contraseña'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full  ">
          <Button
            onClick={handleSumbitChanges}
            className="w-full"
            disabled={validationToSubmit}
          >
            Cargar
          </Button>
        </div>
      </section>
      {loading && <FloatingLoader />}
    </div>
  )
}
