import { useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { redirect } from 'react-router-dom';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const [value, setValue] = useState('login');
  const [form, setForm] = useState({
    mail: '',
    password: '',
    Doublepassword: '',
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
    console.log(form);
    setForm({
      mail: '',
      password: '',
      Doublepassword: '',
    });
    redirect('/');
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
              name={'mail'}
              value={form.mail}
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
              name={'mail'}
              value={form.mail}
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
            <Input
              className={css.input}
              placeholder={'Повторите пароль'}
              type={'password'}
              name={'Doublepassword'}
              value={form.Doublepassword}
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
