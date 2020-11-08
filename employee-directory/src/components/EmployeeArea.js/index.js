import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeContext from "../../utils/EmployeeContext";
import Employees from "../Employees.js/index.js"
import Search from "../Search.js"

const EmployeeArea = () => {
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


    function handleInputChange (e) {
        const filter = e.target.value;
        const filteredList = employeeState.users.filter(name => {
        let values = name.name.first.toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setEmployeeState({ ...employeeState, filteredUsers: filteredList });
      };

    return (
        <EmployeeContext.Provider value={{ employeeState, handleInputChange }}>
        <Search />
        <Employees />
        </EmployeeContext.Provider>
    );
}

export default EmployeeArea;