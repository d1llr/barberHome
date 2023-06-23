import { useState } from 'react';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { categoryType } from '@/components/serviceRegistration/services/Service';

interface Idepartment {
    id: number,
    address: string
}

interface IService {
    id: number,
    name: string,
    price: number
}

interface IBarber {
    id: number,
    name: string
}

export interface CartState {
    department: Idepartment,
    services: Array<IService>,
    categoryType: categoryType,
    barber: IBarber,
    date: string,
    dateTime: string
}



const initialState = {
    department: {
        id: 0,
        address: ''
    },
    services: [
        {
            id: 0,
            name: '',
            price: 0
        }
    ],
    categoryType: categoryType.services,
    barber: {
        id: 0,
        name: ''
    },
    date: '',
    dateTime: '',
} as CartState

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setDepartment(state, action: PayloadAction<Idepartment>) {
            state.department.id = action.payload.id
            state.department.address = action.payload.address


            //обнуление всех категорий
            state.barber = {
                id: 0,
                name: ''
            }
            state.categoryType = categoryType.services
            state.date = ''
            state.dateTime = ''
            state.services = []
        },
        PullService(state, action: PayloadAction<IService>) {
            state.services.push(action.payload)
            state.barber = {
                id: 0,
                name: ''
            }
            state.date = ''
            state.dateTime = ''
        },
        RemoveService(state, action: PayloadAction<IService>) {
            state.services = state.services.filter(item => item.id != action.payload.id)
            state.barber = {
                id: 0,
                name: ''
            }
            state.date = ''
            state.dateTime = ''
        },

        setCurrentCategory(state, action: PayloadAction<categoryType>) {
            state.categoryType = action.payload
        },
        RemoveAllService(state) {
            state.services = []
            if (state.services.length == 0) {
                state.barber = {
                    id: 0,
                    name: ''
                }
                state.date = ''
                state.dateTime = ''
            }
        },
        PullBarber(state, action: PayloadAction<IBarber>) {
            state.date = ''
            state.dateTime = ''
            state.barber = action.payload
        },
        RemoveBarber(state) {
            state.barber = {
                id: 0,
                name: ''
            }
            state.date = ''
            state.dateTime = ''
        },

        setDates(state, action: PayloadAction<string>) {
            state.date = action.payload
        },

        setDateTime(state, action: PayloadAction<string>) {
            state.dateTime = action.payload
        },

        removeDateTime(state) {
            state.dateTime = ''
        },
        // decrement(state) {
        //     action.payload ? 
        //     state.stage += action.payload
        //     :
        //     state.stage += 1
        // },
        // incrementByAmount(state, action: PayloadAction<number>) {
        //   state.stage += action.payload
        // },
    },
    extraReducers: builder => {
        builder.addCase(RemoveService, state => {
            if (state.services.length == 0) {
                console.log('-barber');
                state.dateTime = ''
                state.barber = {
                    id: 0,
                    name: ''
                }
                state.date = ''
            }
        })
    }
})

export const {
    PullService,
    RemoveService,
    PullBarber,
    RemoveBarber,
    setCurrentCategory,
    RemoveAllService,
    setDates,
    setDateTime,
    removeDateTime,
    setDepartment
} = cartSlice.actions

export default cartSlice.reducer