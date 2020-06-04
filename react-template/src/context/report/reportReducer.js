import {FETCH_EMPLOYEES, ADD_EMPLOYEE, SHOW_LOADER, REMOVE_EMPLOYEE} from "../types";

const testData = [
    {
        id: 1,
        fullName: 'Стольный С.В.',
        avatarLink: '/resources/img/logo192.png',
        mainPosition: 'Сбойщик',
        salaryInDay: 30,
        age: 17
    },
    {
        id: 2,
        fullName: 'Деккер М.В.',
        avatarLink: '/resources/img/logo192.png',
        mainPosition: 'Сбойщик',
        salaryInDay: 25,
        age: 20
    }
];

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_EMPLOYEE]: (state, {payload}) => ({
        ...state,
        employees: [...state.notes, ...payload]
    }),
    [FETCH_EMPLOYEES]: (state, payload) => ({...state, employees: payload}),
    [REMOVE_EMPLOYEE]: (state, payload) => ({
        ...state,
        employees: state.employees.filter(employee => employee.id !== payload)
    }),
    DEFAULT: state => state
};

export const reportReducer = (state, action) => {
    const handle = handlers[action.type()] || handlers.DEFAULT;
    return handle(state, action);
};