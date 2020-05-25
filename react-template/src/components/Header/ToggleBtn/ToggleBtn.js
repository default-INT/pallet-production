import React from 'react';
import "./ToggleBtn.css"

/**
 * EN
 * Burger button, toggle button, menu button.
 * The component describes button which is to open left nav menu.
 *
 * RU
 * Компонент описывает кнопку, которая открывает левое навигационное
 * меню.
 *
 * @return {*}
 * @constructor
 */
export const ToggleBtn = (props) =>(
    <React.Fragment>
        <input type="checkbox" id="checkbox"/>
        <div className="toggle-btn" onClick={() => props.onMenuBtnClick()}>
            <span/>
            <span/>
            <span/>
        </div>
    </React.Fragment>);