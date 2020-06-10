import React from "react";
import {Stars} from "./Stars";


/**
 * EN
 *
 * RU
 * UI компонент в котором соддержится основная информация о сотруднике.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Info = props => (
    <div className="info">
        <div className="title">
            <div className="full-name">
                {props.fullName}
            </div>
            <div className="mark">
                <Stars/>
            </div>
        </div>
        <div className="other-info">
            <div className="line">
                <label>
                    Основная должность:
                </label>
                <div>
                    {props.mainPosition}
                </div>
            </div>
            <div className="line">
                <label>
                    Возраст:
                </label>
                <div>
                    {props.age}
                </div>
            </div>
            <div className="line">
                <label>
                    Заработок за день:
                </label>
                <div>
                    {props.salaryInDay}
                </div>
            </div>
        </div>
    </div>
);