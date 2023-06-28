import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export interface ICodeApi {
  phone: string,
  name?: string,
  departmentID?: number
}


// Define a service using a base URL and expected endpoints
export const sendCode = createApi({
  reducerPath: 'sendCode',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    sendCode: builder.mutation<any, ICodeApi>({
      query: ({ phone, name, departmentID }) => name ?
        `api/sendCode?phone=${phone}&name=${name}&departmentID=${departmentID}`
        :
        `api/sendCode?phone=${phone}&departmentID=${departmentID}`
    })
  }),
})


export const { useSendCodeMutation } = sendCode