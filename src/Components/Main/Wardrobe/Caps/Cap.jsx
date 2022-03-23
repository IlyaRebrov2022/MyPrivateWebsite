import React from "react";
import s from './Cap.module.css'

const Cap = () => {
    return (

            <div className={s.main}>
                <div id="page-preloader" className="preloader"></div>

                <div className={s.text}>
                    Hats
                </div>

                <div>
                    <a href="/DarkMiniumHat" className={s.DarkMinium}>

                    </a>

                    <a href="/DesertCamouHat" className={s.DesertCamou}>

                    </a>

                </div>

            </div>
    )
}


export default Cap;