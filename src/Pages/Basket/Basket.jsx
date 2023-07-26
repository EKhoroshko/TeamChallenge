import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';

const Basket = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));

  console.log(cart);
  return (
    <>
      <BreadCrumb />
    </>
  );
};

export default Basket;
