import Joi from 'joi';
import {useState} from "react";
import css from './LoginValidation.module.css'
import Input from "../../../Components/Input/Input.jsx";

const LoginValidation = () => {
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

//schema.validate({});
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
                alert('Email and Password must be at least 5 characters long')
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

    function handleChange(email, password) {
        const payload = {
            email,
            password
        };
        validationField(schema, payload);
    }

    function validationPaylod(payload) {
        handleChange();
        const res = schema.validate(payload);
        if (res.error) {
            console.log(errors)
        } else {
            console.log('ok!')
        }
    }

    return (<div className={css.name}>
<div onMouseUp={validationPaylod}></div>
    </div>)

}





export default LoginValidation;





