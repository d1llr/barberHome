
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartState, PullService } from './CartSlice'
import { useAppSelector } from '../store'

interface StageState {
  stage: number
}

const initialState = {
  stage: 1
} as StageState


interface ActionP {
  stage: number,
  examination: CartState
}


const orderStageSlice = createSlice({
  name: 'orderStageSlice',
  initialState,
  reducers: {
    setStage(state, action: PayloadAction<number>) {
      state.stage = action.payload
    },
    nextStage(state) {
      state.stage++
    },
    prevStage(state) {
      state.stage--
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

export const { setStage, nextStage, prevStage } = orderStageSlice.actions
export default orderStageSlice.reducer