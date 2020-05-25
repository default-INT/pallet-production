import React from "react";
import {ContentFragment} from "../../components/Wrapper/ContentFragment/ContentFragment";
import "../PageStyles.css"


class AddReport extends React.Component {

    /**
     * TODO: Get from server
     * @return {*}
     */
    render() {
        return (
            <section className="main-content">
                <ContentFragment title="Добавление отчёта" width="100%" height="100%" />
            </section>
        )
    }
}

export default AddReport