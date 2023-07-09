import { useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/product/selector';
import HeroSection from './Component/HeroSection/HeroSection';
import Category from './Component/Category/Category';
import Recomendation from './Component/Recomendation/Recomendation';
import AboutUs from './Component/AboutUs/AboutUs';

const Home = () => {
  const prod = useSelector(getAllProducts);

  return (
    <>
      <HeroSection />
      <Category />
      <Recomendation product={prod} />
      <AboutUs />
    </>
  );
};

export default Home;
