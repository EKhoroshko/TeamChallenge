import { Link } from 'react-scroll';
import css from './HeroSection.module.css';
import Input from './../../../../Components/Input/Input';

const HeroSection = () => {
 //const [qwery, setQwery] = useState('');

 /* const handleChangeQwerty = e => {
    setQwery(e.target.value);
  };*/

  return (
    <section className={css.heroSection}>
      <div className={css.container}>
        <div className={css.box}>
          <h2 className={css.title}>With care and love for animals</h2>
          <p className={css.description}>
            Online store for the sale of products for pets with delivery
            throughout Ukraine!
          </p>
          <NavLink className={css.link} to={AppRoute.CATALOG}>
            Shop now
          </NavLink>
        </div>
      </div>
      </div>
      <div className={css.hamster}></div>
    </section>
  );
};

export default HeroSection;
