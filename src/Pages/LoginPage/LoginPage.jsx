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
import imgGoogle from '../../assets/loginForm/sign-in-google.svg';
import imgFacebook from '../../assets/loginForm/sign-in-facebook.svg';


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

  const emailRegex = new RegExp(
      '^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$',
  );

  const schemaLogin = Joi.object().keys({
    email: Joi.string()
        .min(5)
        .pattern(emailRegex)
        .messages({
          'string.min': 'Email contains min 5 characters',
          'string.pattern.base': 'Email contains @ and 2-6 characters after dot, latin letters'
        })
        .required(),
    password: Joi.string()
        .min(2)
        .max(25)
        .pattern(new RegExp('[A-Z]{1,2}'))
        .messages({
          'string.min': 'Password contains min 2 characters',
          'string.pattern.base': 'Password contains one uppercase letter, latin'
        })
        .required(),
  });

  const schemaRegistration = Joi.object().keys({
    email: Joi.string()
        .min(5)
        .pattern(emailRegex)
        .messages({
          'string.min': 'Email contains min 5 characters',
          'string.pattern.base': 'Email contains @ and 2-6 characters after dot, latin letters'
        })
        .required(),
    password: Joi.string()
        .min(2)
        .max(25)
        .pattern(new RegExp('[A-Z]{1,2}'))
        .messages({
          'string.min': 'Password contains min 2 characters',
          'string.pattern.base': 'Password contains one uppercase letter, latin'
        })
        .required(),
    username: Joi.string()
        .min(3)
        .trim()
        .messages({
          'string.min': 'Name contains min 3 characters',
        })
        .required(),
  });

  const valid = useCallback((schema, payload) => {
    const res = schema.validate(payload)
    if (res.error) {
        {/* for (let item of res.error.details) {
                errors[item.path[0]] = item.message;
            } */}
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

                                {errors && errors.message === 'Email contains min 5 characters' || errors && errors.message === 'Email contains @ and 2-6 characters after dot, latin letters' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={css.input}
                                    placeholder={'username@gmail.com'}
                                    type={'text'}
                                    name={'email'}
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <label className={css.label}>Password</label>

                                {errors && errors.message === 'Password contains min 2 characters' || errors && errors.message === 'Password contains one uppercase letter, latin' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={`${css.input} ${css.inputPassword}`}
                                    placeholder={'Password'}
                                    type={'password'}
                                    name={'password'}
                                    value={form.password}
                                    onChange={handleChange}
                                />
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

                                {errors && errors.message === 'Email contains min 5 characters' || errors && errors.message === 'Email contains @ and 2-6 characters after dot, latin letters' ? <div className={css.errorMessage}>{errors.message}</div> : null}


                                <Input
                                    className={css.input}
                                    placeholder={'username@gmail.com'}
                                    type={'text'}
                                    name={'email'}
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <label className={css.label}>Name</label>

                                {errors && errors.message === 'Name contains min 3 characters' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={css.input}
                                    placeholder={'Name'}
                                    type={'text'}
                                    name={'username'}
                                    value={form.username}
                                    onChange={handleChange}
                                />

                                <label className={css.label}>Password</label>

                                {errors && errors.message === 'Password contains min 2 characters' || errors && errors.message === 'Password contains one uppercase letter, latin' ? <div className={css.errorMessage}>{errors.message}</div> : null}

                                <Input
                                    className={`${css.input} ${css.inputPassword}`}
                                    placeholder={'Password'}
                                    type={'password'}
                                    name={'password'}
                                    value={form.password}
                                    onChange={handleChange}
                                />

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
