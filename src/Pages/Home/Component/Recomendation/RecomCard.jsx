import css from './Recomendation.module.css';

// eslint-disable-next-line react/prop-types
const RecomCard = ({ name, price }) => {
  return (
    <div className={css.cardWrapper}>
      <p>{name}</p>
      <p>{price}</p>
      <button>Buy</button>
    </div>
  );
};

export default RecomCard;
