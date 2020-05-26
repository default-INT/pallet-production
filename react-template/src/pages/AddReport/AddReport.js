import React from "react";
import {ContentFragment}
    from "../../components/Wrapper/ContentFragment/ContentFragment";
import util from "../../utils";


export const AddReport = props => {
    const date = new Date(props.date);
    return (
    <section className="main-content">
        <ContentFragment
            title={"Отчёт за " + util.dateConverter(date)}
            width="100%"
            height="130vh"
        />
    </section>
)};