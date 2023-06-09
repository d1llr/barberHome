import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const getDates = createApi({
  reducerPath: 'getDates',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getDates: builder.query<any, number>({
      query: (barber) => `api/getDates?staff_id=${barber}`
    }),
  }),
})


export const { useGetDatesQuery } = getDates