import Contacts from './Components/Contacts/Contacts';
import Delivery from './Components/Delivery/Delivery';
import Payment from './Components/Payment/Payment';
import propTypes from 'prop-types';
import css from './Information.module.css';

const Information = ({ contactsForm, handleChange, handleSaveContact }) => {
  return (
    <div className={css.box}>
      <Contacts
        contactsForm={contactsForm}
        handleChange={handleChange}
        handleSaveContact={handleSaveContact}
      />
      <Delivery />
      <Payment />
    </div>
  );
};

Information.propTypes = {
  contactsForm: propTypes.object,
  handleChange: propTypes.func,
  handleSaveContact: propTypes.func,
};

export default Information;
