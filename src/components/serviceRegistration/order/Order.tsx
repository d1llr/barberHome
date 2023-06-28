import { useAppDispatch, useAppSelector } from '@/redux/store';
import s from '../styles.module.scss'
import { format } from 'date-fns';
import { RegisterOptions, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import ruLocale from "date-fns/locale/ru";
import { IService, RemoveServiceFromOrderPage } from '@/redux/slices/CartSlice';
import Modal from 'react-modal'
import { useState } from 'react';
import ModalWindow from './Modal/ModalWindow';
import { openModal } from '@/redux/slices/ModalSlice';



interface FormValues {
  department: string;
  services: number[];
  staff_id: number;
  datetime: string;
  comment: string;
  name: string;
  phone: string;
  email: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();


  const [isOpen, setIsOpen] = useState<boolean>(false)
  const cart = useAppSelector(state => state.cartSlice)
  const dispatch = useAppDispatch()

  const onSubmit = (data: FormValues) => {

    data.department = cart.department.id.toString()
    data.services = cart.services.map(item => item.id)
    data.staff_id = cart.barber.id
    data.datetime = cart.dateTime
    setIsOpen(true)
    dispatch(openModal({ phone: data.phone, name: data.name, isOpen: true }))
    data.phone = data.phone.replace(/[+()-\s]+/g, "");
    console.log(data);
    setIsOpen(true)
    dispatch(openModal({ phone: data.phone, name: data.name, isOpen: true }))
  };

  const codeSubmit = (data: FormValues) => {

  }

  const validateEmail: RegisterOptions = {
    required: true,
    validate: (value) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !!value.match(pattern) || "Неверный формат email";
    },
  };


  const handleClick = (event: IService) => {
    if (event) {
      dispatch(RemoveServiceFromOrderPage(event))
    }
  }


  const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <main className={s.order_container}>
      <h2>Моя запись</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Отделение</label>
          <input type="text" readOnly value={cart.department.address} {...register("department")} />
        </div>
        <div>
          <label>Услуга</label>
          <ul>
            {cart.services.map(item => {
              return <li key={item.id}>
                <span className={s.name}>{item.name}</span>
                <span className={s.price}>{item.price}₽</span>
                <span
                  className={s.close}
                  data-id={item.id}
                  onClick={() => handleClick({
                    id: item.id,
                    name: item.name,
                    price: item.price
                  })}
                >&#10006;
                </span>
              </li>
            })}
          </ul>
        </div>
        <div>
          <label>Мастер</label>
          <input type="text" readOnly value={cart.barber.name} {...register("staff_id")} />
        </div>
        <div>
          <label>Дата, время</label>
          <input type="text" readOnly value={format(new Date(cart.dateTime), "dd MMMM yyyy, HH:mm", { locale: ruLocale })} {...register("datetime")} />
        </div>
        <div>
          <label>Ваше имя</label>
          <input type="text" {...register("name")} required className={errors.name && s.error} onFocus={(e) => e.currentTarget.classList.remove(s.error)} />

        </div>
        <div>
          <label>Номер телефона</label>
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar="_" type="text"
            required
            {...register("phone", {
              pattern: phoneRegExp
            })}
            placeholder='Введите номер телефона'
            className={errors.phone && s.error}
            onFocus={(e) => e.currentTarget.classList.remove(s.error)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email", validateEmail)}
            required
            placeholder='Введите ваш email'
            className={errors.email && s.error}
            onFocus={(e) => e.currentTarget.classList.remove(s.error)}
          />
        </div>
        <div>
          <label>Комментарий</label>
          <input type="text" {...register("comment")} />
        </div>
        <button type='submit' className={s.button}> Отправить </button>
      </form>
      {isOpen && <ModalWindow />}
    </main>
  );
};

export default Form;

