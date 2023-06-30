import UserModalSlice, { UserModal } from './slices/UserModalSlice';
import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { getBarber } from './api/getBarber'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper';
import StageSlice from './slices/StageSlice';
import { getCompany } from './api/getCompanyApi';
import { getServices } from './api/getServicesApi';
import CartSlice from './slices/CartSlice';
import orderStageSlice from './slices/orderStageSlice';
import { getDates } from './api/getDates';
import { getTimes } from './api/getTimes';
import { getTime } from 'date-fns';
import ModalSlice from './slices/ModalSlice';
import { sendCode } from './api/sendCode';
import UserSlice from './slices/UserSlice';
import { UserAuth } from './api/UserAuth';
import { getUserRecords } from './api/getUserRecords';
import { createNewRecord } from './api/createNewRecord';
import { deleteUserRecord } from './api/deleteUserRecord';



const makeStore = () =>
  configureStore({
    reducer: {
      [getBarber.reducerPath]: getBarber.reducer,
      [getCompany.reducerPath]: getCompany.reducer,
      [getServices.reducerPath]: getServices.reducer,
      [getDates.reducerPath]: getDates.reducer,
      [getTimes.reducerPath]: getTimes.reducer,
      [sendCode.reducerPath]: sendCode.reducer,
      [UserAuth.reducerPath]: UserAuth.reducer,
      [getUserRecords.reducerPath]: getUserRecords.reducer,
      [createNewRecord.reducerPath]: createNewRecord.reducer,
      [deleteUserRecord.reducerPath]: deleteUserRecord.reducer,
      stageSlice: StageSlice,
      cartSlice: CartSlice,
      ModalSlice: ModalSlice,
      orderStageSlice: orderStageSlice,
      UserModal: UserModalSlice,
      UserSlice: UserSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        getBarber.middleware,
        getCompany.middleware,
        getServices.middleware,
        getDates.middleware,
        getTimes.middleware,
        sendCode.middleware,
        UserAuth.middleware,
        getUserRecords.middleware,
        createNewRecord.middleware,
        deleteUserRecord.middleware
      ),
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