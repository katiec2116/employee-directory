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


    function columnSort(column) {
        let sortedUsers;
        if (employeeState.order === "ascend") {
            setEmployeeState({
                ...employeeState,
                order: "descend"
            })
        } else {
            setEmployeeState({
                ...employeeState,
                order: "ascend"
            })
        }

        if(column === "Name" && employeeState.order === "ascend"){
            sortedUsers = employeeState.filteredUsers.sort((a, b) => 
            (a.name.first > b.name.first) ? 1 : -1)
        }
        else if 
            (column === "Name" && employeeState.order === "descend"){
                sortedUsers = employeeState.filteredUsers.sort((a, b) => 
                (a.name.first > b.name.first) ? -1 : 1)
        }
        else if 
            (column === "Phone" && employeeState.order === "ascend"){
                sortedUsers = employeeState.filteredUsers.sort((a, b) => 
                (a.phone > b.phone) ? 1 : -1)
        }
        else if 
            (column === "Phone" && employeeState.order === "descend"){
                sortedUsers = employeeState.filteredUsers.sort((a, b) => 
                (b.phone > a.phone) ? 1 : -1)
        }
        else if 
            (column === "Email" && employeeState.order === "ascend"){
                sortedUsers = employeeState.filteredUsers.sort((a, b) => 
                (a.email > b.email) ? 1 : -1)
        }
        else if 
            (column === "Email" && employeeState.order === "descend"){
                sortedUsers = employeeState.filteredUsers.sort((a, b) => 
                (b.email > a.email) ? 1 : -1)
        }
        else
            {
                sortedUsers = employeeState.users
        }
        
        setEmployeeState({
            ...employeeState,
            filteredUsers: sortedUsers
        })
    }

        // const sortedUsers = 
        // employeeState.filteredUsers.sort((a, b) => (a.heading.name.localeCompare(b.heading[1].name)))
        

        
        
        


    
  
   
    return (
        <EmployeeContext.Provider value={{ employeeState, handleInputChange, columnSort }}>
            <Search />
            <Employees />
        </EmployeeContext.Provider>
    );
}

export default EmployeeArea;