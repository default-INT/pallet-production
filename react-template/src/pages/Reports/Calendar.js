import React, {useState} from "react";
import "./Calendar.css";
import {NavLink} from "react-router-dom";
import util from "../../utils"


const styleNotMonthDate = {
    background: "white",
    color: "gray"
};

const styleNowDate = {
    background: "#f00",
    color: "white"
};

const months = [
    'Январь', 'Февраль', 'Март',
    'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'
];

/**
 * EN
 * Return url for select date.
 *
 * @param date {Date}
 * @return {string}
 */
const getPathReport = date => `/reports/${date.toJSON()}`;


/**
 * EN
 * Return JSX days for calendar on selectMonth and selectYear.
 *
 * RU
 * Возращает компоненты JSX дней для календаря по выбраному
 * месяцу и году.
 *
 * @param selectMonth
 * @param selectYear
 * @return {[[]]}
 */
function getDaysForCalendar(selectMonth, selectYear) {
    const nowDate = new Date();
    nowDate.setHours(0, 0, 0, 0);

    let startMonthDate = new Date(
        selectYear,
        selectMonth,
        1);

    const days = [[]];

    if (startMonthDate.getDay() !== 1) {
        let pastDate = new Date(startMonthDate);
        pastDate.setDate(0);
        while (pastDate.getDay() !== 0) {
            days[0].push(
                <NavLink to={getPathReport(pastDate)} style={styleNotMonthDate}>
                    <div key={pastDate}>
                        {pastDate.getDate()}
                    </div>
                </NavLink>
            );
            pastDate.setDate(pastDate.getDate() - 1);
        }
    }
    days[0].reverse();
    do {
        days[0].push(
            <NavLink to={getPathReport(startMonthDate)}>
                <div key={startMonthDate}>{startMonthDate.getDate()}</div>
            </NavLink>
        );
        startMonthDate.setDate(startMonthDate.getDate() + 1);
    } while (startMonthDate.getDay() !== 1);
    days.push([]);

    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (startMonthDate.getMonth() !== selectMonth) {
                days[i].push(
                    <NavLink to={getPathReport(startMonthDate)}
                             style={styleNotMonthDate}>
                        <div key={startMonthDate}>
                            {startMonthDate.getDate()}
                        </div>
                    </NavLink>
                );
            } else if (util.eqDate(startMonthDate, nowDate)) {
                days[i].push(
                    <NavLink to={getPathReport(startMonthDate)}
                             style={styleNowDate}>
                        <div key={startMonthDate}>
                            {startMonthDate.getDate()}
                        </div>
                    </NavLink>
                );
            } else {
                days[i].push(
                    <NavLink to={getPathReport(startMonthDate)}>
                        <div key={startMonthDate}>{startMonthDate.getDate()}</div>
                    </NavLink>
                );
            }
            startMonthDate.setDate(startMonthDate.getDate() + 1);
        }
        days.push([])
    }

    return days;
}

/**
 * EN
 * JSX component describes UI calendar.
 *
 * @return {*}
 * @constructor
 */
export const Calendar = () => {
    const [selectMonth, setSelectMonth] = useState({
        monthId: 4,
        year: 2020
    });
    const days = getDaysForCalendar(selectMonth.monthId, selectMonth.year);

    return (<div className="calendar">
        <div className="head">
            <div className="prev">
                <a onClick={() => setSelectMonth({
                    monthId: selectMonth.monthId === 0 ? 11 : --selectMonth.monthId,
                    year: selectMonth.monthId === 0 ? --selectMonth.year
                        : selectMonth.year
                })}>{'<'}</a>
            </div>
            <div className="month">
                {months[selectMonth.monthId]}
            </div>
            <div className="year">
                {selectMonth.year}
            </div>
            <div className="next">
                <a onClick={() => setSelectMonth({
                    monthId: selectMonth.monthId === 11 ? 0 : ++selectMonth.monthId,
                    year: selectMonth.monthId === 11 ? ++selectMonth.year
                                                   : selectMonth.year
                })}>{'>'}</a>
            </div>
        </div>
        <div className="week-days">
            <div className="title-day">
                ПН
            </div>
            <div className="title-day">
                ВТ
            </div>
            <div className="title-day">
                СР
            </div>
            <div className="title-day">
                ЧТ
            </div>
            <div className="title-day">
                ПТ
            </div>
            <div className="title-day" style={{color: "#f00"}}>
                СБ
            </div>
            <div className="title-day" style={{color: "#f00"}}>
                ВС
            </div>
        </div>
        <div className="weeks">
            <div className="week-item">
                {days[0]}
            </div>
            <div className="week-item">
                {days[1]}
            </div>
            <div className="week-item">
                {days[2]}
            </div>
            <div className="week-item">
                {days[3]}
            </div>
            <div className="week-item">
                {days[4]}
            </div>
            <div className="week-item">
                {days[5]}
            </div>
        </div>
    </div>)
};