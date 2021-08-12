import React from 'react';
import css from "./search.module.css"

function Search() {
    return (
        <div className="container">
            <main className={css.main}>
                <section>
                <p className={css.search__subtitle}>Более 300 вариантов жилья</p>
                    <h1 className={css.search__title}>Бишкек: жилье</h1>
                    <div className={css.search__filter}>
                        <p className={css.search__filter__btn}>Бесплатная отмена</p>
                        <p className={css.search__filter__btn}>Тип жилья</p>
                        <p className={css.search__filter__btn}>Цена</p>
                        <p className={css.search__filter__btn}>кровати и комнаты</p>
                        <p className={css.search__filter__btn}>Больше</p>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Search;