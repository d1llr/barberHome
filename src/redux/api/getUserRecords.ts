import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export interface IUserRecords {
    user_token: string | null,
}


// Define a service using a base URL and expected endpoints
export const getUserRecords = createApi({
    reducerPath: 'getUserRecords',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getUserRecords: builder.query<any, IUserRecords>({
            query: ({ user_token }) => `api/getUserRecords?user_token=${user_token}`
        }),
    }),
})


export const { useGetUserRecordsQuery } = getUserRecords