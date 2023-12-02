import { Routes, Route } from "react-router-dom";
// import './App.css';
import ListUser from "./components/users/ListUser";
import CreateUser from "./components/users/CreateUser";
import EditUser from "./components/users/EditUser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>

      <ToastContainer />
      
    </div>
  );
}

export default App;
