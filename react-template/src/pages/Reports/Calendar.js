import React, {useState} from "react";
import "./Calendar.css";
import {NavLink} from "react-router-dom";
import util from "../../utils"
import {WeekDays} from "./WeekDays";
import {CalendarHeader} from "./CalendarHeader";


const styleNotMonthDate = {
    background: "white",
    color: "gray"
};

const styleNowDate = {
    background: "#f00",
    color: "white"
};

/**
 * EN
 * Return url for select date.
 *
 * @param date {Date}
 * @return {string}
 */
const getPathReport = date => `/reports/${date.toJSON()}`;

const SelectDate = ({date}) => (
    <NavLink to={getPathReport(date)}
             style={styleNowDate}>
        <div key={date}>
            {date.getDate()}
        </div>
    </NavLink>
);

const DefaultDate = ({date}) => (
    <NavLink to={getPathReport(date)}>
        <div key={date}>{date.getDate()}</div>
    </NavLink>
);

const NotMonthDate = ({date}) => (
    <NavLink to={getPathReport(date)} style={styleNotMonthDate}>
        <div key={date}>
            {date.getDate()}
        </div>
    </NavLink>
);


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

    let startMonthDate = new Date(selectYear, selectMonth, 1);

    const days = [[]];

    if (startMonthDate.getDay() !== 1) {
        let pastDate = new Date(startMonthDate);
        pastDate.setDate(0);
        while (pastDate.getDay() !== 0) {
            days[0].push(
                <NotMonthDate date={new Date(pastDate)}/>
            );
            pastDate.setDate(pastDate.getDate() - 1);
        }
    }
    days[0].reverse();
    do {
        const inDate = new Date(startMonthDate);
        days[0].push(
            util.eqDate(startMonthDate, nowDate) ? <SelectDate date={inDate} />
            : <DefaultDate date={inDate}/>
        );
        startMonthDate.setDate(startMonthDate.getDate() + 1);
    } while (startMonthDate.getDay() !== 1);
    days.push([]);

    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const inDate = new Date(startMonthDate);
            days[i].push(
                startMonthDate.getMonth() !== selectMonth ? <NotMonthDate date={inDate} />
                : (util.eqDate(startMonthDate, nowDate) ? <SelectDate date={inDate} />
                : <DefaultDate date={inDate} />)
            );
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
    const nowDate = new Date();
    const [selectMonth, setSelectMonth] = useState({
        monthId: nowDate.getMonth(),
        year: nowDate.getFullYear()
    });
    const days = getDaysForCalendar(selectMonth.monthId, selectMonth.year);

    return (<div className="calendar">
        <CalendarHeader selectMonth={selectMonth} onSelectMonth={setSelectMonth}/>
        <WeekDays />
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