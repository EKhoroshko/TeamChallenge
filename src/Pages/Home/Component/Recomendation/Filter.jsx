import css from './Recomendation.module.css';

// eslint-disable-next-line react/prop-types
const Filter = ({ onFilterSelect, btnName }) => {
  const buttonsData = [
    { name: 'news', label: 'News' },
    { name: 'popular', label: 'Popular products  ' },
    { name: 'action', label: 'Actions' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = btnName === name;
    const style = active ? css.btn + ' ' + css.active : css.btn;

    return (
      <button
        type="button"
        className={style}
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className={css.list}>{buttons}</div>;
};

export default Filter;
