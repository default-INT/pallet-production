import React from "react";

const months = [
    'Январь', 'Февраль', 'Март',
    'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'
];

export const CalendarHeader = props => (
    <div className="head">
        <div className="prev">
            <a onClick={() => props.onSelectMonth({
                monthId: props.selectMonth.monthId === 0 ? 11 : --props.selectMonth.monthId,
                year: props.selectMonth.monthId === 0 ? --props.selectMonth.year
                    : props.selectMonth.year
            })}>{'<'}</a>
        </div>
        <div className="month">
            {months[props.selectMonth.monthId]}
        </div>
        <div className="year">
            {props.selectMonth.year}
        </div>
        <div className="next">
            <a onClick={() => props.onSelectMonth({
                monthId: props.selectMonth.monthId === 11 ? 0 : ++props.selectMonth.monthId,
                year: props.selectMonth.monthId === 11 ? ++props.selectMonth.year
                    : props.selectMonth.year
            })}>{'>'}</a>
        </div>
    </div>
);