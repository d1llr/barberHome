import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export interface IUserAuth {
    phone: string,
    code: string,
}


// Define a service using a base URL and expected endpoints
export const UserAuth = createApi({
    reducerPath: 'UserAuth',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        userAuth: builder.mutation<any, IUserAuth>({
            query: ({ phone, code }) => `api/userAuth?phone=${phone}&code=${code}`
        }),
    }),
})


export const { useUserAuthMutation } = UserAuth