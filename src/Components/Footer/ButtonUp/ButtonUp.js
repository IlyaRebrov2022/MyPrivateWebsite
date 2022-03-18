import React from "react";
import s from './ButtonUp.module.css';


const ButtonUp = () => {
    return (
        <div className={s.button}>
            <a className="back_to_top">Вверх</a>

            {(function () {
                'use strict';

                function trackScroll() {
                    var scrolled = window.pageYOffset;
                    var coords = document.documentElement.clientHeight;

                    if (scrolled > coords) {
                        goTopBtn.classList.add('back_to_top-show');
                    }
                    if (scrolled < coords) {
                        goTopBtn.classList.remove('back_to_top-show');
                    }
                }

                function backToTop() {
                    if (window.pageYOffset > 0) {
                        window.scrollBy(0, -0.1);
                        setTimeout(backToTop, 0);
                    }
                }

                var goTopBtn = document.querySelector('.back_to_top');

                window.addEventListener('scroll', trackScroll);
                goTopBtn.addEventListener('click', backToTop);
            })()}
        </div>
    )
}


export default ButtonUp;