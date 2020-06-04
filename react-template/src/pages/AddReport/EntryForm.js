import React from "react";
import "./EntryForm.css"
import {EmployeesSelector} from "./EmployeesSelector";
import {ReportState} from "../../context/report/ReportState";


/**
 * EN
 * The UI component witch describe form for filling out a report
 * for the selected date.
 *
 * RU
 * Компонент который описывает Форму для заполения отчёта за
 * выбранную дату.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const EntryForm = (props) => {
    return (
        <ReportState>
            <div className="entries-container">
                <form action="">
                    <div className="employees-container">
                        <label>Сотрудники</label>
                        <EmployeesSelector/>
                    </div>
                </form>
            </div>
        </ReportState>
    )
};