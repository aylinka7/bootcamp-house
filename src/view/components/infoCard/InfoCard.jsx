import css from "./infocard.module.css"
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";

function InfoCard({img,location,title,description, star, price, total}) {
    return(
        <div className={css.card__search}>
            <div className={css.card_image}>
                <img src={img} height={220} width={320} className={css.card_image} />
            </div>

            <div className={css.card__inner}>
                <div className={css.card_location}>
                    <p>{location}</p>
                    <HeartIcon width={30} height={30} />
                </div>
                <h4 className={css.card__title}>{description}</h4>
                <p className={css.card__description}>{title}</p>
                <div className={css.card__rating}>
                    <p className={css.card_star}>
                        <StarIcon width={30} height={30}/>
                        {star}
                    </p>
                    <div>
                        <p className={css.card_price}>
                            {price}
                        </p>
                        <p className={css.card_total}>
                            {total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard