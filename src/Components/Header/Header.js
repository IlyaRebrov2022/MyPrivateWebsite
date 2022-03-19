import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.textName}>
                Ilya Rebrov
            </div>

            <div className={s.sections}>
                <a className={s.Main}>
                    Main
                </a>
            </div>

            <div className={s.sections}>
                <a className={s.Caps}>
                    Caps
                </a>
            </div>

            <div className={s.sections}>
                <a className={s.Shorts}>
                    Shorts
                </a>
            </div>

            <div className={s.sections} >
                <a className={s.Tshirts}>
                    T-Shirts
                </a>
            </div>

        </div>
    )
}


export default Header;