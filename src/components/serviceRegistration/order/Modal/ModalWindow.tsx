import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { closeModal, openModal } from '@/redux/slices/ModalSlice';
import { useSendCodeMutation } from '@/redux/api/sendCode';
import { useForm } from 'react-hook-form';
import s from './styles.module.scss'
import { useCreateNewRecordMutation } from '@/redux/api/createNewRecord';
import LoadingPage from '@/components/loading/LoadingPage';




const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(32, 32, 32)',
    borderRadius: '20px',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    p: 4,
};

interface Value {
    code: string
}

export default function ModalWindow() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Value>();


    const cart = useAppSelector(state => state.cartSlice)
    const open = useAppSelector(state => state.ModalSlice)
    const dispatch = useAppDispatch()

    const [createRecord, { isLoading, isSuccess, isUninitialized, isError }] = useCreateNewRecordMutation()

    const handleClose = () => dispatch(closeModal());

    const onSubmit = async (data: Value) => {
        const payload = await createRecord(
            {
                phone: open.phone,
                fullname: open.fullname,
                email: open.email,
                comment: open.comment,
                departmentID: cart.department.id,
                code: data.code,
                notify_by_sms: 6,
                appointments: [
                    {
                        id: 1,
                        services: cart.services.map(item => item.id),
                        staff_id: cart.barber.id,
                        datetime: cart.dateTime
                    }
                ]
            })
        console.log('fulfilled', payload)
    }
    return (
        <Modal
            open={open.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: "blur(10px)" }}
        >
            <Box sx={style}>
                {
                    isLoading ? <LoadingPage /> : !isSuccess &&
                        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label>
                                    Введите код, отправленный на {open.phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1($2)$3-$4-$5')}
                                </label>
                                <input {...register("code")} className={isError ? s.error : s.input}>
                                </input>
                            </div>
                            <button type='submit' className={s.button}>Подтвердить</button>
                        </form>
                }
                {isSuccess && <div className={s.success_container}>
                    Запись успешно создана!
                </div>}
            </Box>
        </Modal >
    );
}