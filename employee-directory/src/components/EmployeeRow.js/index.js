import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";


function EmployeeRow() {
    const context = useContext(EmployeeContext);

    return (
       <tbody>
            
            {context.employeeState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                return (

            <tr key={login.uuid}>
                <td data-th="Image">
                  <img
                    src={picture.medium}
                    alt={"profile"}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone">
                  {phone}
                </td>
                <td data-th="Email">
                    {email}
                </td>
                <td data-th="DOB">
                  {dob.date}
                </td>
            </tr >
              

      )})}
      </tbody>
      )
    
};

export default EmployeeRow