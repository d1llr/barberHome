import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
export const barberApi = createApi({
  reducerPath: 'barberApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yclients.com/api/v1' }),
  endpoints: (builder) => ({
    getStaff: builder.query<any, string>({
      query: () => `company/${process.env.COMPANY_ID}/services/{service_id}`,
    }),
  }),
})


export const { useGetStaffQuery } = barberApi