import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import EmployeeRow from "../EmployeeRow.js"


function EmployeeInfo() {
    const context = useContext(EmployeeContext);

    return (
        <div className="datatable mt-5">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.employeeState.headings.map(({ name, width }) => {
                        return (
                            <th className="col"
                                key={name}
                                style={{ width }}
                                onClick={() => {
                                    context.handleSort(name.toLowerCase());
                                }}>
                                    {name}
                                <span className="pointer"></span>
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


export default EmployeeInfo;