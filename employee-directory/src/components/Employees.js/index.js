import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import EmployeeRow from "../EmployeeRow.js"


function Employees(props) {
    const context = useContext(EmployeeContext);
    console.log(props.column)

    return (
        <div className="mt-3">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.employeeState.headings.map(({ name }) => {
                        return (
                            <th className="text-center"
                                key={name}
                                style={{ width: "15%" }}
                                onClick={() => {
                                    context.columnSort(name);
                                }}>
                                    {name} 
                                    <i 
                                    className= {props.order === "ascend" 
                                    && name===props.column 
                                    && name!== "DOB"
                                    && name!== "Image" 
                                    ? "fa fa-arrow-up" : ""}>
                                    </i>
                                    <i 
                                    className= {props.order === "descend" 
                                    && name===props.column 
                                    && name!== "DOB"
                                    && name!== "Image"  
                                    ? "fa fa-arrow-down" : ""}>
                                    </i>
                            </th>
                        )
                        })}
                    </tr>
                </thead>
                <EmployeeRow />
            </table>
        </div>
    )
};


export default Employees;