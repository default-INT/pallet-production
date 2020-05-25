import React from "react";

/**
 * EN
 * Describes column grid-table for output JSON data.
 * Used for output main statistic company data on
 * main page.
 *
 * RU
 * Описывает столбец grid-таблицы для вывода данных из JSON.
 * Используется для вывода основных статистических данных
 * предприятия на главной странице.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const ColumnData = props => (
    <div className="data-column">
        {props.rowsData.map(data =>
            (
                <div>
                    <label>{data[0]}</label>
                    <div className="data-value">{data[1]}</div>
                </div>
            )
        )}
    </div>
);