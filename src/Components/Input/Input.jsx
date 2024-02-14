// eslint-disable-next-line react/prop-types
const Input = ({ type, name, value, onChange, className, placeholder }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
