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
    const passwordRegex = new RegExp('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}');

    const nameRegex = new RegExp('([0-9a-zA-Z])');

  const schemaLogin = Joi.object().keys({
    email: Joi.string()
        .pattern(emailRegex)
        .messages({
          'string.pattern.base': 'The email address must contain alphanumeric characters (letters A-Z, numbers 0-9) and specials symbols (“-” and “_”), @ and domain extension e.g., com, org, net after dot'
        })
        .required(),
    password: Joi.string()
        .min(8)
        .max(25)
        .pattern(passwordRegex)
        .messages({
          'string.min': 'Password contains min 8 characters',
            'string.max': 'Password contains max 25 characters',
          'string.pattern.base': 'Passwords must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special symbol (e.g., !, @, #, $, %, ^, &, *)'
        })
        .required(),
  });

  const schemaRegistration = Joi.object().keys({
    email: Joi.string()
        .pattern(emailRegex)
        .messages({
          'string.pattern.base': 'The email address must contain alphanumeric characters (letters A-Z, numbers 0-9) and specials symbols (“-” and “_”), @ and domain extension e.g., com, org, net after dot'
        })
        .required(),
    password: Joi.string()
        .min(8)
        .max(25)
        .pattern(passwordRegex)
        .messages({
          'string.min': 'Password contains min 8 characters',
            'string.max': 'Password contains max 25 characters',
          'string.pattern.base': 'Passwords must include at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special symbol (e.g., !, @, #, $, %, ^, &, *)'
        })
        .required(),
    username: Joi.string()
        .min(3)
        .max(12)
        .pattern(nameRegex)
        //.trim()
        .messages({
          'string.min': 'Name contains min 3 characters',
            'string.max': 'Name contains max 12 characters',
            'string.pattern.base': 'Username must include only latin letter and number'
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
