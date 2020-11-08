import React from "react";
import Header from "./components/Header.js";
import EmployeeList from "./components/EmployeeList.js"
import Search from "./components/Search.js"

function App() {

  return (
      <div>
        <Header />
        <Search />
        <EmployeeList/>
      </div>
  )};


export default App;
