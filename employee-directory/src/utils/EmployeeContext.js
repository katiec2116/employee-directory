import React from "react";

const EmployeeContext = React.createContext({
    search: "",
    results: []
});

export default EmployeeContext;
