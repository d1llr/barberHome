import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export enum UserStages {
    Auth, MainPage
}

interface CounterState {
    stage: UserStages,
    userToken: string | null
}

const initialState = {
    stage: UserStages.Auth,
    userToken: null
} as CounterState

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        setUserStage(state, action: PayloadAction<CounterState>) {
            state.stage = action.payload.stage
            state.userToken = action.payload.userToken
        },
    },
})

export const { setUserStage } = UserSlice.actions
export default UserSlice.reducer