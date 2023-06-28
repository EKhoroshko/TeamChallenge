const Input = ({ type, name, value, onChange, className, placeholder }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;
