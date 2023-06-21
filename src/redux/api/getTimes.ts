import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export interface TimesApi {
    barber:number,
    date: string,
    departmentID?: number
}


// Define a service using a base URL and expected endpoints
export const getTimes = createApi({
  reducerPath: 'getTimes',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getTimes: builder.query<any, TimesApi>({
      query: ({barber,date,departmentID}) => `api/getTimes?staff_id=${barber}&date=${date}&departmentID=${departmentID}`
    }),
  }),
})


export const { useGetTimesQuery } = getTimes