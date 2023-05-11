import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartState {
    services: Array<number>,
    barber: number,
    date:string,
    result:Array<string>
}

const initialState = {
    services: [],
    barber: 0,
    date:'',
    result:['']
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
        },
        RemoveAllService(state){
            state.services = []
        },
        PullBarber(state, action: PayloadAction<number>) {
            state.barber = action.payload
        },
        RemoveBarber(state) {
            state.barber = 0
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
})

export const { PullService,RemoveService, PullBarber, RemoveBarber,RemoveAllService } = cartSlice.actions
export default cartSlice.reducer