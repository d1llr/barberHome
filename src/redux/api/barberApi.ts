import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
const token = 'ctxn2pt2jwz2ushknuds'
export const barberApi = createApi({
  reducerPath: 'barberApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getStaff: builder.query<any, string>({
      query: () => `api/getStaffApi`
    }),
  }),
})


export const { useGetStaffQuery } = barberApi