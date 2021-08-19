import React from "react";
import css from "./question.module.css";

export function Question() {
    return(
        <div className={css.cta_question}>
            <div className={css.wrapper}>
                <h1 className={css.title}>Есть вопросы?</h1>
                <form className={css.form}>
                    <p className={css.confident}>
                        *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
                    </p>
                    <p>
                        <input type="text" name="name" placeholder="Ваше имя"/>
                    </p>
                    <p>
                        <input type="tel" name="phone" placeholder="Ваш телефон"/>
                    </p>
                    <p>
                        <button className={css.btn}>
                            Посмотреть район
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}