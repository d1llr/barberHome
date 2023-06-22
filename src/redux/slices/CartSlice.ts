import { useState } from 'react';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { categoryType } from '@/components/serviceRegistration/services/Service';

interface Idepartment {
    id: number,
    address: string
}

export interface CartState {
    department:Idepartment,
    services: Array<number>,
    categoryType:categoryType,
    barber: number,
    date: string,
    dateTime: string
}



const initialState = {
    department:{
        id: 0,
        address: ''
    },
    services: [],
    categoryType: categoryType.services,
    barber: 0,
    date: '',
    dateTime: '',
} as CartState

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setDepartment(state, action: PayloadAction<Idepartment>){
            state.department.id = action.payload.id
            state.department.address = action.payload.address


            //обнуление всех категорий
            state.barber = 0
            state.categoryType = categoryType.services
            state.date = ''
            state.dateTime = ''
            state.services = []
        },
        PullService(state, action: PayloadAction<number>) {
            state.services.push(action.payload)
        },
        RemoveService(state, action: PayloadAction<number>) {
            state.services = state.services.filter(item => item != action.payload)
            if (state.services.length == 0) {
                state.barber = 0
                state.date = ''
                state.dateTime = ''
            }
        },

        setCurrentCategory(state, action: PayloadAction<categoryType>){
            state.categoryType = action.payload
        },
        RemoveAllService(state) {
            state.services = []
            if (state.services.length == 0) {
                state.barber = 0
                state.date = ''
                state.dateTime = ''
            }
        },
        PullBarber(state, action: PayloadAction<number>) {
            state.date = ''
            state.dateTime = ''
            state.barber = action.payload
        },
        RemoveBarber(state) {
            state.barber = 0
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
                state.barber = 0
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