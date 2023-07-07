import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/product/operation';
import { getAllProducts } from '../../redux/product/selector';
import HeroSection from './Component/HeroSection/HeroSection';
import Category from './Component/Category/Category';
import Recomendation from './Component/Recomendation/Recomendation';

const Home = () => {
  const dispatch = useDispatch();
  const prod = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <Category />
      <Recomendation product={prod} />
    </>
  );
};

export default Home;
