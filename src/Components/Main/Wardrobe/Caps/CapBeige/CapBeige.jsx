import React from "react";
import s from './CapBeige.module.css'

const CapBeige = () => {
    return (
        <div className={s.main}>
            <div id="page-preloader" className="preloader"></div>
            <div className={s.maintext}>
                Dark Minium
            </div>

            <div>
                <div className={s.DarkMinium1}></div>
            </div>
            <div>
                <div className={s.DarkMinium2}></div>
            </div>

            <div className={s.cost}>
                50$
            </div>


            <div className={s.properties1}>
                Combination 100% Cotton.
            </div>
            <div className={s.properties2}>
                The logo is applied by machine embroidery.
            </div>
            <div className={s.properties3}>
                Made in USA
            </div>
            <div className={s.properties4}>
                Sizes: S(56-57)cm, M(57-58)cm, L(59-60)cm, XL(62-63)cm, 2XL(64-65)см.
            </div>

            <a className={s.buy}>
                ADD TO CART →
            </a>
            <div>
                <div className={s.DarkMinium}>
                    <a href='/DarkMiniumHat'>

                    </a>
                </div>
                <div className={s.Taupe}>
                    <a href='/TaupeHat'>

                    </a>
                </div>
            </div>

        </div>
    )
}


export default CapBeige;