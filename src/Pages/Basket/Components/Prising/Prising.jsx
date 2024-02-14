import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { schema } from '../../../../helpers/JoiSchemaCart';
import { getUser } from '../../../../redux/user/selectors';
import Information from './Information/Information';
import Prise from './Prise/Prise';
import css from './Prising.module.css';

const Prising = () => {
  const delivery = ['pickup', 'delivery from the store', 'new post'];
  const payment = [
    'Payment upon receipt of goods',
    'Payment by card Visa/ MasterCard',
  ];
  const { data, totalPrice } = useLocation().state.paramName;
  const [discountCode, setDiscountCode] = useState('');
  const { email, surname, name, phone } = useSelector(getUser);
  const [contactsForm, setContactsForm] = useState({
    surname: surname || '',
    name: name || '',
    phone: phone || '+380',
    email: email || '',
  });
  const [cheackbox, setCheackbox] = useState('');
  const [cheachPayment, setCheachPayment] = useState('');
  const [errors, setErrors] = useState({});
  const [deliveryForm, setDeliveryForm] = useState({
    city: '',
    post: '',
  });

  useEffect(() => {
    if (email) {
      setContactsForm(prevForm => ({
        ...prevForm,
        email: email,
      }));
    }
  }, [email]);

  const handleDiscount = e => {
    setDiscountCode(e.target.value);
  };

  const handleCheackDiscount = () => {
    console.log('Click'); // делаем запрос на бек
    setDiscountCode('');
  };

  const handleChange = (e, setForm) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSaveContact = e => {
    e.preventDefault();
    const result = schema.validate({
      surname: contactsForm.surname,
      name: contactsForm.name,
      phone: contactsForm.phone,
      email: contactsForm.email,
    });
    if (result.error) {
      setErrors(result.error.details[0]);
    } else {
      setErrors({});
    }

    console.log(result);
    //тут сабмитим форму на бек
    console.log('Click');
  };

  const handleCheacked = (e, setBox) => {
    setBox(e.target.value);
  };

  const transformData = data.map(item => ({
    itemId: item.itemId,
    quantity: item.quantity,
  }));

  const handleSubmitOrder = e => {
    e.preventDefault();
    let form = {
      contactsForm,
      deliveryForm,
      cheachPayment,
      order: transformData,
      totalPrice,
    };
    console.log(form);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <Information
          contactsForm={contactsForm}
          setContactsForm={setContactsForm}
          handleChange={handleChange}
          handleSaveContact={handleSaveContact}
          delivery={delivery}
          handleCheacked={handleCheacked}
          cheackbox={cheackbox}
          deliveryForm={deliveryForm}
          setDeliveryForm={setDeliveryForm}
          setCheackbox={setCheackbox}
          payment={payment}
          cheachPayment={cheachPayment}
          setCheachPayment={setCheachPayment}
          handleSubmitOrder={handleSubmitOrder}
          errors={errors}
        />
        <Prise
          totalPrice={totalPrice}
          discountCode={discountCode}
          handleDiscount={handleDiscount}
          handleCheackDiscount={handleCheackDiscount}
        />
      </div>
    </section>
  );
};

export default Prising;
