import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const getCompany = createApi({
  reducerPath: 'getCompany',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getCompany: builder.query<any, string>({
      query: () => `api/getCompany`
    }),
  }),
})


export const { useGetCompanyQuery } = getCompany