import css from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ type, text, value, onClick, active, name }) => {
  const activeBtn = value === name;
  const clazz = activeBtn ? css.button + ' ' + active : css.button;
  return (
    <button className={clazz} type={type} value={value} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
