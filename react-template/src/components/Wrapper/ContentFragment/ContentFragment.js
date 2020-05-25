import React from "react";
import "./ContentFragment.css"


/**
 * EN
 * The component describes UI fragment in main window section.
 *
 * RU
 * Комонент описывает UI рагмент в главной части окна приложения.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const ContentFragment = props => {
    return (
        <div className="fragment" style={{
            width: props.width,
            height: props.height
        }}>
            <h1 className="title">{props.title}</h1>
            {props.content}
        </div>)
};