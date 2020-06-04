import {ADD_EMPLOYEE, FETCH_EMPLOYEES, REMOVE_EMPLOYEE, SHOW_LOADER} from "../types";


const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_EMPLOYEE]: (state, {payload}) => ({
        ...state,
        employees: [...state.employees, ...payload]
    }),
    [FETCH_EMPLOYEES]: (state, {payload}) => ({...state, employees: payload, loading: false}),
    [REMOVE_EMPLOYEE]: (state, {payload}) => ({
        ...state,
        employees: state.employees.filter(employee => employee.id !== payload)
    }),
    DEFAULT: state => state
};
export  const  firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};