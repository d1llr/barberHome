import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useAppSelector } from '../store'


interface Ireq {
  services: number[],
  departmentID: number
}

// Define a service using a base URL and expected endpoints
export const getBarber = createApi({
  reducerPath: 'getBarber',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getBarber: builder.query<any, Ireq>({
      query: ({ services, departmentID }) => `api/getBarber?services=${services}&departmentID=${departmentID}`
    }),
  }),
})


export const { useGetBarberQuery } = getBarber