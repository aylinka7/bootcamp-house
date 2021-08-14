import React, { useEffect, useState }  from 'react';
import css from "./search.module.css"
import queryString from "query-string"
import { useLocation } from 'react-router-dom'
import {format} from "date-fns";
import axios from 'axios'
import InfoCard from "../../components/infoCard/InfoCard";
import MapSecond from "../../components/mapSecond/mapSecond";

function Search() {

    const { search } = useLocation();
    const values = queryString.parse(search);
    const [searchResults, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios("https://60f1235338ecdf0017b0fa5e.mockapi.io/card")
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



    const startDate = values.startDate
    const endDate = values.endDate
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;
        return (
            <div className={css.search__container}>
                <main className={css.main}>
                    <section>
                        <p className={css.search__subtitle}>Более 300 вариантов жилья
                            для {values.noOfGuests} жителей {range}</p>
                        <h1 className={css.search__title}>{values.location}: жилье</h1>
                        <div className={css.search__filter}>
                            <p className={css.search__filter__btn}>Бесплатная отмена</p>
                            <p className={css.search__filter__btn}>Тип жилья</p>
                            <p className={css.search__filter__btn}>Цена</p>
                            <p className={css.search__filter__btn}>кровати и комнаты</p>
                            <p className={css.search__filter__btn}>Больше</p>
                        </div>
                        <div className={css.cards}>
                        {searchResults.map(({img, location, title, description, star, price, total}) => (
                            <InfoCard key={img}
                            img={img}
                                      location={location}
                                      title={title}
                                      description={description}
                                      star={star}
                                      price={price}
                                      total={total}
                            />
                            ))}
                        </div>
                    </section>
                    <section className={css.map_second}>
                        <MapSecond />
                    </section>
                </main>
            </div>
        )
}

export default Search;
