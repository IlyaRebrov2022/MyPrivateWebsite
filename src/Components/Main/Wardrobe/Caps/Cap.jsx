import React from "react";
import s from './Cap.module.css'

const Cap = () => {
    return (

            <div className={s.main}>
                <div id="page-preloader" className="preloader"></div>

                <div className={s.text}>
                    Cap
                </div>

                <div>
                    <div className={s.DarkMinium}>
                        <div className={s.textDarkMinium}>
                            <a href="/DarkMinium">
                                Buy
                            </a>
                        </div>
                    </div>

                    <div className={s.Navy}>
                        <div className={s.textNavy}>
                            <a href="">
                                Navy
                            </a>
                        </div>
                    </div>

                </div>

            </div>
    )
}


export default Cap;