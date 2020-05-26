import React from "react";
import ProfileItem from "./ProfileItem";
import {MenuItem} from "./MenuItem";
import "./NavMenu.module.css"


/**
 * EN
 * The component describe navigation menu and the storage in self
 * of links to on other sections application.
 *
 * RU
 * Компонент описывает навигационное меню и зранит в себе ссылки
 * на другие разделы приложения.
 */
class NavMenu extends React.Component {
    render() {
        return (
            <nav style={{
                color: this.props.menuBtnState ? "#737373" : "white"
            }}>
                <ProfileItem />
                <MenuItem path="/" text="Главная" />
                <MenuItem path="/reports" text="Отчёты" />
                <MenuItem path="/storage" text="Склад" />
                <MenuItem path="/calc-salary" text="Посчитать зарплату" />
                <MenuItem path="/add-employee" text="Добавить сотрудника" />
                <MenuItem path="/setting" text="Настройки" />
            </nav>
        )
    }
}

export default NavMenu