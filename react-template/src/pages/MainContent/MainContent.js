import React from "react";
import {ContentFragment} from "../../components/Wrapper/ContentFragment/ContentFragment";
import "../PageStyles.css"
import {TableData} from "./TableData";

/**
 * EN
 * The component describes "Main page" with statistical company data.
 * Takes data from api-server.
 *
 * RU
 * Данный компонент описывает "главную страницу" статистическими данными
 * предприятия.
 * Получает данные с api-сервера.
 */
class MainContent extends React.Component {
    constructor(props) {
        super(props);

    }

    /**
     * TODO: Get from server
     * @return {*}
     */
    render() {
        const statisticData = {
            countPalletsInStorage: 1302,
            countPalletsInDay: 94,
            dailyIncome: 56.4 + ' р.',
            countPalletsPerMonth: 3405,
            countMonthDispatch: 3,
            monthIncome: 4356 + ' р.'
        };
        const mainData = (
            <TableData {...statisticData} />
        );
        return (
            <section className="main-content" style={{
                flexDirection: "column",
                justifyContent: "flex-start"
            }}>
                <ContentFragment
                    title="Главная страница"
                    width="100%"
                    height="400px"
                    content={mainData}
                />
                <ContentFragment title="Склад" width="50%" height="200px" />
            </section>
        )
    }
}

export default MainContent