
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useGetStaffQuery } from '@/redux/api/barberApi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const data = useGetStaffQuery('true')
  console.log(data);
  
  return (
    <>
      <main >

      </main>
    </>
  )
}


export async function getServerSideProps() {

  console.log(process.env.COMPANY_ID)
  return {
    props:{}
  }
}
