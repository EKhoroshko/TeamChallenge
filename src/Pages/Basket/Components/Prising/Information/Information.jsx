import Contacts from './Components/Contacts/Contacts';
import Delivery from './Components/Delivery/Delivery';
import Payment from './Components/Payment/Payment';
import propTypes from 'prop-types';
import css from './Information.module.css';

const Information = ({
  contactsForm,
  setContactsForm,
  handleChange,
  handleSaveContact,
  delivery,
  handleCheacked,
  cheackbox,
  deliveryForm,
  setDeliveryForm,
}) => {
  return (
    <div className={css.box}>
      <Contacts
        contactsForm={contactsForm}
        setContactsForm={setContactsForm}
        handleChange={handleChange}
        handleSaveContact={handleSaveContact}
      />
      <Delivery
        delivery={delivery}
        handleCheacked={handleCheacked}
        cheackbox={cheackbox}
        deliveryForm={deliveryForm}
        setDeliveryForm={setDeliveryForm}
        handleChange={handleChange}
      />
      <Payment />
    </div>
  );
};

Information.propTypes = {
  contactsForm: propTypes.object,
  handleChange: propTypes.func,
  handleSaveContact: propTypes.func,
  delivery: propTypes.array,
  handleCheacked: propTypes.func,
  cheackbox: propTypes.string,
  deliveryForm: propTypes.object,
  setContactsForm: propTypes.func,
  setDeliveryForm: propTypes.func,
};

export default Information;
