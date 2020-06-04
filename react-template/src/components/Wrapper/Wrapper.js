import React from 'react';
import NavMenu from "./NavMenu/NavMenu";
import MainContent from "../../pages/MainContent/MainContent";
import "./Wrapper.css"
import Route from "react-router-dom/es/Route";
import Reports from "../../pages/Reports/Reports";
import Switch from "react-router-dom/es/Switch";
import {RouteReports} from "./RouteReports";


/**
 * EN
 * The web-application wrapper which storage in self to all components.
 *
 * RU
 * Обёртка веб-приложения которая хранит в себе все компоненты.
 * P.S. При при изменении состояния кнопки меню в данном компоненте
 * меняется grid, тем самым сдвигая нав. меню в лево.
 *
 * @param props
 * @return {*}
 * @constructor
 */
function Wrapper(props) {
    return (
        <div className="wrapper">

            <div className="content"
                 style={{
                     gridTemplateColumns: props.menuBtnState ? "320px auto" : "0px auto"
                 }}
            >
                <NavMenu menuBtnState={props.menuBtnState} />
                <Switch>
                    <Route exact component={MainContent} path="/"/>
                    <Route exact component={Reports} path="/reports"/>
                    <Route component={RouteReports} path="/reports/:date"/>
                </Switch>

            </div>
        </div>

    )
}

export default Wrapper