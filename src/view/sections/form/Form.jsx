import React from "react";
import css from "./form.module.css";

export function Form() {
    return(
        <div>
            <div className={css.cta}>
                <div className={css.wrapper}>
                    <div className={css.cta__text}>
                        <div className={css.title}>
                            <h1>Хотите посмотреть?</h1>
                        </div>
                        <div className={css.text}>
                            <p>
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                            </p>
                        </div>
                    </div>
                    <form className={css.cta__form}>
                        <div className={css.form_block}>
                            <p>
                                <input type="text" name="name" placeholder="Ваше имя"/>
                            </p>
                            <p className={css.p}>
                                *Мы никому не передаем ваши данные. &nbsp; &nbsp; &nbsp; &nbsp; И не сохраняем ваш номер в базу.
                            </p>
                        </div>
                        <div className={css.form_block}>
                            <p>
                                <input type="tel" name="phone" placeholder="Ваш телефон"/>
                            </p>
                            <p>
                                <button className={css.btn}>
                                    Посмотреть район
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}