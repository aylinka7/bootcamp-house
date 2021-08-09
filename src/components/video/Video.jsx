import React from "react";
import css from "./video.module.css";

export function Video() {
    return(
        <div className={css.video}>
            <div className={css.wrapper}>
                <div className={css.video__block}><img src="img/video.png" alt=""/></div>
            </div>
        </div>
    )

}