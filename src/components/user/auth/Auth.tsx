import s from './auth.module.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { closeModal, openModal } from '@/redux/slices/UserModalSlice';
import { useSendCodeMutation } from '@/redux/api/sendCode';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import { SetStateAction, useEffect, useState } from 'react';
import { useUserAuthMutation } from '@/redux/api/UserAuth';
import LoadingPage from '@/components/loading/LoadingPage';
import { UserStages, setUserStage } from '@/redux/slices/UserSlice';
import { error } from 'console';
// import Get_code from './getCode/Get_code';


export interface IAuth {
    status: boolean,
    phone: string
}

interface GetPhone {
    phone: string,
}

interface GetCode {
    code: string
}


interface resp {
    data: {
        "0": string
        id: number
        user_token: string
        name: string
        phone: string
        login: string
        email: string
        avatar: string

    }

}

const Get_code = ({ phone }: GetPhone) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GetCode>();
    const dispatch = useAppDispatch()

    const [userAuth, { isLoading, isSuccess, isError, status }] = useUserAuthMutation()

    const onSubmit = async (data: GetCode) => {
        if (phone && data) {
            await userAuth({
                phone: phone.replace(/[+()-\s]+/g, ""),
                code: data.code
            }).unwrap()
                .then((res: resp) => {
                    console.log('fulfilled', res)
                    localStorage.setItem('user_token', res.data.user_token)
                    dispatch(setUserStage({ stage: UserStages.MainPage, userToken: res.data.user_token }))
                })
                .catch(error => {
                    console.log('произошла ошибка');
                })

        }
    }


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }
                className={s.form}>
                <div>
                    <label>
                        Введите код, отправленный на ваш номер телефона
                    </label>
                    <input {...register("code")} className={isError ? s.error : s.input}>
                    </input>
                </div>

                <button type='submit' className={s.button}>Отправить</button>
            </form>
        </>

    )
}




const Auth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GetPhone>();

    const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

    const departmentID = useAppSelector(state => state.cartSlice.department.id)
    const [sendCode, { isLoading, isSuccess, isUninitialized }] = useSendCodeMutation()

    const [phone, setPhone] = useState<string>('')

    console.log('render');


    const onSubmit = async (data: GetPhone) => {
        console.log(data);
        setPhone(data.phone)

        const payload = await sendCode(
            {
                phone: data.phone.replace(/[+()-\s]+/g, ""),
                departmentID: departmentID
            })
        console.log('fulfilled', payload)
    };




    const dispatch = useAppDispatch()
    return (
        <>
            <h2 className={s.h2}>
                Вход в личный кабинет
            </h2>
            {
                isUninitialized ?
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={
                            {
                                display: 'flex',
                                flexDirection: 'column'
                            }
                        }
                        className={s.form}>
                        <div>
                            <label>
                                Введите номер телефона
                            </label>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                maskChar="_" type="text"
                                required
                                {...register("phone", {
                                    pattern: phoneRegExp
                                })}
                                className={errors.phone && s.error}
                                onEnded={(e) => e.currentTarget.classList.remove(s.error)}
                            />
                        </div>
                        <button type='submit' className={s.button}>Отправить</button>
                    </form>
                    : isSuccess && <Get_code phone={phone} />
            }
            {isLoading && <LoadingPage />}
        </>

    );
}

export default Auth;