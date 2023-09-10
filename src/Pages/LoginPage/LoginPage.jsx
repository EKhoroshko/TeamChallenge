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
import imgGoogle from '../../assets/loginForm/sign-in-google.svg';
import imgFacebook from '../../assets/loginForm/sign-in-facebook.svg';
import {schemaLogin, schemaRegistration} from "./schema/schema.js";


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
  const [type, setType] = useState('password')

  const valid = useCallback((schema, payload) => {
    const res = schema.validate(payload)
    if (res.error) {
        return setErrors(res.error);
    } else {
      return payload;
    }
  }, []);

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

  const togglePasswordType = () => {
      if(type === 'password'){
        setType('text');
      }
      else {setType('password')}
  }

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
            <div>
                <div>
                    <div className={css.btnBox}>
                        <Button
                            active={css.btnActive}
                            style={css.color}
                            onClick={e => handleValue(e)}
                            text="Sign In"
                            value="login"
                            name={value}
                        />

                        <Button
                            active={css.btnActive}
                            style={css.color}
                            onClick={e => handleValue(e)}
                            text="Registration"
                            value="reg"
                            name={value}
                        />
                    </div>
                    <div>
                        {value === 'login' ? (
                            <form method="post" onSubmit={handleSubmit} className={css.form}>
                                <label className={css.label}>Email</label>

                                {errors && errors.message === 'The email address must contain alphanumeric characters (letters A-Z, numbers 0-9) and specials symbols (“-” and “_”), @ and domain extension e.g., com, org, net after dot' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={css.input}
                                    placeholder={'username@gmail.com'}
                                    type={'text'}
                                    name={'email'}
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <label className={css.label}>Password</label>

                                {errors && errors.message === 'Password contains min 8 characters' || errors && errors.message === 'Password contains max 25 characters' || errors && errors.message === 'Passwords must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special symbol (e.g., !, @, #, $, %, ^, &, *)' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <div className={css.password_flex}>
                                    <Input
                                        className={`${css.input} ${css.inputPassword}`}
                                        placeholder={'Password'}
                                        type={type}
                                        name={'password'}
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                    <span onClick={togglePasswordType}>
                                        {type === 'password'
                                            ? <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16"
                                            fill="#8E8E8E"
                                        >
                                            <path d="M.176.175a.6.6 0 0 0-.059.781l.059.067 3.227 3.229a7.989 7.989 0 0 0-3.164 4.6.6.6 0 0 0 1.164.29 6.792 6.792 0 0 1 2.864-4.026l1.448 1.448a3.2 3.2 0 0 0 4.525 4.524l4.735 4.736a.6.6 0 0 0 .907-.782l-.059-.067-4.89-4.891v-.002l-.96-.958-2.296-2.296h.002L5.375 4.526v-.002L4.47 3.62 1.024.175a.6.6 0 0 0-.848 0Zm6.387 7.237 2.828 2.828a2 2 0 0 1-2.828-2.828ZM8 2.8c-.8 0-1.576.118-2.311.34l.99.988a6.802 6.802 0 0 1 7.918 5.018.6.6 0 0 0 1.165-.29A8.002 8.002 0 0 0 8 2.8Zm.156 2.808 3.04 3.04a3.203 3.203 0 0 0-3.04-3.04Z"/>
                                        </svg>
                                        : <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        }
                                    </span>
                                </div>
                                <div className={css.forgotPassword}>
                                    <p>Forgot your password?</p>
                                </div>

                                <button type="submit" className={css.btn}>
                                    Sign In
                                </button>
                            </form>
                        ) : (
                            <form method="post" onSubmit={handleSubmit} className={css.form}>

                                <label className={css.label}>Email</label>

                                {errors && errors.message === 'The email address must contain alphanumeric characters (letters A-Z, numbers 0-9) and specials symbols (“-” and “_”), @ and domain extension e.g., com, org, net after dot' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={css.input}
                                    placeholder={'username@gmail.com'}
                                    type={'text'}
                                    name={'email'}
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <label className={css.label}>Name</label>

                                {errors && errors.message === 'Name contains min 3 characters'|| errors && errors.message === 'Name contains max 12 characters' || errors && errors.message === 'Username must include only latin letter and number' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={css.input}
                                    placeholder={'Name'}
                                    type={'text'}
                                    name={'username'}
                                    value={form.username}
                                    onChange={handleChange}
                                />

                                <label className={css.label}>Password</label>

                                {errors && errors.message === 'Password contains min 8 characters' || errors && errors.message === 'Password contains max 25 characters' || errors && errors.message === 'Passwords must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special symbol (e.g., !, @, #, $, %, ^, &, *)' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <div className={css.password_flex}>
                                    <Input
                                        className={`${css.input} ${css.inputPassword}`}
                                        placeholder={'Password'}
                                        type={type}
                                        name={'password'}
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                    <span onClick={togglePasswordType}>
                                        {type === 'password'
                                            ? <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16" height="16"
                                                fill="#8E8E8E"
                                            >
                                                <path d="M.176.175a.6.6 0 0 0-.059.781l.059.067 3.227 3.229a7.989 7.989 0 0 0-3.164 4.6.6.6 0 0 0 1.164.29 6.792 6.792 0 0 1 2.864-4.026l1.448 1.448a3.2 3.2 0 0 0 4.525 4.524l4.735 4.736a.6.6 0 0 0 .907-.782l-.059-.067-4.89-4.891v-.002l-.96-.958-2.296-2.296h.002L5.375 4.526v-.002L4.47 3.62 1.024.175a.6.6 0 0 0-.848 0Zm6.387 7.237 2.828 2.828a2 2 0 0 1-2.828-2.828ZM8 2.8c-.8 0-1.576.118-2.311.34l.99.988a6.802 6.802 0 0 1 7.918 5.018.6.6 0 0 0 1.165-.29A8.002 8.002 0 0 0 8 2.8Zm.156 2.808 3.04 3.04a3.203 3.203 0 0 0-3.04-3.04Z"/>
                                            </svg>
                                            : <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        }
                                    </span>
                                </div>
                                <button type="submit" className={css.btn}>
                                    Registration
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                <div>
                    <div className={css.continueWithMedia}>
                        <p>or continue with</p>
                    </div>
                    <div className={css.signSocialMediaFlex}>
                        <div className={css.googleFacebook}><img src={imgGoogle} alt="img"/></div>
                        <div className={css.googleFacebook}><img src={imgFacebook} alt="img"/></div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
      </div>
  );
};

export default LoginPage;
