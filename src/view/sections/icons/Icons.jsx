import React from "react";
import css from "./icons.module.css";

export function Icons() {
  return (
    <div>
      <div className={css.container}>
        <div className={css.icons}>
            <div className={css.icon}>
               <img className={css.icon_img} src="../../images/icon-1.svg" alt="" />
               <p className={css.desc}>Рядом исторические парки и скверы</p>
            </div>
            <div className={css.icon}>
               <img className={css.icon_img} src="../../images/icon-2.svg" alt="" />
               <p className={css.desc}>Полностью обустроенный</p>
            </div>
            <div className={css.icon}>
               <img className={css.icon_img} src="../../images/icon-3.svg" alt="" />
               <p className={css.desc}>10 фонтанов на территории</p>
            </div>
            <div className={css.icon}>
               <img className={css.icon_img} src="../../images/icon-4.svg" alt="" />
               <p className={css.desc}>6 км <br /> велодорожек</p>
            </div>
        </div>
      </div>
    </div>
  );
}
