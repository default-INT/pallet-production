import React, {useReducer} from "react";
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import axios from 'axios'
import {FETCH_EMPLOYEES, SHOW_LOADER} from "../types";

const url = 'https://pallet-production.firebaseio.com';


export const FirebaseState = ({children}) => {
    const initialState = {
        employees: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchEmployees = async () => {
        const res = await axios.get(`${url}/employees.json`);

        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        });

        dispatch({type: FETCH_EMPLOYEES, payload});
        console.log('fetchEmployees', res.data);
    };

    const addEmployee = async employee => {
        const res = await axios.post(`&{url}/employees.json`,
            employee)
    };

    return (
        <FirebaseContext.Provider value={{
            showLoader, addEmployee, fetchEmployees,
            loading: state.loading,
            employees: state.employees
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};