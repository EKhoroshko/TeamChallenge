import { useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/product/selector';
import HeroSection from './Component/HeroSection/HeroSection';
import Category from './Component/Category/Category';
import Recomendation from './Component/Recomendation/Recomendation';
import AboutUs from './Component/AboutUs/AboutUs';
import Reviews from './Component/Reviews/Reviews.jsx';

const Home = () => {
  const prod = useSelector(getAllProducts);

  return (
    <>
      <HeroSection />
      <Category />
      <Recomendation product={prod.items} />
      <AboutUs />
      <Reviews />
    </>
  );
};

export default Home;
