import propTypes from 'prop-types';
import Card from '../Card/Card';
import css from './List.module.css';

const List = ({ data }) => {
  return (
    <ul className={css.list}>
      <p className={css.title}>Your order</p>
      {data.length !== 0 ? (
        data.map(({ image, itemId, name, price, quantity }) => {
          return (
            <Card
              key={itemId}
              image={image}
              name={name}
              price={price}
              quantity={quantity}
              itemId={itemId}
            />
          );
        })
      ) : (
        <p>You card empty</p>
      )}
    </ul>
  );
};

List.propTypes = {
  data: propTypes.array,
};

export default List;
