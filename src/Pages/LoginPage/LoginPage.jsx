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
import { schemaLogin, schemaRegistration } from "./schema/schema.js";



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
    const [type, setType] = useState('password');

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
        if(type === 'password') {
            setType('text')
        }
        else{setType('password')}
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
        async ( email, username, password ) => {
            switch (value) {
                case 'login':
                    dispatch(loginUser( await email, password ));
                    break;
                case 'reg':
                    dispatch(registrationUser( await  email, username, password ));
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
                                            {type === 'password' ?
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#8E8E8E"
                                                >
                                                    <path d="M.176.175a.6.6 0 0 0-.059.781l.059.067 3.227 3.229a7.989 7.989 0 0 0-3.164 4.6.6.6 0 0 0 1.164.29 6.792 6.792 0 0 1 2.864-4.026l1.448 1.448a3.2 3.2 0 0 0 4.525 4.524l4.735 4.736a.6.6 0 0 0 .907-.782l-.059-.067-4.89-4.891v-.002l-.96-.958-2.296-2.296h.002L5.375 4.526v-.002L4.47 3.62 1.024.175a.6.6 0 0 0-.848 0Zm6.387 7.237 2.828 2.828a2 2 0 0 1-2.828-2.828ZM8 2.8c-.8 0-1.576.118-2.311.34l.99.988a6.802 6.802 0 0 1 7.918 5.018.6.6 0 0 0 1.165-.29A8.002 8.002 0 0 0 8 2.8Zm.156 2.808 3.04 3.04a3.203 3.203 0 0 0-3.04-3.04Z"/>
                                                </svg>
                                                : <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#8E8E8E"
                                                    preserveAspectRatio="xMinYMin meet"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 13.334c1.041 0 1.927-.365 2.656-1.094.73-.73 1.094-1.615 1.094-2.656 0-1.042-.365-1.928-1.094-2.657-.73-.729-1.615-1.093-2.656-1.093-1.042 0-1.927.364-2.657 1.093-.729.73-1.093 1.615-1.093 2.657 0 1.041.364 1.927 1.093 2.656.73.729 1.615 1.094 2.657 1.094Zm0-1.5a2.17 2.17 0 0 1-1.594-.657 2.17 2.17 0 0 1-.656-1.593c0-.625.218-1.157.656-1.594A2.17 2.17 0 0 1 10 7.333a2.17 2.17 0 0 1 1.593.657c.438.437.657.969.657 1.594a2.17 2.17 0 0 1-.657 1.593 2.17 2.17 0 0 1-1.593.657Zm0 4a9.649 9.649 0 0 1-5.542-1.698c-1.667-1.132-2.875-2.65-3.625-4.552.75-1.903 1.958-3.42 3.625-4.553A9.655 9.655 0 0 1 10 3.334c2.027 0 3.875.565 5.541 1.697 1.667 1.132 2.875 2.65 3.625 4.553-.75 1.902-1.958 3.42-3.625 4.552-1.666 1.132-3.514 1.698-5.541 1.698Zm0-1.667a7.95 7.95 0 0 0 4.323-1.24 8.143 8.143 0 0 0 3.01-3.343 8.144 8.144 0 0 0-3.01-3.344A7.954 7.954 0 0 0 10 5a7.95 7.95 0 0 0-4.323 1.24 8.144 8.144 0 0 0-3.01 3.344 8.143 8.143 0 0 0 3.01 3.343A7.954 7.954 0 0 0 10 14.167Z"/>
                                                </svg>}
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
                                            {type === 'password' ?
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#8E8E8E"
                                                >
                                                    <path d="M.176.175a.6.6 0 0 0-.059.781l.059.067 3.227 3.229a7.989 7.989 0 0 0-3.164 4.6.6.6 0 0 0 1.164.29 6.792 6.792 0 0 1 2.864-4.026l1.448 1.448a3.2 3.2 0 0 0 4.525 4.524l4.735 4.736a.6.6 0 0 0 .907-.782l-.059-.067-4.89-4.891v-.002l-.96-.958-2.296-2.296h.002L5.375 4.526v-.002L4.47 3.62 1.024.175a.6.6 0 0 0-.848 0Zm6.387 7.237 2.828 2.828a2 2 0 0 1-2.828-2.828ZM8 2.8c-.8 0-1.576.118-2.311.34l.99.988a6.802 6.802 0 0 1 7.918 5.018.6.6 0 0 0 1.165-.29A8.002 8.002 0 0 0 8 2.8Zm.156 2.808 3.04 3.04a3.203 3.203 0 0 0-3.04-3.04Z"/>
                                                </svg>
                                                : <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#8E8E8E"
                                                    preserveAspectRatio="xMinYMin meet"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 13.334c1.041 0 1.927-.365 2.656-1.094.73-.73 1.094-1.615 1.094-2.656 0-1.042-.365-1.928-1.094-2.657-.73-.729-1.615-1.093-2.656-1.093-1.042 0-1.927.364-2.657 1.093-.729.73-1.093 1.615-1.093 2.657 0 1.041.364 1.927 1.093 2.656.73.729 1.615 1.094 2.657 1.094Zm0-1.5a2.17 2.17 0 0 1-1.594-.657 2.17 2.17 0 0 1-.656-1.593c0-.625.218-1.157.656-1.594A2.17 2.17 0 0 1 10 7.333a2.17 2.17 0 0 1 1.593.657c.438.437.657.969.657 1.594a2.17 2.17 0 0 1-.657 1.593 2.17 2.17 0 0 1-1.593.657Zm0 4a9.649 9.649 0 0 1-5.542-1.698c-1.667-1.132-2.875-2.65-3.625-4.552.75-1.903 1.958-3.42 3.625-4.553A9.655 9.655 0 0 1 10 3.334c2.027 0 3.875.565 5.541 1.697 1.667 1.132 2.875 2.65 3.625 4.553-.75 1.902-1.958 3.42-3.625 4.552-1.666 1.132-3.514 1.698-5.541 1.698Zm0-1.667a7.95 7.95 0 0 0 4.323-1.24 8.143 8.143 0 0 0 3.01-3.343 8.144 8.144 0 0 0-3.01-3.344A7.954 7.954 0 0 0 10 5a7.95 7.95 0 0 0-4.323 1.24 8.144 8.144 0 0 0-3.01 3.344 8.143 8.143 0 0 0 3.01 3.343A7.954 7.954 0 0 0 10 14.167Z"/>
                                                </svg>}
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