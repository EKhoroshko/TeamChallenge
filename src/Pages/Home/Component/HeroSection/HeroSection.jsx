import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';
import css from './HeroSection.module.css';
import Input from './../../../../Components/Input/Input';

const HeroSection = () => {
 //const [qwery, setQwery] = useState('');

 /* const handleChangeQwerty = e => {
    setQwery(e.target.value);
  };*/

  return (
    <section className={css.heroSection}>
      <div className={css.generalSection}>
        <div className={css.container}>
          <div className={css.box}>
            <div className={css.blockSearch}>
              <Input
                className={css.input}
                type="search"
                name="search"
                //value={qwery}
                //onChange={handleChangeQwerty}
              />
              <span className={css.textField}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
            <div className={css.animalsImages}>
              <div className={css.parrot}></div>
              <div className={css.dog}></div>
              
            </div>
            <div className={css.title}>
              <h1>
                Affordable Pet Joy:
                <div>Pawsitively</div>
                <div>Delightful</div>
              </h1>
            </div>
            <div className={css.food}></div>
            <NavLink to={AppRoute.PRODUCT}>
              <div className={css.mainButton}></div>
            </NavLink>
        </div>
      </div>
      </div>
      <div className={css.hamster}></div>
    </section>
  );
};

export default HeroSection;
