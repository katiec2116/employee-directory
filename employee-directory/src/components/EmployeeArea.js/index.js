import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import EmployeeContext from "../../utils/EmployeeContext";
import Employees from "../Employees.js/index.js"
import Search from "../Search.js"

// set state to hold user info
const EmployeeArea = () => {
    const [employeeState, setEmployeeState] = useState({
        users: [],
        order: "",
        active: "",
        filteredUsers: [],
        headings: [
            { name: "Image" },
            { name: "Name"},
            { name: "Phone" },
            { name: "Email" },
            { name: "DOB" }
        ]
    });
    // load page up with random set of people
    useEffect(() => {
        API.getUsers().then(res => {
            console.log(res.data.results)
            setEmployeeState({ ...employeeState, users: res.data.results, filteredUsers: res.data.results });
        });
    }, []);

    // filters list of employees while name is being typed
    // get value from form in search.js
    function handleInputChange(e) {
        const filter = e.target.value;
        const filteredList = employeeState.users.filter(name => {
            let values = name.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

        setEmployeeState({ ...employeeState, filteredUsers: filteredList });
    };

    // sort function - toggles ascend descend value on click
    function columnSort(column) {
        let order = "ascend"
        if (employeeState.order === "ascend") {
            setEmployeeState({
                ...employeeState,
                order: "descend"
            })
            order = "descend"
        } else {
            setEmployeeState({
                ...employeeState,
                order: "ascend"
            })
            order = "ascend"
        }
        sort(column,order)

    };
    // sorts data based on column clicked and current ascend/descend value
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
            active:column,
            filteredUsers: sortedUsers
        })
    }

    return (
        <EmployeeContext.Provider value={{ employeeState, handleInputChange, columnSort }}>
            <div className = "Container">
            <Search />
            <Employees column={employeeState.active} order={employeeState.order}/>
            </div>
        </EmployeeContext.Provider>
    );
}

export default EmployeeArea;