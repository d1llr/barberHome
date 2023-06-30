import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'

export interface IDeleteRecord {
    record_id: number,
    user_token: string | null
}



// Define a service using a base URL and expected endpoints
export const deleteUserRecord = createApi({
    reducerPath: 'deleteUserRecord',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        deleteUserRecord: builder.mutation<any, Partial<IDeleteRecord>>({
            query: (data) => ({
                url: `api/deleteUserRecord`,
                method: 'POST',
                body: data
            })
        }),
    }),
})

deleteUserRecord
export const { useDeleteUserRecordMutation } = deleteUserRecord