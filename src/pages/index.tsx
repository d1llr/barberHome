
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useGetStaffQuery } from '@/redux/api/barberApi'
import Intro from '@/components/intro/Intro'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import CompanyChoise from '@/components/companyChoice/CompanyChoise'
import ServiceRegistration from '@/components/serviceRegistration/ServiceRegistration'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.stageSlice.stage)
  console.log(state);
  switch (state) {
    case 0:
      return (
        <Intro />
      )
      break;
    case 1:
      return (
        <CompanyChoise />
      )
      break;
    case 2:
      return (
        <ServiceRegistration/>
      )
      break
  }

}

