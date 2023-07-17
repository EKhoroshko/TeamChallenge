import Slider from 'react-slick';
import img from '../../../../assets/girl-review.png';
import css from './Reviews.module.css';

const Reviews = () => {
  const title = 'What our client say!';
  const reviewsCardProducts = [
    {
      text:
        '“This is not the first time I shop at this online store and I can confidently recommend it to everyone. The goods arrive on time and securely packaged. \n' +
        'My darlings are looking forward to your goodies!”',
      img: img,
      name: 'Anna Drozdova',
    },
    {
      text:
        '“This is not the first time I shop at this online store and I can confidently recommend it to everyone. The goods arrive on time and securely packaged. \n' +
        'My darlings are looking forward to your goodies!”',
      img: img,
      name: 'Anna Drozdova',
    },
    {
      text:
        '“This is not the first time I shop at this online store and I can confidently recommend it to everyone. The goods arrive on time and securely packaged. \n' +
        'My darlings are looking forward to your goodies!”',
      img: img,
      name: 'Anna Drozdova',
    },
    {
      text:
        '“This is not the first time I shop at this online store and I can confidently recommend it to everyone. The goods arrive on time and securely packaged. \n' +
        'My darlings are looking forward to your goodies!”',
      img: img,
      name: 'Anna Drozdova',
    },
    {
      text:
        '“This is not the first time I shop at this online store and I can confidently recommend it to everyone. The goods arrive on time and securely packaged. \n' +
        'My darlings are looking forward to your goodies!”',
      img: img,
      name: 'Anna Drozdova',
    },
    {
      text:
        '“This is not the first time I shop at this online store and I can confidently recommend it to everyone. The goods arrive on time and securely packaged. \n' +
        'My darlings are looking forward to your goodies!”',
      img: img,
      name: 'Anna Drozdova',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>{title}</h3>
        <div className={css.slider}>
          <div className={css.slider_box}>
            <Slider {...settings}>
              {reviewsCardProducts.map((rev, index) => {
                return (
                  <div className={css.review} key={index}>
                    <div className={css.review_item}>
                      <div className={css.review_item_content}>
                        <div className={css.review_text}>{rev.text}</div>
                        <div className={css.img_name}>
                          <div className={css.review_img}>
                            <img src={rev.img} />
                          </div>
                          <div className={css.review_name}>{rev.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
