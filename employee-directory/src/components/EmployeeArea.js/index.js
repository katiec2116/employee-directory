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
            setEmployeeState({ ...employeeState, users: res.data.results, filteredUsers: res.data.results });
        });
    }, []);


    function handleInputChange(e) {
        const filter = e.target.value;
        const filteredList = employeeState.users.filter(name => {
            let values = name.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setEmployeeState({ ...employeeState, filteredUsers: filteredList });
    };

    
    async function columnSort(column) {
        let order = "ascend"
        if (employeeState.order === "ascend") {
            await setEmployeeState({
                ...employeeState,
                order: "descend"
            })
            order = "descend"
        } else {
            await setEmployeeState({
                ...employeeState,
                order: "ascend"
            })
            order = "ascend"
        }
        sort(column,order)

    };
    
    function sort(column, order){
        let sortedUsers;
        if (column === "Name" && order === "ascend") {
            sortedUsers = employeeState.filteredUsers.sort((a, b) =>
                (a.name.first > b.name.first) ? 1 : -1)
        }
        else if
            (column === "Name" && order === "descend") {
            sortedUsers = employeeState.filteredUsers.sort((a, b) =>
                (a.name.first > b.name.first) ? -1 : 1)
        }
        else if
            (column === "Phone" && order === "ascend") {
            sortedUsers = employeeState.filteredUsers.sort((a, b) =>
                (a.phone > b.phone) ? 1 : -1)
        }
        else if
            (column === "Phone" && order === "descend") {
            sortedUsers = employeeState.filteredUsers.sort((a, b) =>
                (b.phone > a.phone) ? 1 : -1)
        }
        else if
            (column === "Email" && order === "ascend") {
            sortedUsers = employeeState.filteredUsers.sort((a, b) =>
                (a.email > b.email) ? 1 : -1)
        }
        else if
            (column === "Email" && order === "descend") {
            sortedUsers = employeeState.filteredUsers.sort((a, b) =>
                (b.email > a.email) ? 1 : -1)
        }
        else {
            sortedUsers = employeeState.users
        }
        setEmployeeState({
            ...employeeState,
            order: order,
            filteredUsers: sortedUsers
        })
    }

    return (
        <EmployeeContext.Provider value={{ employeeState, handleInputChange, columnSort }}>
            <Search />
            <Employees />
        </EmployeeContext.Provider>
    );
}

export default EmployeeArea;