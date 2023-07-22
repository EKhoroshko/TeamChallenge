import css from './Location.module.css';

const Location = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.workTime}>
          <p className={css.time}>
            Times work: <br /> Monday - Fri. from 9:00 to 18:00
          </p>
          <p>
            Address:
            <br /> Kyiv, str. 28, Sichovyh Streltsiv
          </p>
        </div>
        <iframe
          className={css.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.52260745013797!2d30.49750576717189!3d50.45635672338803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce66958994f3%3A0x3b09adbad519c1b3!2z0LLRg9C70LjRhtGPINCh0ZbRh9C-0LLQuNGFINCh0YLRgNGW0LvRjNGG0ZbQsiwgMjgsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1690008987018!5m2!1sru!2sua"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
