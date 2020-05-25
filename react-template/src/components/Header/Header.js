import React from 'react';
import "./Header.css"
import {ToggleBtn} from "./ToggleBtn/ToggleBtn";


/**
 * EN
 * The component describes header wep application. Transmits
 * state button click to the "ToggleBtn" component  from App.js.
 *
 * RU
 * Компонент описывающий шапку веб-приложения. Передаёт
 * состояния нажатия на кнопку компоненту "ToggleBtn" из App.js.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Header = props => (
    <header>
        <ToggleBtn onMenuBtnClick={props.onMenuBtnClick}/>
        <div className="logo">
            PALLET PROD.
        </div>
    </header>
);