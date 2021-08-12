import React from 'react';
import css from "../../pages/main/main.module.css";
import Mouse from "../../../assets/img/mouse.svg"
import MapIcon from "../../../assets/img/map_icon.svg"
import PhoneIcon from "../../../assets/img/phone_icon.svg"

function Main() {
    return (
        <div>
            <div className={css.div}>
                <h1 className={css.h1}>Жилой комплекс <br/>
                    в историческом центре</h1>
                <div className={css.mouse}><img src={Mouse} alt=""/></div>
                <div className={css.contacts}>
                    <div className={css.str}>
                        <div><img src={MapIcon} alt=""/></div>
                        <p className={css.phone}>Наб. реки Фонтанки 10-15</p>
                    </div>
                    <div className={css.str}>
                        <div><img src={PhoneIcon} alt=""/></div>
                        <p className={css.phone}>8 (812) 123-45-67</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;