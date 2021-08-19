import React from "react";
import css from "./map.module.css";
import {YMaps, Map, Placemark} from 'react-yandex-maps';

export function Maps() {
    return(
        <div className={css.maps}>
            <div className={css.wrapper}>
                <h1 className={css.maps__h1}>Район на карте</h1>
                <div className={css.maps__block}>
                    <YMaps>
                        <div>
                            <Map width={1110} height={358} defaultState={{ center: [42.877720, 74.592247], zoom: 9 }} >
                                <Placemark geometry={[42.877720, 74.592247]}/>
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}