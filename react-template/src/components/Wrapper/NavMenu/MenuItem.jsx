import React from "react";
import s from "./NavMenu.module.css"
import {NavLink} from "react-router-dom";


/**
 * EN
 * Describe link in navigation menu.
 *
 * RU
 * Описывает ссылку на раздел в навигационном меню.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const MenuItem = props => (
    <NavLink exact to={props.path} activeClassName={s.select} >
        {props.text}
    </NavLink>

);