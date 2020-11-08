import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeContext from "../../utils/EmployeeContext";
import Employee from "../Employee.js"

const EmployeeList = () => {
    const [employeeState, setEmployeeState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", },
            { name: "Name", width: "10%", },
            { name: "Phone", width: "20%", },
            { name: "Email", width: "20%", },
            { name: "DOB", width: "10%", }
        ]
    });


    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results.data.results)
            setEmployeeState({
                ...employeeState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }, []);

    return (
        <EmployeeContext.Provider value={{ employeeState }}>

            <Employee />
        </EmployeeContext.Provider>
    );
}

export default EmployeeList;