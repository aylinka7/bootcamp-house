import css from "./other.module.css" 

export function Other() {
    return(
        <div>
            <h1>Other Packages</h1>
            <div>
                <div className={css.left}>
                <img src="" alt="" />
                <div className={css.flash}>Flash Offer</div>
                </div>
                <div className={css.right}></div>
            </div>
        </div>
    )
}
