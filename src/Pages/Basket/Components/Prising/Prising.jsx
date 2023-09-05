import { useLocation } from 'react-router-dom';
import css from './Prising.module.css';

const Prising = () => {
  const { data } = useLocation().state.paramName;

  const transformData = data.map(item => ({
    itemId: item.itemId,
    quantity: item.quantity,
  }));

  console.log(transformData);
  return (
    <section className={css.section}>
      <div className={css.container}>Prising</div>
    </section>
  );
};

export default Prising;
