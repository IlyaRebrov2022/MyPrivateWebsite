import React from "react";
import s from './Footer.module.css'


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.Maintext}>
                WOOLRICH
            </div>
            <div className={s.UnderText}>
                © 2022, WoolRich.com
            </div>
            <a href="https://www.instagram.com/?hl=ru" className={s.instagram}></a>

            <a href='https://uk-ua.facebook.com/' className={s.facebook}></a>
            <div className={s.mastercard}></div>
            <div className={s.visa}></div>

            <div className={s.Textemail}>
                E-mail:
            </div>

            <div className={s.email}>
                support@woolrich.com
            </div>


        </div>
    )
}


export default Footer;