import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { closeModal, openModal } from '@/redux/slices/ModalSlice';
import { useSendCodeMutation } from '@/redux/api/sendCode';
import { useForm } from 'react-hook-form';

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

export default function ModalWindow() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const departmentID = useAppSelector(state => state.cartSlice.department.id)
    const open = useAppSelector(state => state.ModalSlice)
    const dispatch = useAppDispatch()

    // const { data, isLoading, isError, isSuccess, isFetching, refetch } = useSendCodeQuery({ phone: open.phone, name: open.name, departmentID: departmentID })

    const handleClose = () => dispatch(closeModal());

    return (
        <Modal
            open={open.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: "blur(10px)" }}
        >
            <Box sx={style}>
                <form style={
                    {
                        display: 'flex',
                        flexDirection:'column'
                    }
                }>
                    <label>
                        Введите код, отправленный на {open.phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1($2)$3-$4-$5')}
                    </label>
                    <input>
                    </input>
                </form>
            </Box>
        </Modal >
    );
}