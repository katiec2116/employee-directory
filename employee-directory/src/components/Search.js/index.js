import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";



function SearchBar (){ 
    const context = useContext(EmployeeContext);


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

    </div>

    )}

export default SearchBar