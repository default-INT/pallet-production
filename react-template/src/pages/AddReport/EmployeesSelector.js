import React from "react";
import {Employee} from "./Employee/Employee";
import {EmployeeAdder} from "./EmployeeAdder";

/**
 * EN
 * The UI component witch responsible for added employees in report.
 *
 * RU
 * UI компонент который отвечает за добавление сотрудников в отчёт.
 *
 * @return {*}
 * @constructor
 */
export const EmployeesSelector = () => {
    const employees = [
        {
            id: 1,
            fullName: 'Стольный С.В.',
            avatarLink: '/resources/img/logo192.png',
            mainPosition: 'Сбойщик',
            salaryInDay: 30,
            age: 17
        },
        {
            id: 2,
            fullName: 'Деккер М.В.',
            avatarLink: '/resources/img/logo192.png',
            mainPosition: 'Сбойщик',
            salaryInDay: 25,
            age: 20
        }
    ];
    return (
        <div className="employees">
            <Employee/>
            <EmployeeAdder employees={employees}/>
        </div>
    );
};