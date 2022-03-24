import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.textName}>
                Woolrich
            </div>

            <div className={s.sections}>
                <div className={s.Main}>
                    <a href="/main">
                        Main
                    </a>
                </div>
            </div>

            <div className={s.sections}>
                <div className={s.Caps}>
                    <a href="/caps">
                        Hats
                    </a>
                </div>
            </div>

            <div className={s.sections}>
                <div className={s.Sweatshirt}>
                    <a href="/sweatshirt">
                        Sweatshirts
                    </a>
                </div>
            </div>

            <div className={s.sections}>
                <div className={s.Tshirts}>
                    <a href="/tshirts">
                        T-Shirts
                    </a>
                </div>
            </div>
            <div className={s.sections}>
                <div className={s.YourOrder}>
                    <a href="/yourOrder">
                        Your Order
                    </a>
                </div>
            </div>

        </div>
    )
}


export default Header;