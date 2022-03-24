import React from "react";
import s from './Sweatshirt.module.css'


const Sweatshirt = () => {
    return (
        <div className={s.main}>
            <div id="page-preloader" className="preloader"></div>
            <div className={s.text}>
                Sweatshirts
            </div>

            <div>
                <a href="/AlaskanBrownSweatshirt" className={s.AlaskanBrown}>

                </a>

            </div>
            <div>
                <a href="/MediumGreySweatshirt" className={s.MediumGrey}>

                </a>

            </div>
        </div>
    )
}


export default Sweatshirt;
