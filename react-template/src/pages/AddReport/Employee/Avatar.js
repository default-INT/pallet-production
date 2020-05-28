import React from "react";

/**
 * EN
 * Employee icon.
 *
 * RU
 * Иконка сотрудника.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Avatar = props => (
    <div className="empl-avatar">
        <img src={props.avatarLink}
             alt=""/>
    </div>
);