import React from "react";
import s from './CapNavy.module.css'

const CapNavy = () => {
    return (
        <div className={s.main}>
            <div id="page-preloader" className="preloader"></div>
            <div className={s.maintext}>
                Navy
            </div>

            <div>
                <div className={s.Navy}>

                </div>

                <div className={s.cost}>
                    50$
                </div>


            </div>

        </div>
    )
}


export default CapNavy;