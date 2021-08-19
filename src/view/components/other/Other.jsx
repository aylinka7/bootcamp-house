import { Card } from "../cards/Cards"
import css from "./other.module.css" 

export function Other() {
    return(
        <div>
            <h1 className={css.title}>Other Packages</h1>
            <div className={css.other}>
            <div className={css.flash}>Flash Offer</div>
                <div className={css.left}>
                <img className={css.img_left} src="../../images/img-other.svg" alt="" />
                </div>
                <div className={css.right}>
                    <img  className={css.stars} src="../../images/Stars.svg" alt="" />
                    <p className={css.hotel_title}>Hotel Blue Haven</p>
                    <p className={css.desc}>Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do</p>
                    <div className={css.icons}>
                        <img src="../../images/location.svg" alt="" />
                        <p >1749 Wheeler Ridge  Delaware</p>
                    </div>
                    <div className={css.icons}>
                        <img src="../../images/user.svg" alt="" />
                        <p >2 x Guests</p>
                    </div>
                    <div className={css.icons}>
                        <img src="../../images/home.svg" alt="" />
                        <p >1 x Room</p>
                    </div>
                    <img className={css.first_price} src="../../images/first-price.svg" alt="" />
                    <div className={css.bottom}>
                        <p className={css.price} >$ 8,500</p>
                        <button className={css.btn}>
                        Book Now
                        </button>

                    </div>


                </div>
            </div>
            <Card />
        </div>
    )
}
