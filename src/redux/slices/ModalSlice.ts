import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IState {
    isOpen: boolean,
    phone: string,
    fullname: string,
    email: string,
    comment: string
}


const initialState = {
    isOpen: false,
    phone: '',
    fullname: '',
    email: '',
    comment: ''
} as IState

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<IState>) => {
            state.isOpen = true
            state.phone = action.payload.phone
            state.fullname = action.payload.fullname
            state.email = action.payload.email
            state.comment = action.payload.comment
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    },
})

export const { openModal, closeModal } = modal.actions


export default modal.reducer