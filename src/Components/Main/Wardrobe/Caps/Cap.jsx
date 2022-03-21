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
                    <div className={s.Beige}>
                        <div className={s.textBeige}>
                            <a href="/beigeCAP">
                                Beige
                            </a>
                        </div>
                    </div>

                    <div className={s.Navy}>
                        <div className={s.textNavy}>
                            <a href="/navyCAP">
                                Navy
                            </a>
                        </div>
                    </div>

                </div>

            </div>
    )
}


export default Cap;