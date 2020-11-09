import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";


function EmployeeRow() {
    const context = useContext(EmployeeContext);
    // format date from timestamp to mm/dd/yyyy
    function formatDate(date) {
      const dateArray = date.split("-");
      const year = dateArray[0];
      const month = dateArray[1];
      const dayArray = dateArray[2].split("T");
      const day = dayArray[0];
      const formattedDate = [month, day, year].join("-");
      return formattedDate;
    }
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
                  {formatDate(dob.date)}
                </td>
            </tr >
              

      )})}
      </tbody>
      )
    
};

export default EmployeeRow