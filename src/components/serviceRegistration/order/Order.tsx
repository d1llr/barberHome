import { useAppSelector } from '@/redux/store';
import s from '../styles.module.scss'
import { format } from 'date-fns';
import { RegisterOptions, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import ruLocale from "date-fns/locale/ru";



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


  const cart = useAppSelector(state => state.cartSlice)

  const onSubmit = (data: FormValues) => {
    data.department = cart.department.id.toString()
    data.services = cart.services.map(item => item.id)
    data.staff_id = cart.barber.id
    data.datetime = cart.dateTime
    console.log(data);
  };

  const validateEmail: RegisterOptions = {
    required: true,
    validate: (value) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !!value.match(pattern) || "Неверный формат email";
    },
  };

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
              return <li key={item.id}>{item.name} - {item.price}₽ <span>X</span></li>
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
          <label>Комментарий</label>
          <input type="text" {...register("comment")} />
        </div>
        <div>
          <label>Ваше имя</label>
          <input type="text" {...register("name")} required />
        </div>
        <div>
          <label>Номер телефона</label>
          <InputMask mask="+7 (999) 999-99-99" maskChar="_" type="text" required {...register("phone", { pattern: phoneRegExp })} placeholder='Введите номер телефона' />
          {errors.phone && errors.phone.type === "pattern" && <span>Введите корректный номер телефона</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email", validateEmail)} required placeholder='Введите ваш email' />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type='submit' className={s.button}> Отправить </button>
      </form>
      {/* <hr></hr>
      <div className={s.order_container2}>
        <div>
          <h2>Отделение</h2>
          <span className={s.value}>{cart.department.address}</span>
        </div>
        <div>
          <h2>Услуги</h2>
          <ul>
            {cart.services.map(item => {
              return <li key={item.id}>{item.name} <span>X</span></li>
            })}
          </ul>
        </div>
        <div>
          <h2>Мастер</h2>
          <span className={s.value}>{cart.barber.name}</span>
        </div>
        <div>
          <h2>Дата и время</h2>
          <span className={s.value}>{format(new Date(cart.dateTime), "dd MMMM yyyy, HH:mm", { locale: ruLocale })}</span>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Ваше имя' {...register("name")} required />
            <InputMask mask="+7 (999) 999-99-99" maskChar="_" type="text" required {...register("phone", { pattern: phoneRegExp })} placeholder='Введите номер телефона' />
            <input type="text" {...register("email", validateEmail)} required placeholder='Введите ваш email' />
            <input type="text" {...register("comment")} placeholder='Комментарий' />
          </form>
        </div>
      </div> */}
    </main>
  );
};

export default Form;