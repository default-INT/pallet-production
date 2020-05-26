import React from "react";
import {ContentFragment} from "../../components/Wrapper/ContentFragment/ContentFragment";
import "../PageStyles.css"
import {Calendar} from "./Calendar";


class Reports extends React.Component {

    /**
     * TODO: Get from server
     * @return {*}
     */
    render() {
        return (
            <section className="main-content">
                <ContentFragment
                    title="Отчёты"
                    width="100%"
                    height="130vh"
                    content={<Calendar/>}
                />
            </section>
        )
    }
}

export default Reports