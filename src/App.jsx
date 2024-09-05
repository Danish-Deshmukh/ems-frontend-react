import "./App.css";
import EmployeeComponenet from "./components/EmployeeComponenet";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<ListEmployeeComponent />} />

          {/* http://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployeeComponent />} />

          {/* http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponenet />} />
          {/* http://localhost:3000/update-employee/id */}
          <Route path="/update-employee/:id" element={<UpdateEmployee />} />
          {/* http://localhost:3000/update-employee/id */}
          <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
