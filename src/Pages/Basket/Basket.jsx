import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Spinner from '../../Components/Spinner/Spinner';

const Basket = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));

  console.log(cart);
  return (
    <>
      <BreadCrumb />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Basket;
