import React from "react";
import s from './YourOrder.module.css'


const Main = () => {
    return (
        <div className={s.main}>

            <div id="page-preloader" className="preloader"></div>

            <div className={s.text}>
                Order Status
            </div>
            <div className={s.searchNumber}>
                <input type='number'></input>
            </div>
            <div className={s.searchPassword}>
                <input type='text'></input>
            </div>
            <div className={s.OrderNumber}>
                Order Number
            </div>
            <div className={s.OrderPassword}>
                Order Password
            </div>
            <a className={s.buy} >
                FIND THE ORDER →
            </a>
        </div>
    )
}


export default Main;