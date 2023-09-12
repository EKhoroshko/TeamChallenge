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
  setCheackbox,
  payment,
  cheachPayment,
  setCheachPayment,
  handleSubmitOrder,
  errors,
  token,
}) => {
  return (
    <div className={css.box}>
      <Contacts
        contactsForm={contactsForm}
        setContactsForm={setContactsForm}
        handleChange={handleChange}
        handleSaveContact={handleSaveContact}
        errors={errors}
        token={token}
      />
      <Delivery
        delivery={delivery}
        handleCheacked={handleCheacked}
        cheackbox={cheackbox}
        deliveryForm={deliveryForm}
        setDeliveryForm={setDeliveryForm}
        handleChange={handleChange}
        setCheackbox={setCheackbox}
      />
      <Payment
        payment={payment}
        handleCheacked={handleCheacked}
        cheachPayment={cheachPayment}
        setCheachPayment={setCheachPayment}
      />
      <button type="submit" className={css.button} onClick={handleSubmitOrder}>
        To order
      </button>
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
  setCheackbox: propTypes.func,
  payment: propTypes.array,
  cheachPayment: propTypes.string,
  setCheachPayment: propTypes.func,
  handleSubmitOrder: propTypes.func,
  errors: propTypes.object,
  token: propTypes.string,
};

export default Information;
