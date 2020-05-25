import React from "react";
import {ColumnData} from "./ColumnData";
import "./TableData.css"


/**
 * EN
 * Describes grid-table with statistical data for main page.
 * Gets JSON object with data from props and create arrays
 * with data for columns.
 *
 * RU
 * Компонент описывает grid-таблицу со статистическими данными
 * для главной страницы.
 * Получет JSON-объект с данными из props и создаёт массивы с
 * данными для столбцов.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const TableData = props => {
    const leftColumn = [
        ["Количество поддонов на складе:", props.countPalletsInStorage],
        ["Количество сбитых поддонов в день:", props.countPalletsInDay],
        ["Доход за день:", props.dailyIncome]
    ];
    const rightColumn = [
        ["Количество сбитых поддонов за месяц:", props.countPalletsPerMonth],
        ["Количество отгрузок за месяц:", props.countMonthDispatch],
        ["Доход за текущий месяц: ", props.monthIncome]
    ];
    return (
        <div className="table-data">
            <ColumnData rowsData={leftColumn} />
            <ColumnData rowsData={rightColumn} />
        </div>
    )
};