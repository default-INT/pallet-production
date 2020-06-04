import React from "react";
import {Avatar} from "./Avatar";
import {Info} from "./Info";
import {WorkSelector} from "./WorkSelector";


/**
 * RU
 * UI компонент описывающий сотрудника и его тип занятости в отчёте.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const Employee = props => {
    return (
        <div className="employee">
            <div className="empl-data">
                <Avatar avatarLink="/resources/img/logo192.png"/>
                <Info fullName="Трофимов В.С."
                      mainPosition="Руководитель"
                      salaryInDay="50р"
                      age="41"
                />
                <div className="delete-empl-btn">
                    <img src="/resources/img/trash.png" width="20" alt=""/>
                </div>
            </div>
            <WorkSelector/>
        </div>
    )
};