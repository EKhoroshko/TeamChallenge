import Input from '../../../../../../../Components/Input/Input';
import SmallSpiner from '../../.../../../../../../../Components/SmallSpiner/SmallSpiner';
import propTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({
  contactsForm,
  setContactsForm,
  handleChange,
  handleSaveContact,
  errors,
  token,
  loadingUpdateDataUser,
}) => {
  const { message, path } = errors;
  const { email, name, phone, surname } = contactsForm;

  const btnSave = token ? (
    <button type="submit" className={css.button}>
      Save
    </button>
  ) : null;

  const loadSave = loadingUpdateDataUser ? (
    <div className={css.load}>
      <SmallSpiner />
    </div>
  ) : (
    btnSave
  );

  return (
    <section className={css.contacts}>
      <h3 className={css.title}>1. Contacts</h3>
      <form method="POST" onSubmit={handleSaveContact} className={css.form}>
        <div className={css.inputBox}>
          <label className={css.label}>
            Surname
            <Input
              className={css.input}
              type="text"
              name="surname"
              value={surname}
              onChange={e => handleChange(e, setContactsForm)}
            />
            {errors && String(path) === 'surname' ? (
              <p className={css.error}>{message}</p>
            ) : null}
          </label>
          <label className={css.label}>
            Name
            <Input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={e => handleChange(e, setContactsForm)}
            />
            {errors && String(path) === 'name' ? (
              <p className={css.error}>{message}</p>
            ) : null}
          </label>
          <label className={css.label}>
            Phone
            <Input
              className={css.input}
              placeholder="+38"
              type="tel"
              name="phone"
              value={phone}
              onChange={e => handleChange(e, setContactsForm)}
            />
            {errors && String(path) === 'phone' ? (
              <p className={css.error}>{message}</p>
            ) : null}
          </label>
          <label className={css.label}>
            Email
            <Input
              className={css.input}
              type="text"
              name="email"
              value={email}
              onChange={e => handleChange(e, setContactsForm)}
            />
            {errors && String(path) === 'email' ? (
              <p className={css.error}>{message}</p>
            ) : null}
          </label>
        </div>
        {loadSave}
      </form>
    </section>
  );
};

Contacts.propTypes = {
  contactsForm: propTypes.object,
  setContactsForm: propTypes.func,
  handleChange: propTypes.func,
  handleSaveContact: propTypes.func,
  errors: propTypes.object,
  token: propTypes.string,
  loadingUpdateDataUser: propTypes.bool,
};

export default Contacts;
