import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { schema } from '../../../../helpers/JoiSchemaCart';
import {
  getUser,
  getLoadingUserUpdate,
} from '../../../../redux/user/selectors';
import { getIsLoadingProduct } from '../../../../redux/product/selector';
import { getPromo } from '../../../../redux/product/operation';
import { updateInfoUser } from '../../../../redux/user/operation';
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
  const { email, surname, name, phone, token } = useSelector(getUser);
  const loadingPromo = useSelector(getIsLoadingProduct);
  const loadingUpdateDataUser = useSelector(getLoadingUserUpdate);
  const [contactsForm, setContactsForm] = useState({
    email: email || '',
    surname: surname || '',
    name: name || '',
    phone: phone || '+380',
  });
  const [cheackbox, setCheackbox] = useState('');
  const [cheachPayment, setCheachPayment] = useState('');
  const [errors, setErrors] = useState({});
  const [discountMessage, setDiscountMessage] = useState('');
  const [discountPersent, setDiscountPersent] = useState();
  const [comment, setComment] = useState('');
  const [promo, setPromo] = useState('');
  const [deliveryForm, setDeliveryForm] = useState({
    city: '',
    post: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (email) {
      setContactsForm(prevForm => ({
        ...prevForm,
        email: email,
      }));
    }
  }, [email]);

  useEffect(() => {
    if (discountCode === '') {
      setDiscountMessage('');
    }
  }, [discountCode]);

  const handleDiscount = e => {
    setDiscountCode(e.target.value);
  };

  const handleComment = e => {
    setComment(e.target.value);
  };

  const handleCheackDiscount = async () => {
    if (discountCode === '') {
      return await setDiscountMessage('Empty field');
    }
    let code = await dispatch(getPromo(discountCode));
    if (code.payload?.message) {
      return setDiscountMessage(code.payload.message);
    } else {
      await setPromo(discountCode);
      await setDiscountMessage('');
      await setDiscountPersent(code.payload.discountPercentage);
      await setDiscountCode('');
    }
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
      return setErrors(result.error.details[0]);
    } else {
      setErrors({});
      dispatch(updateInfoUser(result.value));
    }
  };

  const handleCheacked = (e, setBox) => {
    setBox(e.target.value);
  };

  const transformData = data.map(item => ({
    itemId: item.itemId,
    quantity: item.counter,
  }));

  let discount =
    discountPersent !== undefined ? (totalPrice * discountPersent) / 100 : 0;
  let fullDiscount = totalPrice - discount;

  const handleSubmitOrder = e => {
    e.preventDefault();
    const result = schema.validate({
      surname: contactsForm.surname,
      name: contactsForm.name,
      phone: contactsForm.phone,
      email: contactsForm.email,
    });
    if (result.error) {
      return setErrors(result.error.details[0]);
    } else {
      setErrors({});
      let form = {
        contactsForm,
        deliveryForm: { method: cheackbox, deliveryForm },
        cheachPayment,
        order: transformData,
        comment,
        totalPrice: fullDiscount,
        discountCode: promo,
      };
      console.log(form);
    }
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
          token={token}
          loadingUpdateDataUser={loadingUpdateDataUser}
        />
        <Prise
          totalPrice={fullDiscount}
          discount={discount}
          discountCode={discountCode}
          handleDiscount={handleDiscount}
          handleCheackDiscount={handleCheackDiscount}
          handleComment={handleComment}
          discountMessage={discountMessage}
          discountPersent={discountPersent}
          loadingPromo={loadingPromo}
        />
      </div>
    </section>
  );
};

export default Prising;
