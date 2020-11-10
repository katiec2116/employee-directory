import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";



function Search (){ 
    const context = useContext(EmployeeContext);
    const count = context.employeeState.filteredUsers.length


    return (
    <div>
       <form>
      <div className="form-group mt-3">
        <input
          name="search"
          onChange={e => context.handleInputChange(e)}
          type="text"
          className="form-control"
          placeholder="Search for an Employee...."
          id="search"
        />
      </div>
    </form>
    <p className="count">{count} results</p>

    </div>

    )}

export default Search