'use client'
import React, { useEffect, useState } from 'react'
import { useStore } from '@/context/AdminContext'
import Selecthours from '@/components/Selecthours'
import SelectDay from './SelectDay'
import { ApiServices } from '@/services/workhours.services'
import { message } from 'antd'
import BarberInfo from './BarberInfo'
import FloatingLoader from '@/commons/FloatingLoader'
import useModal from '@/hooks/useModal'
import Button from '@/commons/Button'
import { ArrowRight } from '@/commons/Icons'
import UserInfo from './UserInfo'
import HoursInfo from './HoursInfo'

export default function BarberDetails({ closeModal }) {
  return (
    <div className="flex flex-col gap-4 relative max-md:text-xs ">
      <UserInfo closeModal={closeModal} />
      <HoursInfo closeModal={closeModal} />
    </div>
  )
}
