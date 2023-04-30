import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const getServices = createApi({
  reducerPath: 'getServices',
  baseQuery: fetchBaseQuery({ baseUrl: '/'}),
  endpoints: (builder) => ({
    getServices: builder.query<any, string>({
      query: () => `api/getServices`
    }),
  }),
})


export const { useGetServicesQuery } = getServices