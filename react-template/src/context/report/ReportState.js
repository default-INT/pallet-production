import React, {useReducer} from "react";
import {ReportContext} from "./reportContext";
import {reportReducer} from "./reportReducer";

const report = {
    employees: [
        {
            id: 1,
            fullName: 'Стольный С.В.',
            avatarLink: '/resources/img/logo192.png',
            mainPosition: 'Сбойщик',
            salaryInDay: 30,
            age: 17,
            works: []
        },
        {
            id: 2,
            fullName: 'Деккер М.В.',
            avatarLink: '/resources/img/logo192.png',
            mainPosition: 'Сбойщик',
            salaryInDay: 25,
            age: 20,
            works: []
        }
    ],
    shipments: [
        {
            company: 'МозырьСоль',
            count: 1000
        }
    ]
};

export const ReportState = ({children}) => {
    const [state, dispatch] = useReducer(reportReducer, report);

    const addEmployee = (employee) => dispatch({

    });

    return (
        <ReportContext.Provider value={{
            report: state
        }}>
            {children}
        </ReportContext.Provider>
    )
};