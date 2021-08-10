import React from "react";
import css from "./footer.module.css";
import youtube from "../../assets/img/footer_youtube.png";
import vk from "../../assets/img/footer_vk.png";
import facebook from "../../assets/img/footer_facebook.png";
import instagram from "../../assets/img/footer_instagram.png"
import logo from "../../assets/img/Logo.png"

export function Footer() {
    return(
        <footer className={css.footer_page}>
            <div className={css.wrapper}>
                <div className={css.footer__block}>
                    <div className={css.footer_logo}>
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                        <p className={css.footer__after}>жилой комплекс</p>
                    </div>
                </div>
                <div className={css.footer__block}>
                    <menu className={css.footer__menu}>
                        <ul>
                            <li><a href="#">О комплексе</a></li>
                            <li><a href="#">Район</a></li>
                            <li><a href="#">Каталог квартир</a></li>
                            <li><a href="#">Ипотека</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </menu>
                </div>
                <div className={css.footer__block}>
                    <div className={css.footer__menu}>
                        <menu className={css.footer__menu}>
                            <ul>
                                <li><a href="#">О комплексе</a></li>
                                <li><a href="#">Район</a></li>
                                <li><a href="#">Каталог квартир</a></li>
                                <li><a href="#">Ипотека</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </menu>
                    </div>
                </div>

                <div class={css.footer__block}>
                    <div class={css.footer__about}>
                        <menu class={css.footer__menu}>
                            <ul>
                                <li><span>Адрес:</span>Наб. реки Фонтанки 10-15</li>
                                <li><span>Телефон:</span><a href="tel: 8 (812) 123-45-67">8 (812) 123-45-67</a></li>
                                <li><span>Отдел продаж:</span>10:00 - 20:00</li>
                                <li><span>E-mail:</span><a href="mailto: vip@housevip.ru">vip@housevip.ru</a></li>
                            </ul>
                            <div class={css.footer__socials}>
                                <a href="#"><img src={youtube} alt=""/></a>
                                <a href="#"><img src={vk} alt=""/></a>
                                <a href="#"><img src={facebook} alt=""/></a>
                                <a href="#"><img src={instagram} alt=""/></a>
                            </div>
                        </menu>
                    </div>
                </div>
            </div>
        </footer>
    )
}