import { useState } from 'react';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    services: Array<number>,
    barber: number,
    date: string,
    dateTime: string,
    result: Array<string>
}

const initialState = {
    services: [],
    barber: 0,
    date: '',
    dateTime: '',
    result: ['']
} as CartState

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
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
        RemoveAllService(state) {
            state.services = []
            if (state.services.length == 0) {
                state.barber = 0
                state.date = ''
                state.dateTime = ''
            }
        },
        PullBarber(state, action: PayloadAction<number>) {
            state.barber = action.payload
        },
        RemoveBarber(state) {
            state.barber = 0
        },

        setDates(state, action: PayloadAction<string>) {
            state.date = action.payload
        },

        removeDates(state) {
            state.date = ''
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
    RemoveAllService,
    setDates,
    removeDates,
    setDateTime,
    removeDateTime
} = cartSlice.actions

export default cartSlice.reducer