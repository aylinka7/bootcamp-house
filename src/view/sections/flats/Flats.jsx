import React from "react";
import css from "./flats.module.css";



export function Flats() {
  return (
    <div >

      <div className={css.container}>
        <h3 className={css.title}>Наши квартиры</h3>
        <div className={css.cards}>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-1.svg" alt="" />
              <p className={css.desc}>Лофт — 3 этажа</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-2.svg" alt="" />
              <p className={css.desc}>Лофт — 2 этажа</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-1.svg" alt="" />
              <p className={css.desc}>Лофт — 3 этажа</p>
          </div>
          <div className={css.card}>
              <img className={css.card_img} src="../../images/loft-2.svg" alt="" />
              <p className={css.desc}>Лофт — 2 этажа</p>
          </div>
        </div>
      </div>
    </div>
  );
}
