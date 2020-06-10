import React, {useState} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group"


/**
 * EN
 * The UI component which search employee and added him in report.
 *
 * RU
 * UI коспонент который производит поиск сотрудника и добавляет его
 * в отчёт.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const EmployeeAdder = props => {
    const [employees, setEmployees] = useState([]);
    const [innerWidth, setInnerWidth] = useState(0);

    function loadEmployees(event) {
        setInnerWidth(document.querySelector('.empl-filter').clientWidth);

        let textInput = event.target.value;
        setEmployees(
            props.employees.filter(employee =>
                employee.fullName.toUpperCase().includes(textInput.toUpperCase())
                || textInput === '')
        )
    }
    const search = (<li>
        <input type="text"
               className="empl-filter"
               placeholder="Добавить сотрудника"
               onChange={event => loadEmployees(event)}
               onFocus={event => loadEmployees(event)}
               onBlur={() => {
                   setInnerWidth(document.querySelector('.empl-filter').clientWidth);
                   setEmployees([])
               }}
        />
    </li>);
    const setSize = () => {
        document.querySelector('.search-container').style.width = innerWidth + 'px';
    };
    return (
        <div className="empl-adder">
            <TransitionGroup component="ul">
                {search}
                <div className="search-container" onLoad={() => setSize()}>
                {employees.map(employee => (
                    <CSSTransition
                        key={employee.id}
                        className={'emplItem'}
                        timeout={1000}
                    >
                        <li className='emplItem' id={employee.id}>
                            <div className="icon">
                                <img src={employee.avatarLink} width="50" alt=""/>
                            </div>
                            <div className="full-name">
                                {employee.fullName}
                            </div>
                        </li>
                    </CSSTransition>
                ))}
                </div>
            </TransitionGroup>
        </div>
    )
};