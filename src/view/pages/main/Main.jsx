import React from 'react';
import css from "./main.module.css";
import Mouse from "../../../assets/img/mouse.svg"
import MapIcon from "../../../assets/img/map_icon.svg"
import PhoneIcon from "../../../assets/img/phone_icon.svg"
import {Form} from "../../sections/form/Form";
import {Video} from "../../sections/video/Video";
import {Maps} from "../../sections/map/Map";
import {Question} from "../../sections/question/Question";
import {Footer} from "../../components/footer/Footer";
import {Flats} from "../../sections/flats/Flats";
import {Icons} from "../../sections/icons/Icons";

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
            <Icons />
            <h3 className={`${css.title} container`}>Наши квартиры</h3>
            <Flats />
            <Form />
            <Video />
            <Maps />
            <Question />
            <Footer />
        </div>
    );
}

export default Main;