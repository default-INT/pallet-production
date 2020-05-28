import React, {useState} from "react";

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
    const [textInput, setTextInput] = useState('');
    return (
        <div className="empl-adder">
            <ul>
                <li>
                    <input type="text"
                           className="empl-filter"
                           placeholder="Добавить сотрудника"
                           onChange={event => setTextInput(event.target.value)}
                    />
                </li>
                {props.employees
                    .filter(employee => employee.fullName
                            .toUpperCase()
                            .includes(textInput.toUpperCase())
                        && textInput !== '')
                    .map(employee => (
                    <li key={employee.id}>
                        <div className="icon">
                            <img src={employee.avatarLink} width="50" alt=""/>
                        </div>
                        <div className="full-name">
                            {employee.fullName}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};