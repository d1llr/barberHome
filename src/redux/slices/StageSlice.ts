import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface StageState {
  stage: number
}

const initialState = {
  stage: 0
} as StageState

const StageSlice = createSlice({
  name: 'StageSlice',
  initialState,
  reducers: {
    nextStage(state, action: PayloadAction<number>) {
      state.stage += action.payload
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

export const { nextStage, prevStage } = StageSlice.actions
export default StageSlice.reducer