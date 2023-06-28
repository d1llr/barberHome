import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IState {
    isOpen: boolean,
    phone: string,
    name: string
}


const initialState = {
    isOpen: false,
    phone: '',
    name: ''
} as IState

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<IState>) => {
            state.isOpen = true
            state.phone = action.payload.phone
            state.name = action.payload.name
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    },
})

export const { openModal, closeModal } = modal.actions


export default modal.reducer