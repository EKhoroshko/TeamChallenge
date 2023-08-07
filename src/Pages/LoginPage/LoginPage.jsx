import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { ToastContainer } from 'react-toastify';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Spinner from '../../Components/Spinner/Spinner';
import { loginUser, registrationUser } from '../../redux/user/operation';
import { getLoadingUser, getUser } from '../../redux/user/selectors';
import 'react-toastify/dist/ReactToastify.css';
import css from './LoginPage.module.css';

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
  const [errors, setErrors] = useState({});
  {/*const [getError, setGetError] = useState({
    email: '',
    password: ''
  });*/}

  const emailRegex = new RegExp(
      '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
  );

  const schemaLogin = Joi.object().keys({
    email: Joi.string().min(5)
        .pattern(emailRegex)
        .messages({
          'string.min': 'Довжина електронної адреси не менш ніж 5 символів',
          'string.pattern.base': 'Електронна адреса має бути у відповідному форматі'
        })
        .required(),
    password: Joi.string()
        .min(2)
        .max(25)
        .pattern(new RegExp('[A-Z]{1,2}'))
        .messages({
          'string.min': 'Довжина паролю не менш ніж 2 символи',
          'string.pattern.base': 'Пароль має містити одну велику літеру'
        })
        .required(),
  });

  const schemaRegistration = Joi.object().keys({
    email: Joi.string()
        .min(5)
        .pattern(emailRegex)
        .messages({
          'string.min': 'Довжина електронної адреси не менш ніж 5 символів',
          'string.pattern.base': 'Електронна адреса має бути у відповідному форматі'
        })
        .required(),
    password: Joi.string()
        .min(2)
        .max(25)
        .pattern(new RegExp('[A-Z]{1,2}'))
        .messages({
          'string.min': 'Довжина паролю не менш ніж 2 символів',
          'string.pattern.base': 'Пароль має містити одну велику літеру'
        })
        .required(),
    username: Joi.string()
        .min(3)
        .trim()
        .messages({
          'string.min': 'Імя має містити не менш ніж 3 символи',
        })
        .required(),
  });

  const valid = useCallback((schema, payload) => {
    const res = schema.validate(payload)
    if (res.error) {
      alert(res.error);
      return setErrors(res.error);

    } else {
      return payload;
    }
  }, []);
  console.log(errors)
  const validationPayload = useCallback(
      payload => {
        const { email, password } = payload;
        const login = { email, password };
        if (value === 'login') {
          return valid(schemaLogin, login);
        } else {
          return valid(schemaRegistration, payload);
        }
      },
      [schemaLogin, schemaRegistration, valid, value],
  );

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

  const handleSubmit = e => {
    e.preventDefault();
    submitUser(validationPayload(form));
    if (!errors) {
      setForm({
        email: '',
        password: '',
        username: '',
      }
      );
    }
  };

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

                <button type="submit" className={css.btn}>
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

                <button type="submit" className={css.btn}>
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
