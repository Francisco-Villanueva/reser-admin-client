'use client'
import Button from '@/commons/Button'
import FloatingLoader from '@/commons/FloatingLoader'
import Input from '@/commons/Input'
import { useStore } from '@/context/AdminContext'
import useInput from '@/hooks/useInput'
import { AuthServices } from '@/services'
import { message } from 'antd'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function LoginForm() {
  const { setCurrentUser } = useStore()
  const userName = useInput('', 'required')
  const password = useInput('', 'required')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault()
    const data = { userName: userName.value, password: password.value }
    setLoading(true)
    AuthServices.login(data)
      .then((res) => {
        const user = res.data.user
        if (user.status === 'inactive') {
          setLoading(false)
          message.warning('El usuario ingresado se encuentra deshabilitado.')
          return
        }
        localStorage.setItem('userId', user.id)
        setCurrentUser(user)
        message.success('Logged Succesfully!')
        if (user.isAdmin) {
          router.push('/home/admin')
        } else {
          setSelectedBarber(user)
          router.push('/home/barber')
        }
        setLoading(false)
      })
      .catch((error) => {
        message.error('Error at Login')
        console.log(error)
        setLoading(false)
      })
  }
  return (
    <form
      onSubmit={handleLogin}
      className=" flex flex-col gap-8   justify-center  w-[60%] h-[30%]    rounded-md max-sm:w-[90%] p-4   "
    >
      <div className="flex flex-col gap-4 text-md">
        <Input
          {...userName}
          type={'text'}
          title={'Username'}
          titleColor="text-dark-grey text-md"
        />
        <Input
          {...password}
          type={'password'}
          title={'Password'}
          titleColor="text-dark-grey text-md"
        />
      </div>

      <div className="flex flex-col items-center w-5/6 m-auto gap-1">
        <Button
          type="submit"
          className="font-normal  bg-black text-white w-5/6 p-2 rounded-sm"
        >
          Login
        </Button>
      </div>
      {loading && <FloatingLoader />}
    </form>
  )
}
