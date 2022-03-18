import React from "react";
import s from './Footer.module.css'
import ButtonUp from "./ButtonUp/ButtonUp";


const Footer = () => {
    return (
        <div className={s.footer}>
            Footer
            <ButtonUp/>
        </div>
    )
}


export default Footer;