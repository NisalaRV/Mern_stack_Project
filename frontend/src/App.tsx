import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AdminDashboard from "./AdminDashboard/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
        <Layout/>
        <Routes>
            <Route path="/admin" Component={AdminDashboard}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
