import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface Ireq{
  barber: number,
  departmentID: number
}

// Define a service using a base URL and expected endpoints
export const getDates = createApi({
  reducerPath: 'getDates',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getDates: builder.query<any, Ireq>({
      query: ({barber,departmentID}) => `api/getDates?staff_id=${barber}&departmentID=${departmentID}`
    }),
  }),
})


export const { useGetDatesQuery } = getDates