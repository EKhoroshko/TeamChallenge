/* eslint-disable react/prop-types */
import { ReactComponent as ArrLeft } from '../../../../assets/paginationArrow/arrowLeft.svg';
import { ReactComponent as ArrRight } from '../../../../assets/paginationArrow/arrowright.svg';
import css from './Pagination.module.css';

const Paginate = ({
  nextPage,
  previousPage,
  paginate,
  totalPages,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.length > 1 ? (
        <div className={css.paginationContainer}>
          <ul className={css.pagination}>
            <li onClick={previousPage} className={css.pageNumber}>
              <ArrLeft className={css.arrow} />
            </li>
            {pageNumbers.map(number => {
              const active = currentPage === number;
              const style = active
                ? css.pageNumber + ' ' + css.active
                : css.pageNumber;
              return (
                <li
                  key={number}
                  onClick={() => paginate(number)}
                  className={style}
                >
                  {number}
                </li>
              );
            })}
            <li onClick={nextPage} className={css.pageNumber}>
              <ArrRight className={css.arrow} />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Paginate;
