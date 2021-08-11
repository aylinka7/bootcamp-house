import css from "./cards.module.css";

export function Card() {
  return (
    <div>
      <div className={css.card}>
        <div className={css.flash}>Flash Offer</div>
        
        <div>
          <img className={css.card_1} src="../../images/card1.svg" alt="" />
        </div>
        <div className={css.card_desc}>
        <p className={css.hotel_title}>LUX* Belle Mare</p>
       
        <div className={css.icons}>
          <img src="../../images/location.svg" alt="" />
          <p>1749 Wheeler Ridge Delaware</p>
        </div>
        <div className={css.icons}>
          <img src="../../images/user.svg" alt="" />
          <p>2 x Guests</p>
        </div>
        <div className={css.icons}>
          <img src="../../images/home.svg" alt="" />
          <p>1 x Room</p>
        </div>
        <img
          className={css.first_price}
          src="../../images/8500.svg"
          alt=""
        />
        <div className={css.bottom}>
          <p className={css.price}>$ 3,000</p>
          <button className={css.btn}>Book Now</button>
        </div>
        </div>
      </div>
    </div>
  );
}
