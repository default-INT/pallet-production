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
    function loadEmployees(event) {
        let textInput = event.target.value;
        console.log(props.employees);
        setEmployees(
            props.employees.filter(employee =>
                employee.fullName.toUpperCase().includes(textInput.toUpperCase())
                || textInput === '')
        )
    }

    return (
        <div className="empl-adder">
            <TransitionGroup component="ul">
                <li>
                    <input type="text"
                           className="empl-filter"
                           placeholder="Добавить сотрудника"
                           onChange={event => loadEmployees(event)}
                           onFocus={event => loadEmployees(event)}
                           onBlur={() => setEmployees([])}
                    />
                </li>
                {employees.map(employee => (
                    <CSSTransition
                        key={employee.id}
                        className={'emplItem'}
                        timeout={800}
                    >
                        <li>
                            <div className="icon">
                                <img src={employee.avatarLink} width="50" alt=""/>
                            </div>
                            <div className="full-name">
                                {employee.fullName}
                            </div>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
};