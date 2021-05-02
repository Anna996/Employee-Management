import "./App.css";
import ListOfEmployees from "./Employee/ListOfEmployees";
import AddEmployeeBtn from "./Employee/AddEmployeeBtn";
import "bootstrap/dist/css/bootstrap.css";
import SearchComponent from "./Employee/SearchComponent";
import { useState } from "react";
import "react-app-polyfill/stable";

function App() {
  const allEmployeesData = {
    type: "allEmployees",
    input: null,
  };

  const [specificData, setSpecificData] = useState(allEmployeesData);

  const [refreshList, setRefreshList] = useState(0);

  /**
   * Each time 'refreshList' is being changed, the list component is refreshed.
   * Because of the useEffect hook.
   */
  const handleRefreshList = () => setRefreshList(refreshList + 1);

  /**
   * Shares with the list component which data to show:
   * employees By:  ID / first name / last name.
   */
  const handleSearchBtn = (data) => {
    setSpecificData(data);
  };

  // Tells the list component to show all the employees.
  const handleShowAllEmployeesBtn = () => {
    if (specificData.type !== allEmployeesData.type) {
      setSpecificData(allEmployeesData);
    }
  };

  return (
    <div className="app">
      <header className="app__header">Employee List</header>

      <SearchComponent
        className="app__search"
        searchBtn={handleSearchBtn}
      ></SearchComponent>

      <div className="app__body">
        <ListOfEmployees
          specificData={specificData}
          refreshList={refreshList}
          handleRefreshList={handleRefreshList}
        ></ListOfEmployees>

        <div className="app__body__btns">
          <AddEmployeeBtn
            className="app__addEmployeeBtn"
            handleRefreshList={handleRefreshList}
          ></AddEmployeeBtn>

          <button className="btn btn-info" onClick={handleShowAllEmployeesBtn}>
            Show All Employees
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
