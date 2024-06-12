import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout/Layout";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Menu} from "./pages/Menu/Menu";
import {Contact} from "./pages/Contact/Contact";

import RegisterForm from "./pages/Register/RegisterForm";
import Login from "./pages/Login/Login";
import {Navbar} from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Layout/>
        <Routes>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
