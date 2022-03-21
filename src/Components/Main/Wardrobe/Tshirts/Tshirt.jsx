import React from "react";
import s from './Tshirt.module.css'


const Tshirt = () => {
    return (
        <div className={s.main}>
            <div id="page-preloader" className="preloader"></div>
            <div className={s.text}>
                T-Shirts
            </div>
        </div>
    )
}


export default Tshirt;
