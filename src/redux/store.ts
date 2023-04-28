


import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { barberApi } from './api/barberApi'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper';


const makeStore = () =>
  configureStore({
    reducer: {
      [barberApi.reducerPath]: barberApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(barberApi.middleware),
  });

export const store = makeStore()



export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;



export default store;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const wrapper = createWrapper<RootStore>(makeStore);