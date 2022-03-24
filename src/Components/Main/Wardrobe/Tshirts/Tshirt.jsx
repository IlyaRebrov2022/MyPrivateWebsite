import React from "react";
import s from './Tshirt.module.css'


const Tshirt = () => {
    return (
        <div className={s.main}>
            <div id="page-preloader" className="preloader"></div>
            <div className={s.text}>
                Tshirts
            </div>

            <div>
                <a href="/MediumGreyTshirt" className={s.MediumGrey}>

                </a>
            </div>
            <div>
                <a href="/BlackTshirt" className={s.Black}>

                </a>
            </div>
        </div>
    )
}


export default Tshirt;
