import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const getBarber = createApi({
  reducerPath: 'getBarber',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getBarber: builder.query<any, number[]>({
      query: (services) => `api/getBarber?services=${services}`
    }),
  }),
})


export const { useGetBarberQuery } = getBarber