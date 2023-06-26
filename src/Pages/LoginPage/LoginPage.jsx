import { useState } from 'react';
import { redirect } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({
    mail: '',
    password: '',
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
    });
    redirect('/');
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="mail"
        value={form.mail}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Логин</button>
    </form>
  );
};

export default LoginPage;
