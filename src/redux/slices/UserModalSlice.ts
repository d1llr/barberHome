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

export const UserModal = createSlice({
    name: 'UserModal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    },
})

export const { openModal, closeModal } = UserModal.actions


export default UserModal.reducer