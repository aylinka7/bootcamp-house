import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "../infoCard/infocard.module.css";
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";

const styledImg = {
    width: 200,
    height: 200
};

export default function HouseId({ img, location, star, description, price, total, title }) {

    let { id } = useParams();

    const [searchResults, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios(`https://60f1235338ecdf0017b0fa5e.mockapi.io/card/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";

    console.log(searchResults)

    return (
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
    );
}