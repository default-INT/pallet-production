import React, {useContext, useEffect} from "react";
import {Employee} from "./Employee/Employee";
import {EmployeeAdder} from "./EmployeeAdder";
import {FirebaseContext} from "../../context/firebase/firebaseContext";

/**
 * EN
 * The UI component witch responsible for added employees in report.
 *
 * RU
 * UI компонент который отвечает за добавление сотрудников в отчёт.
 *
 * @return {*}
 * @constructor
 */
export const EmployeesSelector = () => {
    const {loading, employees, fetchEmployees} = useContext(FirebaseContext);
    useEffect(() => {
        fetchEmployees();
        // esLint-disable-next-line
        console.log(employees);
    }, []);

    return (
        <div className="employees">
            <Employee/>
            <EmployeeAdder employees={employees}/>
        </div>
    );
};