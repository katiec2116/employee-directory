import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";



function SearchBar (){ 
    const context = useContext(EmployeeContext);


    return (
    <div>
       <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          name="search"
          onChange={e => context.handleInputChange(e)}
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />
        <button  className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>

    </div>

    )}

export default SearchBar