import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'

export interface INewRecord {
    phone: string
    fullname: string
    email: string
    code: string
    comment: string
    notify_by_sms: number
    appointments: Appointment[],
    departmentID: number
}

export interface Appointment {
    id: number
    services: number[]
    staff_id: number
    datetime: string
}

export interface CustomFields {
    my_custom_field: number
    some_another_field: string[]
}


  
  export interface Data {
    success: boolean
    data: Daum[]
    meta: any[]
  }
  
  export interface Daum {
    id: number
    record_id: number
    record_hash: string
    user_token: string
  }

// Define a service using a base URL and expected endpoints
export const createNewRecord = createApi({
    reducerPath: 'createNewRecord',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        createNewRecord: builder.mutation<Data, Partial<INewRecord>>({
            query: (data) => ({
                url: `api/createNewRecord`,
                method: 'POST',
                body: data
            })
        }),
    }),
})


export const { useCreateNewRecordMutation } = createNewRecord