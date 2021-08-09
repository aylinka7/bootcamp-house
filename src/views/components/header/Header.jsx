import React from "react";
import css from "./header.module.css";
import Logo from "../../../assets/img/logo.svg"

export function Header() {
    return (
            <header className={css.header}>
                <div className={css.container}>
                    <div className={css.logo}>
                        <img src={Logo} alt=""/>
                        <p className={css.underlogo}>АРЕНДА ЖИЛЬЯ</p>
                    </div>
                    <div className={css.navbar}>
                        <div><a className={css.nav_item} href="#">О комплексе</a></div>
                        <div><a className={css.nav_item} href="#">Район</a></div>
                        <div><a className={css.nav_item} href="#">Каталог квартир</a></div>
                        <div><a className={css.nav_item} href="#">Ипотека</a></div>
                        <div><a className={css.nav_item} href="#">Контакты</a></div>
                    </div>
                </div>
            </header>
    )
        ;
}

