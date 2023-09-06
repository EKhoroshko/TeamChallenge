import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getUser } from '../../../../redux/user/selectors';
import Information from './Information/Information';
import Prise from './Prise/Prise';
import css from './Prising.module.css';

const Prising = () => {
  const delivery = ['pickup', 'delivery from the store', 'new post'];
  const { data, totalPrice } = useLocation().state.paramName;
  const [discountCode, setDiscountCode] = useState('');
  const { email, surname, name, phone } = useSelector(getUser);
  const [contactsForm, setContactsForm] = useState({
    surname: surname || '',
    name: name || '',
    phone: phone || '',
    email: email || '',
  });
  const [cheackbox, setCheackbox] = useState('');
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
    //тут сабмитим форму на бек
    console.log('Click');
  };

  const handleCheacked = e => {
    setCheackbox(e.target.value);
  };

  const transformData = data.map(item => ({
    itemId: item.itemId,
    quantity: item.quantity,
  }));

  console.log(transformData);
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
