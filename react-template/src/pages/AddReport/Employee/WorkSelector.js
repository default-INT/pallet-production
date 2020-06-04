import React from "react";
import {AddWork} from "./AddWork";


/**
 * EN
 *
 * RU
 * UI компонент описывающий часть формы для выбора типа занятости.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const WorkSelector = props => {
    return (
        <div className="empl-work">
            <div className="title">
                <div className="text">Выберите тип занятости</div>
                <AddWork/>
            </div>
            <div className="work-item">
                <select name="work" id="">
                    <option value="1">Сбивал поддоны</option>
                    <option value="2">Работал подсобником</option>
                    <option value="3">Тарцовка</option>
                </select>
                <input type="number" placeholder='Кол-во поддонов'/>
                <div className="empl-income">
                    41р.
                </div>
                <button type="button" className="delete-item">
                    &times;
                </button>
            </div>
        </div>
    )
};