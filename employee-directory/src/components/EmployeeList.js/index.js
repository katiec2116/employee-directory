import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeContext from "../../utils/EmployeeContext";
import Employees from "../Employees.js/index.js"

const EmployeeList = () => {
    const [employeeState, setEmployeeState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", },
            { name: "Name", width: "10%", },
            { name: "Phone", width: "10%", },
            { name: "Email", width: "10%", },
            { name: "DOB", width: "10%", }
        ]
    });


    useEffect(() => {
        API.getUsers().then(res => {
            console.log(res.data.results)
            setEmployeeState({ ...employeeState, users: res.data.results, filteredUsers: res.data.results});
        });
    }, []);




    return (
        <EmployeeContext.Provider value={{ employeeState, handleInputChange }}>
        <Employees />
        </EmployeeContext.Provider>
    );
}

export default EmployeeList;