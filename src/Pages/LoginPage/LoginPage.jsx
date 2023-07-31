import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Spinner from '../../Components/Spinner/Spinner';
import { loginUser, registrationUser } from '../../redux/user/operation';
import { getLoadingUser, getUser } from '../../redux/user/selectors';
import 'react-toastify/dist/ReactToastify.css';
import css from './LoginPage.module.css';
import Joi from "joi";



const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getLoadingUser);
  const user = useSelector(getUser);
  const [value, setValue] = useState('login');
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
  });


  { /* Начало валидации формы. Функция срабатывает по нажатию на кнопку */ }

  const schema = Joi.object().keys({
    password: Joi.string()
        .min(5)
        .max(100)
        .required(),
    email: Joi.string()
        .min(5)
        .max(200)
        .required()
  });

  const [errors, setErrors] = useState([]);

  function validationField(schema, value, field) {
    const err = JSON.parse(JSON.stringify(errors));
    console.log(err)
    const res = schema.validate(value);
    console.log(res)
    console.log(value)
    console.log(res)
    let errorsList = {};
    if (res.error) {
      res.error.details.forEach((error) => {
        errorsList[field] = error.message;
        console.log(error.message);
        setTimeout(() => alert('Email and Password must be at least 5 characters long'), 0);
      });
      setErrors({
        ...errors,
        ...errorsList
      });
    }
    else {
      delete err[field];
      setErrors(err);
    }
  }

  function handleChange1(email, password) {
    const payload = {
      email,
      password
    };
    validationField(schema, payload);
    console.log(schema)
  }


  function validationPaylod(payload) {
  handleChange1();
    const res = schema.validate(payload);
    if (res.error) {
      console.log(errors)
    } else {
      console.log('ok!')
    }
  }

  { /* Конец валидации формы */ }


  useEffect(() => {
    if (user.token) {
      localStorage.setItem('token', user.token);
      navigate(-1);
    }
  }, [navigate, user.token]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitUser(form);
    setForm({
      email: '',
      password: '',
      username: '',
    });
  };

  const submitUser = useCallback(
    async ({ email, username, password }) => {
      switch (value) {
        case 'login':
          dispatch(loginUser({ email, password }));
          break;
        case 'reg':
          dispatch(registrationUser({ email, username, password }));
          break;
        default:
          ' Что-то пошло не так....';
          break;
      }
    },
    [dispatch, value],
  );

  const handleValue = e => {
    setValue(e.target.value);
  };

  const loader = isLoading ? (
    <div className={css.loader}>
      <Spinner />
    </div>
  ) : (
    <div className={css.dog1}></div>
  );

  return (
    <div className={css.container}>
      {loader}
      <div className={css.box}>
        <div className={css.btnBox}>

          <Button
            active={css.btnActive}
            onClick={e => handleValue(e)}
            text="Логин"
            value="login"
            name={value}
          />
          <Button
            active={css.btnActive}
            onClick={e => handleValue(e)}
            text="Регистрация"
            value="reg"
            name={value}
          />
        </div>
        {value === 'login' ? (
          <form method="post" onSubmit={handleSubmit} className={css.form}>
            <Input
              className={css.input}
              placeholder={'Введите email'}
              type={'text'}
              name={'email'}
              value={form.email}
              onChange={handleChange}
            />
            <Input
              className={css.input}
              placeholder={'Пароль'}
              type={'password'}
              name={'password'}
              value={form.password}
              onChange={handleChange}
            />
            <button type="submit" className={css.btn} onClick={validationPaylod}>
              Логин
            </button>
          </form>
        ) : (
          <form method="post" onSubmit={handleSubmit} className={css.form}>
            <Input
              className={css.input}
              placeholder={'Введите email'}
              type={'text'}
              name={'email'}
              value={form.email}
              onChange={handleChange}
            />
            <Input
              className={css.input}
              placeholder={'Имя'}
              type={'text'}
              name={'username'}
              value={form.username}
              onChange={handleChange}
            />
            <Input
              className={css.input}
              placeholder={'Пароль'}
              type={'password'}
              name={'password'}
              value={form.password}
              onChange={handleChange}
            />
            <button type="submit" className={css.btn} onClick={validationPaylod}>
              Регистрация
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
