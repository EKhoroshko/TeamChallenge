import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Box from './Components/Box/Box';
import PreviosProduct from './Components/PreviosProduct/PreviosProduct';

const Catalog = () => {
  const viewedProducts =
    JSON.parse(localStorage.getItem('viewedProducts')) || [];

  return (
    <>
      <BreadCrumb />
      <Box />
      <PreviosProduct viewedProducts={viewedProducts} />
    </>
  );
};

export default Catalog;
