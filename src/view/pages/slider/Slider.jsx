import React from "react";
import css from "./slider.module.css";
import Slider123 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <img src="/images/next-arrow.svg" 
      className={css.arrow}
      onClick={onClick} />
    );
  }

export function Slider() {
  const settings = {
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: false,
  };
  return (
    <div>
         <div className={css.container}>
        <div className={css.cards}>
    <Slider123 {...settings} className={css.slider}>
      <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-1.svg" alt="" />
              <p className={css.desc}>Лофт 4 - комнатная</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/living-room2.jpg" alt="" />
              <p className={css.desc}>Гостиная</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/bedroom.jpg" alt="" />
              <p className={css.desc}>Спальня </p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/teenroom.jpg" alt="" />
              <p className={css.desc}>Спальня 2</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/childrenroom.jpg" alt="" />
              <p className={css.desc}>Спальня 3</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/kitchen.jpg" alt="" />
              <p className={css.desc}>Кухня</p>
          </div>
      </Slider123>
      <Slider123 {...settings} className={css.slider}>
      <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-2.svg" alt="" />
              <p className={css.desc}>Лофт  3 - комнатная</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/living-room3.jpg" alt="" />
              <p className={css.desc}>Living-room</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/bedroom.jpg" alt="" />
              <p className={css.desc}>Bedroom</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/teenroom.jpg" alt="" />
              <p className={css.desc}>Спальня 2</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/kitchen2.jpg" alt="" />
              <p className={css.desc}>Kitchen</p>
          </div>
      </Slider123>
      <Slider123 {...settings} className={css.slider}>
      <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-1.svg" alt="" />
              <p className={css.desc}>Лофт  2 - комнатная</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/living-room3.jpg" alt="" />
              <p className={css.desc}>Living-room</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/bedroom.jpg" alt="" />
              <p className={css.desc}>Bedroom</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/kitchen2.jpg" alt="" />
              <p className={css.desc}>Kitchen</p>
          </div>
      </Slider123>
      <Slider123 {...settings} className={css.slider}>
      <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-2.svg" alt="" />
              <p className={css.desc}>Лофт  1 - комнатная</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/living-room.jpg" alt="" />
              <p className={css.desc}>Living-room</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/kitchen2.jpg" alt="" />
              <p className={css.desc}>Kitchen</p>
          </div>
      </Slider123>
      </div>
      </div>
    </div>
  );
}
