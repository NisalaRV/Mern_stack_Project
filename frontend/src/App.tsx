import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout/Layout";


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
