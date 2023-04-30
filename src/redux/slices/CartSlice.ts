import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartState {
    services: Array<number>,
    barber: string
}

const initialState = {
    services: [],
    barber: ''
} as CartState

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        PullService(state, action: PayloadAction<number>) {
            state.services.push(action.payload)
        },
        RemoveService(state, action: PayloadAction<number>) {
            state.services = state.services.filter(item=>item != action.payload)
        }
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
})

export const { PullService,RemoveService } = cartSlice.actions
export default cartSlice.reducer