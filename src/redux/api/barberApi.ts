import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




// Define a service using a base URL and expected endpoints
const token = 'ctxn2pt2jwz2ushknuds'
export const barberApi = createApi({
  reducerPath: 'barberApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yclients.com/api/v1', 
  prepareHeaders: (headers) => {
    // headers.set("Content-Type", "text/plain; charset=UTF-8");
    headers.set('Accept', 'application/vnd.yclients.v2+json'),
    headers.set('Authorization', `Bearer ${token}`),
    console.log(headers);
    return headers;
  }, }),
  endpoints: (builder) => ({
    getStaff: builder.query<any, string>({
      query: () => `book_services/256926`
    }),
  }),
})


export const { useGetStaffQuery } = barberApi