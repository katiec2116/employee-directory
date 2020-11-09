import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import EmployeeRow from "../EmployeeRow.js"
import "./style.css";


function Employees(props) {
    const context = useContext(EmployeeContext);

    return (
        <div className="datatable mt-5">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.employeeState.headings.map(({ name, width }) => {
                        return (
                            <th className="colTitle"
                                className={props.order === "ascend" ? "ascend" : ""}
                                key={name}
                                style={{ width }}
                                onClick={() => {
                                    context.columnSort(name);
                                }}>
                                    {name} <i className={props.order === "ascend" ? "fa fa-arrow-up" : "fa fa-arrow-down"}></i>
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