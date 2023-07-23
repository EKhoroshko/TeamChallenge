import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';
import { addToCart } from '../../helpers/addToCart';

const Catalog = () => {
  const viewedProducts =
    JSON.parse(localStorage.getItem('viewedProducts')) || [];

  return (
    <>
      <BreadCrumb />
      <Box addToCart={addToCart} />
      <PreviosProduct viewedProducts={viewedProducts} addToCart={addToCart} />
    </>
  );
};

export default Catalog;
