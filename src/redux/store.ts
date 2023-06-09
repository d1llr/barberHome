


import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { getBarber} from './api/getBarber'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper';
import StageSlice from './slices/StageSlice';
import { getCompany } from './api/getCompanyApi';
import { getServices } from './api/getServicesApi';
import CartSlice from './slices/CartSlice';
import orderStageSlice from './slices/orderStageSlice';
import { getDates } from './api/getDates';



const makeStore = () =>
  configureStore({
    reducer: {
      [getBarber.reducerPath]: getBarber.reducer,
      [getCompany.reducerPath]: getCompany.reducer,
      [getServices.reducerPath]: getServices.reducer,
      [getDates.reducerPath]: getDates.reducer,
      stageSlice: StageSlice,
      cartSlice: CartSlice,
      orderStageSlice: orderStageSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getBarber.middleware, getCompany.middleware, getServices.middleware, getDates.middleware),
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