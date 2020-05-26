import React from "react";
import Route from "react-router-dom/es/Route";
import {Switch} from "react-router-dom";
import {AddReport} from "../../pages/AddReport/AddReport";
import util from "../../utils";
import {ContentFragment} from "./ContentFragment/ContentFragment";


export const RouteReports = props => {
    const clickDate = new Date(props.match.params.date);

    const content = !util.eqDate(new Date(), clickDate) ?
        <ContentFragment
            title={"Отчёт за " + util.dateConverter(clickDate)}
            width="100%"
            height="130vh"/>
        : <AddReport date={props.match.params.date}/>;
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
};