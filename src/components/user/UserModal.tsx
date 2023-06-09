import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { closeModal } from '@/redux/slices/UserModalSlice';
import Auth from './auth/Auth';
import { UserStages, setUserStage } from '@/redux/slices/UserSlice';
import User from './mainPage/User';
import { useEffect } from 'react';
import quitImage from '../../../public/img/back.png'
import Image from 'next/image';
import s from './styles.module.scss'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    bgcolor: 'rgb(32, 32, 32)',
    borderRadius: '20px',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 10px 30px 10px'
};


export default function UserModal() {
    const userStage = useAppSelector(state => state.UserSlice.stage)
    const ModalIsOpen = useAppSelector(state => state.UserModal)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            dispatch(setUserStage({ stage: UserStages.MainPage, userToken: localStorage.getItem('user_token') }))
        }
    }, [])

    const handleClose = () => dispatch(closeModal());


    const switcher = (stage: UserStages) => {
        switch (stage) {
            case UserStages.Auth:
                return <Auth />
            case UserStages.MainPage:
                return <User />
        }
    }


    return (
        <Modal
            open={ModalIsOpen.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: "blur(10px)" }}
        >
            <Box sx={style}>
                <span className={s.quit_button} onClick={()=>handleClose()}>
                    <Image src={quitImage} width={15} height={15} alt={'Назад'} />
                </span>
                {switcher(userStage)}
            </Box>
        </Modal >
    );
}