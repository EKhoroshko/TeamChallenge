import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { loginUser, registrationUser } from '../../redux/user/operation';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('login');
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
  });

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

  const submitUser = async ({ email, username, password }) => {
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
  };

  const handleValue = e => {
    setValue(e.target.value);
  };

  return (
    <div className={css.container}>
      <div className={css.dog1}></div>
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
    </div>
  );
};

export default LoginPage;
